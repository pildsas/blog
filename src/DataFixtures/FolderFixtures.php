<?php

namespace App\DataFixtures;

use App\Entity\Folder;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class FolderFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        foreach ($this->getFolderData() as $data) {
            $folder = new Folder;

            $folder->setName($data['name']);
            $user = $this->getReference('user_' . $data['profile'])->getProfile();
            $folder->setProfile($user);

            $this->addReference('folder_' . $data['profile'] . '_' . $data['user_folder'], $folder);

            $manager->persist($folder);
        }

        $manager->flush();
    }

    public function getFolderData(): array
    {
        return [
            [
                'name' => 'first folder',
                'profile' => 1,
                'user_folder' => 1,
            ],
            [
                'name' => 'second folder',
                'profile' => 1,
                'user_folder' => 2,
            ],
            [
                'name' => 'third folder',
                'profile' => 1,
                'user_folder' => 3,
            ],
            [
                'name' => 'fourth folder',
                'profile' => 1,
                'user_folder' => 4,
            ],
            //
            [
                'name' => 'first folder',
                'profile' => 2,
                'user_folder' => 1,
            ],
            [
                'name' => 'second folder',
                'profile' => 2,
                'user_folder' => 2,
            ],
            [
                'name' => 'third folder',
                'profile' => 2,
                'user_folder' => 3,
            ],
            [
                'name' => 'fourth folder',
                'profile' => 2,
                'user_folder' => 4,
            ],
            //
            [
                'name' => 'first folder',
                'profile' => 3,
                'user_folder' => 1,
            ],
            [
                'name' => 'second folder',
                'profile' => 3,
                'user_folder' => 2,
            ],
            [
                'name' => 'third folder',
                'profile' => 3,
                'user_folder' => 3,
            ],
            [
                'name' => 'fourth folder',
                'profile' => 3,
                'user_folder' => 4,
            ],
            //
            [
                'name' => 'first folder',
                'profile' => 4,
                'user_folder' => 1,
            ],
            //
            [
                'name' => 'first folder',
                'profile' => 5,
                'user_folder' => 1,
            ],
            [
                'name' => 'first folder',
                'profile' => 6,
                'user_folder' => 1,
            ],
            [
                'name' => 'first folder',
                'profile' => 7,
                'user_folder' => 1,
            ],
            [
                'name' => 'second folder',
                'profile' => 7,
                'user_folder' => 2,
            ],

        ];
    }

    public function getDependencies()
    {
        return [UserFixtures::class];
    }
}
