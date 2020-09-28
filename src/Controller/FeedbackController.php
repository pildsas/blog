<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Entity\Image;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Post;
use App\Entity\Profile;
use App\Utils\Interfaces\UploaderInterface;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\File\File;

class FeedbackController extends AbstractController
{
    /**
     * @Route("/like", name="post_like", methods={"POST"}, options={"expose"=true})
     * @Route("/dislike", name="post_dislike", methods={"POST"}, options={"expose"=true})
     * @Route("/unlike", name="post_unlike", methods={"POST"}, options={"expose"=true})
     * @Route("/undislike", name="post_undislike", methods={"POST"}, options={"expose"=true})
     */
    public function postLikes(Request $request)
    {
        // $this->denyAccessUnlessGranted('IS_AUTHENTICATED_REMEMBERED');
        if ($request->isXmlHttpRequest()) {
            if ($this->isGranted('ROLE_USER')) {
                $json = file_get_contents("php://input");
                $data = json_decode($json, true);
                $post = $this->getDoctrine()->getRepository(Post::class)->find($data['id']);

                switch ($request->get('_route')) {
                    case 'post_like':
                        $this->likePost($post);
                        break;

                    case 'post_dislike':
                        $this->dislikePost($post);
                        break;

                    case 'post_unlike':
                        $this->undoLikePost($post);
                        break;

                    case 'post_undislike':
                        $this->undoDislikePost($post);
                        break;
                }

                $serializer = SerializerBuilder::create()->build();
                $data = $serializer->toArray($post, SerializationContext::create()
                    ->setSerializeNull(true)
                    ->setGroups(array('like'))
                    ->enableMaxDepthChecks());


                if ($this->getUser()->getProfile()->getDisliked()->contains($post)) {
                    $state = 'disliked';
                } elseif ($this->getUser()->getProfile()->getLiked()->contains($post)) {
                    $state = 'liked';
                } else {
                    $state = 'neutral';
                }
                $data['state'] = $state;
                $data['logged'] = true;

                return $this->json($data);
            } else {
                return $this->json(['logged' => false]);
            }
        }
        return $this->json(['ajax' => 'only']);
    }

    private function likePost($post)
    {
        $profile = $this->getDoctrine()->getRepository(Profile::class)->find($this->getUser());
        $profile->addLiked($post);
        $em = $this->getDoctrine()->getManager();
        $em->persist($profile);
        $em->flush();
    }
    private function dislikePost($post)
    {
        $profile = $this->getDoctrine()->getRepository(Profile::class)->find($this->getUser());
        $profile->addDisliked($post);
        $em = $this->getDoctrine()->getManager();
        $em->persist($profile);
        $em->flush();
    }
    private function undoLikePost($post)
    {
        $profile = $this->getDoctrine()->getRepository(Profile::class)->find($this->getUser());
        $profile->removeLiked($post);
        $em = $this->getDoctrine()->getManager();
        $em->persist($profile);
        $em->flush();
    }
    private function undoDislikePost($post)
    {
        $profile = $this->getDoctrine()->getRepository(Profile::class)->find($this->getUser());
        $profile->removeDisliked($post);
        $em = $this->getDoctrine()->getManager();
        $em->persist($profile);
        $em->flush();
    }




    /**
     * @Route("/comment-like", name="comment_like", methods={"POST"}, options={"expose"=true})
     * @Route("/comment-dislike", name="comment_dislike", methods={"POST"}, options={"expose"=true})
     * @Route("/comment-unlike", name="comment_unlike", methods={"POST"}, options={"expose"=true})
     * @Route("/comment-undislike", name="comment_undislike", methods={"POST"}, options={"expose"=true})
     */
    public function commentLikes(Request $request)
    {
        // $this->denyAccessUnlessGranted('IS_AUTHENTICATED_REMEMBERED');
        if ($request->isXmlHttpRequest()) {
            if ($this->isGranted('ROLE_USER')) {
                $json = file_get_contents("php://input");
                $data = json_decode($json, true);
                $comment = $this->getDoctrine()->getRepository(Comment::class)->find($data['id']);


                switch ($request->get('_route')) {
                    case 'comment_like':
                        $this->likeComment($comment);
                        break;

                    case 'comment_dislike':
                        $this->dislikeComment($comment);
                        break;

                    case 'comment_unlike':
                        $this->undoLikeComment($comment);
                        break;

                    case 'comment_undislike':
                        $this->undoDislikeComment($comment);
                        break;
                }

                $serializer = SerializerBuilder::create()->build();
                $comment_data = $serializer->toArray($comment, SerializationContext::create()
                    ->setSerializeNull(true)
                    ->setGroups(array('comment'))
                    ->enableMaxDepthChecks());

                $profile = $this->getUser()->getProfile();
                if ($comment->getLikes()->contains($profile)) {
                    $state = 'liked';
                } elseif ($comment->getDislikes()->contains($profile)) {
                    $state = 'disliked';
                } else {
                    $state = 'neutral';
                }
                $comment_data['state'] = $state;
                $comment_data['logged'] = true;

                return $this->json($comment_data);
            } else {
                return $this->json(['logged' => false]);
            }
        }
        return $this->json(['ajax' => 'only']);
    }

