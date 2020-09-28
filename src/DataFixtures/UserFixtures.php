<?php

namespace App\DataFixtures;

use App\Entity\Profile;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{

    // public const USER_REFERENCE = 'users';

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        foreach ($this->getUserData() as $index => $data) {

            $user = new User;
            $user->setEmail($data['email']);
            $password = $this->encoder->encodePassword($user, $data['password']);
            $user->setPassword($password);
            $user->setRoles($data['role']);

            $profile = new Profile;
            $user->setProfile($profile);

            $profile->setFirstname($data['profile']['firstname']);
            $profile->setLastname($data['profile']['lastname']);
            $profile->setNickname($data['profile']['nickname']);
            $profile->setAbout($data['profile']['about']);
            $profile->setAvatar($data['profile']['avatar']);

            $manager->persist($user);
            $manager->persist($profile);

            $this->addReference('user_' . $index, $user);
        }

        $manager->flush();
    }

    public function getUserData(): array
    {
        return [
            [
                'email' => 'test@gmail.com',
                'password' => '123456',
                'role' => ['ROLE_ADMIN'],
                'profile' => [
                    'firstname' => 'Test',
                    'lastname' => ' ',
                    'nickname' => 'test',
                    'about' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, dignissimos.', 'lorem ipsum',
                    'avatar' => '/img/defaults/profile.png'
                ]
            ],
            [
                'email' => 'elon.doe@gmail.com',
                'password' => '123456',
                'role' => ['ROLE_USER'],
                'profile' => [
                    'firstname' => 'Elon',
                    'lastname' => 'Doe',
                    'nickname' => 'X Æ A-12',
                    'about' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eveniet voluptates odit iusto eius libero!',
                    'avatar' => '\img\fixtures\profile\1.jpg'
                ]
            ],
            [
                'email' => 'steve.doe@gmail.com',
                'password' => '123456',
                'role' => ['ROLE_USER'],
                'profile' => [
                    'firstname' => 'Steve',
                    'lastname' => 'Doe',
                    'nickname' => 'Apple',
                    'about' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat perspiciatis nesciunt assumenda minima aspernatur ad recusandae voluptatum laudantium voluptas. Qui!',
                    'avatar' => '\img\fixtures\profile\2.jpg'
                ]
            ],
            [
                'email' => 'akira.doe@gmail.com',
                'password' => '123456',
                'role' => ['ROLE_USER'],
                'profile' => [
                    'firstname' => 'Akira',
                    'lastname' => 'Doe',
                    'nickname' => '',
                    'about' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem aspernatur rerum et cumque.',
                    'avatar' => '\img\fixtures\profile\3.jpeg'
                ]
            ],
            [
                'email' => 'Jacque.doe@gmail.com',
                'password' => '123456',
                'role' => ['ROLE_USER'],
                'profile' => [
                    'firstname' => 'Jacque',
                    'lastname' => 'Doe',
                    'nickname' => 'Venus',
                    'about' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem aspernatur rerum et cumque.',
                    'avatar' => '\img\fixtures\profile\5.jpg'
                ]
            ],
            [
                'email' => 'Jaggi.doe@gmail.com',
                'password' => '123456',
                'role' => ['ROLE_USER'],
                'profile' => [
                    'firstname' => 'Jaggi',
                    'lastname' => 'Doe',
                    'nickname' => 'Sadhguru',
                    'about' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem aspernatur rerum et cumque.',
                    'avatar' => '\img\fixtures\profile\6.png'
                ]
            ],
            [
                'email' => 'Richard.doe@gmail.com',
                'password' => '123456',
                'role' => ['ROLE_USER'],
                'profile' => [
                    'firstname' => 'Richard',
                    'lastname' => 'Doe',
                    'nickname' => '',
                    'about' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem aspernatur rerum et cumque.',
                    'avatar' => '\img\fixtures\profile\7.jpg'
                ]
            ],
            [
                'email' => 'Jordan.doe@gmail.com',
                'password' => '123456',
                'role' => ['ROLE_USER'],
                'profile' => [
                    'firstname' => 'Jordan',
                    'lastname' => 'Doe',
                    'nickname' => '',
                    'about' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem aspernatur rerum et cumque.',
                    'avatar' => '\img\fixtures\profile\8.jpg'
                ]
            ],
        ];
    }
}
