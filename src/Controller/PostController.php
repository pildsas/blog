<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Image;
use App\Entity\Post;
use App\Entity\Profile;
use App\Entity\Folder;
use App\Entity\Tag;
use App\Form\PostType;
use App\Utils\FolderManager;
use App\Utils\Interfaces\UploaderInterface;
use App\Utils\TagManager;
use App\Validation\PostValidation;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\File;

class PostController extends AbstractController
{

    /**
     * @Route("/create-post", name="create_post", options={"expose"=true})
     */
    public function createPost(Request $request, UploaderInterface $uploader, FolderManager $folderManager, TagManager $tagManager)
    {

        if ($request->isXmlHttpRequest()) {

            $post_validation = new PostValidation();
            $form = $this->createForm(PostType::class, $post_validation);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {

                $post = new Post;
                $folder = $folderManager->getFolder($form->get('folder')->getData());
                $post->setFolder($folder);
                $post->setTitle($form->get('title')->getData());
                $post->setBody($form->get('body')->getData());
                $post->setAuthor($this->getUser()->getProfile());

                $tag_names = explode(",", $form->get('tags')->getData());
                foreach ($tag_names as $tag_name) {
                    $tag = $tagManager->createTag($tag_name);
                    $post->addTag($tag);
                }

                $em = $this->getDoctrine()->getManager();

                if ($form->get('front_cover')->getData()) {
                    $file = new File($form->get('front_cover')->getData()->getPathName());
                    $fileName = $uploader->upload($file);
                    $image = new Image;
                    $image->setPath(Image::gallery . $fileName);
                    $image->setProfile($this->getUser()->getProfile());
                    $post->setFrontCoverLink(Image::gallery . $fileName);
                    $post->setFrontCover($image);
                    $em->persist($image);
                } else {
                    $post->setFrontCoverLink('/img/defaults/noimage.jpg');
                }

                if ($form->get('header_cover')->getData()) {
                    $file = new File($form->get('header_cover')->getData()->getPathName());
                    $fileName = $uploader->upload($file);
                    $image = new Image;
                    $image->setPath(Image::gallery . $fileName);
                    $image->setProfile($this->getUser()->getProfile());
                    $post->setHeaderCoverLink(Image::gallery . $fileName);
                    $post->setHeaderCover($image);
                    $em->persist($image);
                } else {
                    $post->setHeaderCoverLink('/img/defaults/noimage.jpg');
                }

                $em->persist($post);
                $em->flush();

                return $this->json(['success' => true]);
            } else {
                return $this->json(['success' => false, 'errors' => $form->getErrors(true)]);
            }
        }

        return $this->json(["ajax" => 'only']);
    }

    /**
     * @Route("/edit-post", name="edit_post", options={"expose"=true})
     */
    public function editPost(Request $request, UploaderInterface $uploader, FolderManager $folderManager, TagManager $tagManager)
    {
        if ($request->isXmlHttpRequest()) {
            if ($this->isGranted('ROLE_USER')) {

                $post_validation = new PostValidation();
                $form = $this->createForm(PostType::class, $post_validation);
                $form->handleRequest($request);

                if ($form->isSubmitted() && $form->isValid()) {

                    $post = $this->getDoctrine()->getRepository(Post::class)->findOneBy(['id' => $form->get('id')->getData()]);

                    $folder = $folderManager->getFolder($form->get('folder')->getData());
                    $post->setFolder($folder);
                    $post->setTitle($form->get('title')->getData());
                    $post->setBody($form->get('body')->getData());

                    $tag_names = explode(",", $form->get('tags')->getData());
                    $tagManager->editTags($post, $tag_names);

                    $em = $this->getDoctrine()->getManager();

                    if ($form->get('front_cover')->getData()) {
                        $file = new File($form->get('front_cover')->getData()->getPathName());
                        $fileName = $uploader->upload($file);
                        $image = new Image;
                        $image->setPath(Image::gallery . $fileName);
                        $image->setProfile($this->getUser()->getProfile());
                        $post->setFrontCoverLink(Image::gallery . $fileName);
                        $post->setFrontCover($image);
                        $em->persist($image);
                    }

                    if ($form->get('header_cover')->getData()) {
                        $file = new File($form->get('header_cover')->getData()->getPathName());
                        $fileName = $uploader->upload($file);
                        $image = new Image;
                        $image->setPath(Image::gallery . $fileName);
                        $image->setProfile($this->getUser()->getProfile());
                        $post->setHeaderCoverLink(Image::gallery . $fileName);
                        $post->setHeaderCover($image);
                        $em->persist($image);
                    }


                    $em->persist($post);
                    $em->flush();

                    $serializer = SerializerBuilder::create()->build();

                    $post_data = $serializer->toArray($post, SerializationContext::create()
                        ->setSerializeNull(true)
                        ->setGroups(array('post'))
                        ->enableMaxDepthChecks());


                    return $this->json(['success' => true, 'logged' => true, 'post_data' => $post_data]);
                } else {
                    return $this->json(['success' => false, 'errors' => $form->getErrors(true)]);
                }
            } else {
                return $this->json(['success' => false, 'logged' => false]);
            }
        }


        return $this->json(['ajax' => 'only']);
    }

