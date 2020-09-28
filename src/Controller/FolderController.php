<?php

namespace App\Controller;

use App\Entity\Folder;
use App\Entity\Profile;
use App\Form\FolderRenameType;
use App\Form\FolderType;
use App\Utils\FolderManager;
use App\Utils\Interfaces\UploaderInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use JMS\Serializer\SerializerBuilder;
use JMS\Serializer\SerializationContext;
use Symfony\Component\HttpFoundation\JsonResponse;

class FolderController extends AbstractController
{
   /**
    * @Route("/get-folder", name="get_folder", options={"expose"=true})
    */
   public function getFolder(Request $request, UploaderInterface $uploader)
   {
      if ($request->isXmlHttpRequest()) {
         $folder = $this->getDoctrine()->getRepository(Folder::class)->findOneBy(['id' => $_POST['folder_id'], 'profile' => $this->getUser()->getProfile()]);


         $posts = $folder->getPosts()->getValues();
         $posts_counter = $folder->getPostsCount();
         $comments_counter = 0;
         foreach ($posts as $post) {
            $comments_counter += $post->getCommentCount();
         }
         return $this->json(['comments' => $comments_counter, 'posts' => $posts_counter]);
      }

      return $this->json(['ajax' => 'only']);
   }

   /**
    * @Route("/get-folders", name="get_folders", options={"expose"=true})
    */
   public function getFolders(Request $request)
   {
      // if ($this->isGranted('ROLE_USER')) {

      if ($request->isXmlHttpRequest()) {
         $serializer = SerializerBuilder::create()->build();
         if ($request->isMethod('POST')) {

            $profile = $this->getDoctrine()->getRepository(Profile::class)->findOneBy(['id' => $_POST['profile_id']]);
            $folders = $this->getDoctrine()->getRepository(Folder::class)->findPaginated($_POST['page'], $_POST['sort_method'], $profile);

            $folder_data = $serializer->toArray($folders->getItems(), SerializationContext::create()
               ->setSerializeNull(true)
               ->setGroups(array('folder'))
               ->enableMaxDepthChecks());

            $pagination = [];
            $pagination['totalCount'] = $folders->getTotalItemCount();
            $pagination['numItemsPerPage'] = $folders->getItemNumberPerPage();
            $pagination['currentPageNumber'] = $folders->getCurrentPageNumber();

            return $this->json(['main_data' => $folder_data, 'pagination_data' => $pagination]);
         } else {
            $profile = $this->getUser()->getProfile();
            $folders = $this->getDoctrine()->getRepository(Folder::class)->findBy(['profile' => $profile]);

            $folder_data = $serializer->toArray($folders, SerializationContext::create()
               ->setSerializeNull(true)
               ->setGroups(array('folder'))
               ->enableMaxDepthChecks());
            return $this->json($folder_data);
         }
      }
   }


   /**
    * @Route("/form-folder", name="form_folder", options={"expose"=true})
    */
   public function formData(Request $request)
   {
      if ($request->isXmlHttpRequest()) {

         $tokenProvider = $this->container->get('security.csrf.token_manager');
         $token = $tokenProvider->getToken($_POST['token_name'])->getValue();

         if (isset($_POST['id'])) {
            $folder = $this->getDoctrine()->getRepository(Folder::class)->findOneBy(['id' => $_POST['id']]);
            $name = $folder->getName();
         } else {
            $name = null;
         }
         return $this->json(['csrf' => $token, 'name' => $name]);
      }

      return $this->json(['ajax' => 'only']);
   }


   /**
    * @Route("/create-folder", name="create_folder", options={"expose"=true})
    */
   public function createFolder(Request $request, FolderManager $folderManager)
   {

      if ($request->isXmlHttpRequest()) {

         $form = $this->createForm(FolderType::class);
         $form->handleRequest($request);

         if ($form->isSubmitted() && $form->isValid()) {
            $folderManager->createFolder($form->get('name')->getData());
            return $this->json(['success' => true]);
         } else {
            $errors = $form->getErrors(true);
            return $this->json(['errors' => $errors, 'success' => false]);
         }
      }

      return $this->json(['ajax' => 'only']);
   }


   /**
    * @Route("/rename-folder", name="rename_folder", options={"expose"=true})
    */
   public function renameFolder(Request $request, FolderManager $folderManager)
   {
      if ($request->isXmlHttpRequest()) {

         $form = $this->createForm(FolderRenameType::class);
         $form->handleRequest($request);

         if ($form->isSubmitted() && $form->isValid()) {

            $folderManager->renameFolder($form->get('id')->getData(), $form->get('name')->getData());
            return $this->json(['success' => true]);
         } else {
            $errors = $form->getErrors(true);
            return $this->json(['errors' => $errors, 'success' => false]);
         }
      }

      return $this->json(['ajax' => 'only']);
   }


   /**
    * @Route("/delete-folder", name="delete_folder", options={"expose"=true})
    */
   public function folderDelete(Request $request, FolderManager $folderManager)
   {
      if ($request->isXmlHttpRequest()) {
         $folderManager->removeFolder($_POST['folder_id']);
         return new JsonResponse([
            'success' => 'folder_deleted',
         ]);
      }

      return new JsonResponse([
         'type' => 'error',
         'message' => 'form only'
      ]);
   }
}
