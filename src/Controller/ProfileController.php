<?php

namespace App\Controller;

use App\Entity\Image;
use App\Form\EditProfileType;
use App\Utils\FolderManager;
use App\Utils\Interfaces\UploaderInterface;
use App\Validation\UpdateProfileValidation;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProfileController extends AbstractController
{
    /**
     * @Route("/update-profile", name="update_profile", options={"expose"=true})
     */
    public function updateProfile(Request $request, UploaderInterface $uploader)
    {
        if ($request->isXmlHttpRequest()) {

            $profile_validator = new UpdateProfileValidation;

            $form = $this->createForm(EditProfileType::class, $profile_validator);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {

                $profile = $this->getUser()->getProfile();
                $profile->setFirstname($form->get('firstname')->getData());
                $profile->setLastname($form->get('lastname')->getData());
                $profile->setNickname($form->get('nickname')->getData());
                $profile->setAbout($form->get('about')->getData());

                $em = $this->getDoctrine()->getManager();
                $em->persist($profile);


                if ($form->get('avatar')->getData()) {
                    $file = new File($form->get('avatar')->getData()->getPathName());
                    $fileName = $uploader->upload($file);
                    $image = new Image;
                    $image->setPath(Image::gallery . $fileName);
                    $image->setProfile($this->getUser()->getProfile());
                    $profile->setAvatar(Image::gallery . $fileName);
                    $profile->addImage($image);
                    $em->persist($image);
                }

                $em->flush();

                $serializer = SerializerBuilder::create()->build();
                $profile_data = $serializer->toArray($profile, SerializationContext::create()
                    ->setSerializeNull(true)
                    ->setGroups(array('profile'))
                    ->enableMaxDepthChecks());


                return $this->json(['success' => true, 'profile_data' => $profile_data]);
            } else {
                $errors = $form->getErrors(true);
                return $this->json(['errors' => $errors, 'success' => false]);
            }
        }
        return $this->json(['ajax' => 'only']);
    }


    /**
     * @Route("/get-profile", name="get_profile", options={"expose"=true})
     */
    public function getProfile(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            $profile = $this->getUser()->getProfile();

            $serializer = SerializerBuilder::create()->build();
            $profile_data = $serializer->toArray($profile, SerializationContext::create()
                ->setSerializeNull(true)
                ->setGroups(array('profile'))
                ->enableMaxDepthChecks());

            return $this->json($profile_data);
        }
    }
}
