<?php

namespace App\Controller;

use App\Entity\Profile;
use App\Entity\User;
use App\Form\UserType;
use App\Validation\RegisterValidation;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="login", options={"expose"=true})
     */
    public function login(Request $request, AuthenticationUtils $authenticationUtils)
    {
        if ($this->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('main_page');
        }

        $user = $this->getUser();
        return $this->render('security/login.html.twig', [
            'user' => $user,
            'error' => $authenticationUtils->getLastAuthenticationError()
        ]);
    }

    /**
     * @Route("/logout", name="logout", options={"expose"=true})
     */
    public function logout()
    {
        throw new \Exception('This should never be reached');
    }

    /**
     * @Route("/register", name="register", options={"expose"=true})
     */
    public function register(Request $request, UserPasswordEncoderInterface $encoder)
    {
        if ($this->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('main_page');
        }

        $register_validation = new RegisterValidation();
        $form = $this->createForm(UserType::class, $register_validation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $user = new User;
            $user->setEmail($request->request->get('user')['email']);
            $password = $encoder->encodePassword($user, $request->request->get('user')['password']['first']);
            $user->setPassword($password);
            $user->setRoles(['ROLE_USER']);

            $profile = new Profile;
            $profile->setFirstname($form->get('firstname')->getData());
            $profile->setLastname($form->get('lastname')->getData());
            $profile->setAvatar('/img/defaults/profile.png');
            $user->setProfile($profile);

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->persist($profile);
            $em->flush();

            $this->addFlash('success', 'Account have been created!');
        }

        return $this->render('security/register.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    // private function loginUserAuto($user, $password)
    // {
    //     $token = new UsernamePasswordToken($user, $password, 'main', $user->getRoles());
    //     $this->get('security.token_storage')->setToken($token);
    //     $this->get('session')->set('_security_main', serialize($token));
    // }


    /**
     * @Route("get-token", name="get_token", options={"expose"=true})
     */
    public function getToken(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            $tokenProvider = $this->container->get('security.csrf.token_manager');
            $token = $tokenProvider->getToken($_POST['token_name'])->getValue();
            return $this->json(['token' => $token]);
        }
        return $this->json(['ajax' => 'only']);
    }
}