    private function likeComment($comment)
    {
        $profile = $this->getDoctrine()->getRepository(Profile::class)->find($this->getUser());
        $comment->addLike($profile);
        $em = $this->getDoctrine()->getManager();
        $em->persist($comment);
        $em->flush();
    }
    private function dislikeComment($comment)
    {
        $profile = $this->getDoctrine()->getRepository(Profile::class)->find($this->getUser());
        $comment->addDislike($profile);
        $em = $this->getDoctrine()->getManager();
        $em->persist($comment);
        $em->flush();
    }
    private function undoLikeComment($comment)
    {
        $profile = $this->getDoctrine()->getRepository(Profile::class)->find($this->getUser());
        $comment->removeLike($profile);
        $em = $this->getDoctrine()->getManager();
        $em->persist($comment);
        $em->flush();
    }
    private function undoDislikeComment($comment)
    {
        $profile = $this->getDoctrine()->getRepository(Profile::class)->find($this->getUser());
        $comment->removeDislike($profile);
        $em = $this->getDoctrine()->getManager();
        $em->persist($comment);
        $em->flush();
    }


    /**
     * @Route("/post-likes", name="post_likes", options={"expose"=true})
     * @Route("/comment-likes", name="comment_likes", options={"expose"=true})
     */
    public function likesData(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            $json = file_get_contents("php://input");
            $data = json_decode($json, true);
            if ($request->get('_route') == "post_likes") {
                $entity = $this->getDoctrine()->getRepository(Post::class)->find($_POST['id']);
                $group = 'like';
            } else {
                $entity = $this->getDoctrine()->getRepository(Comment::class)->find($_POST['id']);
                $group = 'comment';
            }


            $serializer = SerializerBuilder::create()->build();
            $data = $serializer->toArray($entity, SerializationContext::create()
                ->setSerializeNull(true)
                ->setGroups(array($group))
                ->enableMaxDepthChecks());

            return $this->json($data);
        }
        return $this->json(['ajax' => 'only']);
    }


    /**
     * @Route("/post-comment", name="post_comment", options={"expose"=true})
     */
    public function createComment(Request $request, UploaderInterface $uploader)
    {

        if ($request->isXmlHttpRequest()) {
            if ($this->isGranted('ROLE_USER')) {
                $em = $this->getDoctrine()->getManager();

                $comment = new Comment;
                $comment->setProfile($this->getUser()->getProfile());
                $post = $em->getRepository(Post::class)->find($_POST['post_id']);
                $comment->setPost($post);
                $comment->setBody($_POST['comment_text']);

                if (isset($_FILES['image'])) {
                    $file = new File($_FILES['image']['tmp_name']);
                    $fileName = $uploader->upload($file);
                    $image = new Image;
                    $image->setPath(Image::gallery . $fileName);
                    $image->setProfile($this->getUser()->getProfile());
                    $comment->setImg(Image::gallery . $fileName);

                    $em->persist($image);
                }

                $em->persist($comment);
                $em->flush();

                $serializer = SerializerBuilder::create()->build();

                $comment_data = $serializer->toArray($comment, SerializationContext::create()
                    ->setSerializeNull(true)
                    ->setGroups(array('comment'))
                    ->enableMaxDepthChecks());

                $profile = $this->getUser()->getProfile();
                if ($comment->getLikes()->contains($profile)) {
                    $state = 'liked';
                } elseif ($comment->getDislikes()->contains($profile)) {
                    $state = 'disliked';
                } else {
                    $state = 'neutral';
                }
                $comment_data['state'] = $state;
                $comment_data['logged'] = true;


                $count = $post->getComments()->count();
                $comment_data['count'] = $count;

                return $this->json($comment_data);
            }
        }

        return $this->json(['ajax' => 'only']);
    }


    /**
     * @Route("/edit-comment", name="edit_comment", options={"expose"=true})
     */
    public function editComment(Request $request, UploaderInterface $uploader)
    {

        if ($request->isXmlHttpRequest()) {
            if ($this->isGranted('ROLE_USER')) {
                $em = $this->getDoctrine()->getManager();

                $comment = $this->getDoctrine()->getRepository(Comment::class)->findOneBy(['id' => $_POST['id']]);
                $comment->setBody($_POST['text']);

                if (isset($_FILES['image'])) {
                    $file = new File($_FILES['image']['tmp_name']);
                    $fileName = $uploader->upload($file);
                    $image = new Image;
                    $image->setPath(Image::gallery . $fileName);
                    $image->setProfile($this->getUser()->getProfile());
                    $comment->setImg(Image::gallery . $fileName);
                    $em->persist($image);
                } else if ($_POST['image'] == 'remove') {
                    if ($comment->getImg()) {
                        $comment->setImg(null);
                    }
                }
                $em->persist($comment);
                $em->flush();

                $serializer = SerializerBuilder::create()->build();

                $comment_data = $serializer->toArray($comment, SerializationContext::create()
                    ->setSerializeNull(true)
                    ->setGroups(array('comment'))
                    ->enableMaxDepthChecks());

                $profile = $this->getUser()->getProfile();
                if ($comment->getLikes()->contains($profile)) {
                    $state = 'liked';
                } elseif ($comment->getDislikes()->contains($profile)) {
                    $state = 'disliked';
                } else {
                    $state = 'neutral';
                }
                $comment_data['state'] = $state;
                $comment_data['logged'] = true;


                return $this->json(['success' => true, 'logged' => true, 'comment_data' => $comment_data]);
            } else {
                return $this->json(['success' => false, 'logged' => false]);
            }
        }

        return $this->json(['ajax' => 'only']);
    }


    /**
     * @Route("/get-comment", name="get_comment", options={"expose"=true})
     */
    public function getComment(Request $request)
    {
        if ($request->isXmlHttpRequest()) {

            $comment = $this->getDoctrine()->getRepository(Comment::class)->findOneBy(['id' => $_POST['id']]);

            $serializer = SerializerBuilder::create()->build();

            $comment_data = $serializer->toArray($comment, SerializationContext::create()
                ->setSerializeNull(true)
                ->setGroups(array('comment'))
                ->enableMaxDepthChecks());



            if ($this->isGranted('ROLE_USER')) {
                $profile = $this->getUser()->getProfile();

                if ($comment->getLikes()->contains($profile)) {
                    $state = 'liked';
                } elseif ($comment->getDislikes()->contains($profile)) {
                    $state = 'disliked';
                } else {
                    $state = 'neutral';
                }
                $comment_data['state'] = $state;
                $comment_data['logged'] = true;
            }

            return $this->json($comment_data);
        }
        return $this->json(['ajax' => 'only']);
    }

    /**
     * @Route("/get-comments", name="get_comments", options={"expose"=true})
     */
    public function getComments(Request $request)
    {
        if ($request->isXmlHttpRequest()) {

            $comments = $this->getDoctrine()->getRepository(Comment::class)->findBy(['post' => $_POST['post_id']], ['createdAt' => 'DESC']);

            $serializer = SerializerBuilder::create()->build();

            $comment_data = $serializer->toArray($comments, SerializationContext::create()
                ->setSerializeNull(true)
                ->setGroups(array('comment'))
                ->enableMaxDepthChecks());

            if ($this->isGranted('ROLE_USER')) {
                $profile = $this->getUser()->getProfile();
                $profile_data = $serializer->toArray($profile, SerializationContext::create()
                    ->setSerializeNull(true)
                    ->setGroups(array('profile'))
                    ->enableMaxDepthChecks());

                foreach ($comments as $key => $comment) {
                    if ($comment->getLikes()->contains($profile)) {
                        $state = 'liked';
                    } elseif ($comment->getDislikes()->contains($profile)) {
                        $state = 'disliked';
                    } else {
                        $state = 'neutral';
                    }
                    $comment_data[$key]['state'] = $state;
                    $comment_data[$key]['logged'] = true;
                }
            } else {
                $profile_data = false;
            }

            return $this->json(['comment_data' => $comment_data, 'profile_data' => $profile_data]);
        }
        return $this->json(['ajax' => 'only']);
    }


    /**
     * @Route("/delete-comment", name="delete_comment", options={"expose"=true})
     */
    public function deleteComment(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            if ($this->isGranted('ROLE_USER')) {
                $comment = $this->getDoctrine()->getRepository(Comment::class)->findOneBy(['id' => $_POST['id']]);
                $id = $comment->getId();
                $em = $this->getDoctrine()->getManager();
                $em->remove($comment);
                $em->flush();

                $post = $comment->getPost();
                $count = $post->getCommentCount();

                return $this->json(['success' => true, 'id' => $id, 'count' => $count, 'post_id' => $post->getId()]);
            } else {
                return $this->json(['success' => false, 'logged' => false]);
            }
        }

        return $this->json(['ajax' => 'only']);
    }

    /**
     * @Route("/add-following", name="add_following", options={"expose"=true})
     */
    public function addFollowing(Request $request)
    {
        if ($request->isXmlHttpRequest()) {

            // ADD FOLLOWING
            $profile = $this->getDoctrine()->getRepository(Profile::class)->findOneBy(['id' => $_POST['id']]);
            $follower = $this->getUser()->getProfile();
            $follower->addFollowing($profile);

            $em = $this->getDoctrine()->getManager();
            $em->persist($follower);
            $em->flush();

            //GET FOLLOWERS

            $followers = $this->getDoctrine()->getRepository(Profile::class)->findFollowers($profile);


            return $this->json(['followers_count' => count($followers)]);
        }

        return $this->json(['ajax' => 'only']);
    }


    /**
     * @Route("/remove-following", name="remove_following", options={"expose"=true})
     */
    public function removeFollowing(Request $request)
    {
        if ($request->isXmlHttpRequest()) {

            // REMOVE FOLLOWING
            $profile = $this->getDoctrine()->getRepository(Profile::class)->findOneBy(['id' => $_POST['id']]);
            $follower = $this->getUser()->getProfile();
            $follower->removeFollowing($profile);

            $em = $this->getDoctrine()->getManager();
            $em->persist($follower);
            $em->flush();

            //GET FOLLOWERS

            $followers = $this->getDoctrine()->getRepository(Profile::class)->findFollowers($profile);

            return $this->json(['followers_count' => count($followers)]);
        }

        return $this->json(['ajax' => 'only']);
    }

    /**
     * @Route("/get-followers", name="get_followers", options={"expose"=true})
     * @Route("/get-following", name="get_following", options={"expose"=true})
     */
    public function getFollowers(Request $request)
    {
        if ($request->isXmlHttpRequest()) {


            $profile = $this->getDoctrine()->getRepository(Profile::class)->findOneBy(['id' => $_POST['id']]);
            if ($request->get('_route') == 'get_followers') {
                $data = $this->getDoctrine()->getRepository(Profile::class)->findFollowers($profile);
            } else {
                $data = $profile->getFollowing();
            }
            // $followers = $profile->getFollowing();
            $serializer = SerializerBuilder::create()->build();
            $data = $serializer->toArray($data, SerializationContext::create()
                ->setSerializeNull(true)
                ->setGroups(array('like'))
                ->enableMaxDepthChecks());

            return $this->json($data);
        }

        return $this->json(['ajax' => 'only']);
    }



    /**
     * @Route("/get-follow", name="get_follow", options={"expose"=true})
     */
    public function getFollow(Request $request)
    {
        if ($request->isXmlHttpRequest()) {


            $profile = $this->getUser()->getProfile();
            $data = $profile->getFollowing();

            $following = $data->map(function ($obj) {
                return $obj->getId();
            })->getValues();

            $posts = $this->getDoctrine()->getRepository(Post::class)->findFollowed($following, $_POST['page'], $_POST['sort_method']);


            $serializer = SerializerBuilder::create()->build();
            $posts_data = $serializer->toArray($posts->getItems(), SerializationContext::create()
                ->setSerializeNull(true)
                ->setGroups(array('post'))
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

            // must return main_data and pagination_data

            return $this->json(['main_data' => $posts_data, 'pagination_data' => $pagination]);
        }

        return $this->json(['ajax' => 'only']);
    }
}
