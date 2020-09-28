<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class LikeFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        foreach ($this->getLikeData() as $index => $data) {

            $post = $this->getReference('post_' . $data['post']);

            foreach ($data['likes'] as $like) {
                $user = $this->getReference('user_' . $like);
                $post->addLike($user->getProfile());
            }

            foreach ($data['dislikes'] as $dislike) {
                $user = $this->getReference('user_' . $dislike);
                $post->addDislike($user->getProfile());
            }
        }

        $manager->flush();
    }

    public function getLikeData(): array
    {
        return [
            [
                'post' => '1',
                'likes' => [2, 3],
                'dislikes' => [4, 5],
            ],
            [
                'post' => '2',
                'likes' => [2, 3, 4, 5, 6, 7],
                'dislikes' => [],
            ],
            [
                'post' => '3',
                'likes' => [2, 3, 4, 5, 6],
                'dislikes' => [],
            ],
            [
                'post' => '4',
                'likes' => [2, 3, 4, 5],
                'dislikes' => [],
            ],
            [
                'post' => '5',
                'likes' => [2, 3],
                'dislikes' => [4, 5],
            ],
            [
                'post' => '6',
                'likes' => [2, 3],
                'dislikes' => [4, 5],
            ],
            [
                'post' => '7',
                'likes' => [2, 3],
                'dislikes' => [4, 5],
            ],
            [
                'post' => '8',
                'likes' => [2, 3],
                'dislikes' => [4, 5],
            ],
            [
                'post' => '9',
                'likes' => [2, 3],
                'dislikes' => [4, 5],
            ],
            [
                'post' => '10',
                'likes' => [2, 3],
                'dislikes' => [4, 5],
            ],
        ];
    }


    public function getDependencies()
    {
        return [PostFixtures::class];
        return [UserFixtures::class];
    }
}