    /**
     * @Route("/delete-post", name="delete_post", options={"expose"=true})
     */
    public function postDelete(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            if ($this->isGranted('ROLE_USER')) {
                $em = $this->getDoctrine()->getManager();

                $post = $em->getRepository(Post::class)->find($_POST['id']);
                $tags = $post->getTags();
                $id = $post->getId();

                foreach ($tags->getValues() as $tag) {
                    if ($tag->getPost()->count() == 1) {
                        $em->remove($tag);
                        $em->flush();
                    }
                }

                $em->remove($post);
                $em->flush();



                return $this->json(['success' => true, 'id' => $id]);
            } else {
                return $this->json(['success' => false, 'logged' => false]);
            }
        }

        return $this->json(['ajax' => 'only']);
    }


    /**
     * @Route("get-posts", name="get_posts", options={"expose"=true})
     * @Route("get-posts-all", name="get_posts_all", options={"expose"=true})
     */
    public function getPosts(Request $request)
    {

        if ($request->isXmlHttpRequest()) {

            $profile = $this->getDoctrine()->getRepository(Profile::class)->findOneBy(['id' => $_POST['profile_id']]);
            $folder = $this->getDoctrine()->getRepository(Folder::class)->findOneBy(['id' => $_POST['folder_id']]);
            $tag = $this->getDoctrine()->getRepository(Tag::class)->findOneBy(['id' => $_POST['tag_id']]);

            if ($this->isGranted('ROLE_USER')) {
                $auth_data['logged'] = true;

                if ($folder) {
                    $posts = $this->getDoctrine()->getRepository(Post::class)->findByFolder($_POST['page'], $_POST['sort_method'], $profile, $folder);
                } else if ($tag) {
                    $posts = $this->getDoctrine()->getRepository(Post::class)->findByTags($tag, $_POST['page'], $_POST['sort_method']);
                } else {
                    if ($request->get('_route') == 'get_posts') {

                        $posts = $this->getDoctrine()->getRepository(Post::class)->findPostsPaginated($_POST['page'], $_POST['sort_method'], $profile);
                    } else {
                        $posts = $this->getDoctrine()->getRepository(Post::class)->findPaginated($_POST['page'], $_POST['sort_method']);
                    }
                }
            } else {
                $auth_data['logged'] = false;

                if ($tag) {
                    $posts = $this->getDoctrine()->getRepository(Post::class)->findByTags($tag, $_POST['page'], $_POST['sort_method']);
                } else if ($folder) {
                    $posts = $this->getDoctrine()->getRepository(Post::class)->findByFolder($_POST['page'], $_POST['sort_method'], $profile, $folder);
                } else if ($profile) {
                    $posts = $this->getDoctrine()->getRepository(Post::class)->findPostsPaginated($_POST['page'], $_POST['sort_method'], $profile);
                } else {
                    $posts = $this->getDoctrine()->getRepository(Post::class)->findPaginated($_POST['page'], $_POST['sort_method']);
                }
            }

            $serializer = SerializerBuilder::create()->build();
            $posts_data = $serializer->toArray($posts->getItems(), SerializationContext::create()
                ->setSerializeNull(true)
                ->setGroups(array('post', 'like', 'comment'))
                ->enableMaxDepthChecks());


            foreach ($posts as $key => $post) {
                if ($this->isGranted('ROLE_USER')) {
                    if ($this->getUser()->getProfile()->getLiked()->contains($post)) {
                        $state = 'liked';
                        $posts_data[$key]['state'] = $state;
                    } elseif ($this->getUser()->getProfile()->getDisliked()->contains($post)) {
                        $state = 'disliked';
                        $posts_data[$key]['state'] = $state;
                    } else {
                        $state = 'neutral';
                        $posts_data[$key]['state'] = $state;
                    }
                } else {
                    $state = 'neutral';
                    $posts_data[$key]['state'] = $state;
                }
            }

            $pagination = [];
            $pagination['totalCount'] = $posts->getTotalItemCount();
            $pagination['numItemsPerPage'] = $posts->getItemNumberPerPage();
            $pagination['currentPageNumber'] = $posts->getCurrentPageNumber();
            $pagination['folder'] = $folder ? $folder->getId() : null;
            $pagination['tag'] = ['tag' => $tag ? $tag->getId() : null, 'name' => $tag ? $tag->getName() : null];



            return $this->json(['main_data' => $posts_data, 'pagination_data' => $pagination, 'auth_data' => $auth_data]);
        }
    }


    /**
     * @Route("/get-post", name="get_post", options={"expose"=true})
     */
    public function getPost(Request $request)
    {

        if ($request->isXmlHttpRequest()) {

            $post = $this->getDoctrine()->getRepository(Post::class)->findOneBy(['id' => $_POST['post_id']]);

            $serializer = SerializerBuilder::create()->build();
            $post_data = $serializer->toArray($post, SerializationContext::create()
                ->setSerializeNull(true)
                ->setGroups(array('post', 'like', 'comment'))
                ->enableMaxDepthChecks());


            if ($this->isGranted('ROLE_USER')) {
                if ($this->getUser()->getProfile()->getLiked()->contains($post)) {
                    $state = 'liked';
                    $post_data['state'] = $state;
                } elseif ($this->getUser()->getProfile()->getDisliked()->contains($post)) {
                    $state = 'disliked';
                    $post_data['state'] = $state;
                } else {
                    $state = 'neutral';
                    $post_data['state'] = $state;
                }
            } else {
                $state = 'neutral';
                $post_data['state'] = $state;
            }



            return $this->json($post_data);
        }
    }

    /**
     * @Route("/find-tags", name="find_tags", options={"expose"=true})
     */
    public function findTags(Request $request)
    {
        $tags = $this->getDoctrine()->getRepository(Tag::class)->findLike($_GET['query']);

        $serializer = SerializerBuilder::create()->build();
        $tags_data = $serializer->toArray($tags, SerializationContext::create()
            ->setSerializeNull(true)
            ->setGroups(array('tag'))
            ->enableMaxDepthChecks());

        return $this->json(['tags' => $tags_data]);
    }

    /**
     * @Route("/get-tags", name="get_tags", options={"expose"=true})
     */
    public function getTags(Request $request)
    {

        if ($request->isXmlHttpRequest()) {
            $tags = $this->getDoctrine()->getRepository(Tag::class)->findTagsPaginated($_POST['page'], $_POST['sort_method']);

            $serializer = SerializerBuilder::create()->build();
            $tags_data = $serializer->toArray($tags->getItems(), SerializationContext::create()
                ->setSerializeNull(true)
                ->setGroups(array('tag'))
                ->enableMaxDepthChecks());


            $pagination = [];
            $pagination['totalCount'] = $tags->getTotalItemCount();
            $pagination['numItemsPerPage'] = $tags->getItemNumberPerPage();
            $pagination['currentPageNumber'] = $tags->getCurrentPageNumber();



            return $this->json(['main_data' => $tags_data, 'pagination_data' => $pagination]);
        }
    }

    /**
     * @Route("{profile}/{post}", name="read_post", options={"expose"=true})
     */
    public function readPost(Request $request, Profile $profile)
    {
        $post = $request->attributes->get('post');
        $post = $this->getDoctrine()->getRepository(Post::class)->findOneBy(['author' => $profile, 'id' => $post]);
        // dump($post);

        // $serializer = SerializerBuilder::create()->build();
        // $post_data = $serializer->toArray($post, SerializationContext::create()
        //     ->setSerializeNull(true)
        //     ->setGroups(array('tag'))
        //     ->enableMaxDepthChecks());

        if ($this->isGranted('ROLE_USER')) {
            if ($this->getUser()->getProfile()->getLiked()->contains($post)) {
                $state = 'liked';
            } elseif ($this->getUser()->getProfile()->getDisliked()->contains($post)) {
                $state = 'disliked';
            } else {
                $state = 'neutral';
            }
        } else {
            $state = 'neutral';
        }

        return $this->render('post/read_post.html.twig', [
            'profile' => $profile,
            'user' => $profile->getUser(),
            'post' => $post,
            'state' => $state
        ]);
    }
}
