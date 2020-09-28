<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class FollowFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        foreach ($this->getFollowData() as $index => $data) {

            $user = $this->getReference('user_' . $data['user_profile']);
            foreach ($data['follow_profile'] as $follow) {
                $follow = $this->getReference('user_' . $follow)->getProfile();
                $user->getProfile()->addFollowing($follow);
            }
        }

        $manager->flush();
    }


    public function getFollowData()
    {
        return [
            [
                'user_profile' => 0,
                'follow_profile' => [4, 5, 6],
            ]
        ];
    }


    public function getDependencies()
    {
        return [PostFixtures::class];
        return [UserFixtures::class];
    }
}
