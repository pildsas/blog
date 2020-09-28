<?php

namespace App\Controller;


use App\Entity\Comment;
use App\Entity\Image;
use App\Entity\Post;
use App\Entity\Profile;
use App\Entity\Tag;
use App\Entity\User;
use App\Form\PostType;
use App\Utils\FolderManager;
use App\Utils\Interfaces\UploaderInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use JMS\Serializer\SerializerBuilder;
use JMS\Serializer\SerializationContext;
use Symfony\Component\HttpFoundation\File\File;

class FrontController extends AbstractController
{

    /**
     * @Route("get-user-data", name="get_user_data", options={"expose"=true})
     */
    public function getData(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            if ($this->isGranted('ROLE_USER')) {
                // $tokenProvider = $this->container->get('security.csrf.token_manager');
                // $token = $tokenProvider->getToken($_POST['token_name'])->getValue();

                $serializer = SerializerBuilder::create()->build();

                $profile = $this->getUser()->getProfile();
                $data = $serializer->toArray($profile, SerializationContext::create()
                    ->setSerializeNull(true)
                    ->setGroups(array('profile'))
                    ->enableMaxDepthChecks());


                $data['logged'] = true;
                return $this->json($data);
            } else {
                $data['logged'] = false;
                return $this->json($data);
            }
        }

        return $this->json(['ajax' => 'only']);
    }




    /**
     * @Route("browse", name="browse", options={"expose"=true})
     */
    public function browse(Request $request)
    {


        // $tags = $this->getDoctrine()->getRepository(Tag::class)->findLike($_GET['query']);
        $serializer = SerializerBuilder::create()->build();
        $posts = $this->getDoctrine()->getRepository(Post::class)->findLike($_GET['query']);
        $posts_data = $serializer->toArray($posts, SerializationContext::create()
            ->setSerializeNull(true)
            ->setGroups(array('search'))
            ->enableMaxDepthChecks());

        $profiles = $this->getDoctrine()->getRepository(Profile::class)->findLike($_GET['query']);
        $profiles_data = $serializer->toArray($profiles, SerializationContext::create()
            ->setSerializeNull(true)
            ->setGroups(array('profile'))
            ->enableMaxDepthChecks());


        return $this->json(['posts_data' => $posts_data, 'profiles_data' => $profiles_data]);

        // return $this->render('front/browse.html.twig', []);
    }





    /**
     * @Route("/{profile}", name="profile_page", options={"expose"=true}, priority=-1)
     */
    public function ProfilePage(Request $request)
    {
        $user_data = $request->attributes->get('profile');
        $profile = $this->getDoctrine()->getRepository(Profile::class)->findOneBy(['id' => $user_data]);

        if ($request->isXmlHttpRequest()) {

            $posts = $this->getDoctrine()->getRepository(Post::class)->findPaginated($_POST['page'], $_POST['sort_method']);
            $serializer = SerializerBuilder::create()->build();

            $data = $serializer->toArray($posts->getItems(), SerializationContext::create()
                ->setSerializeNull(true)
                ->setGroups(array('post'))
                ->enableMaxDepthChecks());

            foreach ($posts as $key => $post) {
                if ($this->isGranted('ROLE_USER')) {
                    if ($this->getUser()->getProfile()->getLiked()->contains($post)) {
                        $state = 'liked';
                        $data[$key]['state'] = $state;
                    } elseif ($this->getUser()->getProfile()->getDisliked()->contains($post)) {
                        $state = 'disliked';
                        $data[$key]['state'] = $state;
                    } else {
                        $state = 'neutral';
                        $data[$key]['state'] = $state;
                    }
                } else {
                    $state = 'neutral';
                    $data[$key]['state'] = $state;
                }
            }
            //Pagination

            $pagination = [];
            $pagination['totalCount'] = $posts->getTotalItemCount();
            $pagination['numItemsPerPage'] = $posts->getItemNumberPerPage();
            $pagination['currentPageNumber'] = $posts->getCurrentPageNumber();

            return new JsonResponse([json_encode($data), json_encode($pagination)]);
        }

        $follow = false;
        if ($this->isGranted('ROLE_USER')) {
            if ($this->getUser()->getProfile()->getFollowing()->contains($profile)) {
                $follow = true;
            } else {
                $follow = false;
            }
        }

        $followers_count = count($this->getDoctrine()->getRepository(Profile::class)->findFollowers($profile));


        return $this->render('front/profile.html.twig', [
            'profile' => $profile,
            'follow' => $follow,
            'followers_count' => $followers_count,
        ]);
    }

    /**
     * @Route("/", name="main_page", options={"expose"=true})
     */
    public function index(Request $request)
    {
        if ($this->isGranted('ROLE_USER')) {
            $profile = $this->getUser()->getProfile();
        } else {
            $profile = null;
        }
        return $this->render('front/index.html.twig', [
            'profile' => $profile,
        ]);
    }
}
