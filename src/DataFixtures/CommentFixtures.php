<?php

namespace App\DataFixtures;

use App\Entity\Comment;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CommentFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        foreach ($this->getCommentData() as $index => $data) {

            $user = $this->getReference('user_' . $data['user']);
            $post = $this->getReference('post_' . $data['post']);

            $comment = new Comment;
            $comment->setBody($data['body']);


            $comment->setProfile($user->getProfile());
            $comment->setPost($post);

            $post->addComment($comment);

            $manager->persist($post);
            $manager->persist($comment);
        }

        $manager->flush();
    }

    public function getCommentData(): array
    {
        return [
            [
                'post' => 1,
                'user' => 1,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus, at ipsa expedita sunt unde.'
            ],
            [
                'post' => 2,
                'user' => 1,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate obcaecati porro eum neque inventore facere?'
            ],
            [
                'post' => 3,
                'user' => 1,
                'body' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, optio quod magni perspiciatis quae hic veniam ratione.'
            ],
            [
                'post' => 4,
                'user' => 1,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam eius minus! Ea odio rerum ab omnis nesciunt.'
            ],
            [
                'post' => 5,
                'user' => 1,
                'body' => '
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut reiciendis nam debitis, ad voluptas facere eligendi molestias eos quisquam?'
            ],
            [
                'post' => 6,
                'user' => 1,
                'body' => 'orem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ab debitis cum consequuntur minima iste beatae! Cupiditate nostrum et numquam velit!'
            ],
            [
                'post' => 7,
                'user' => 1,
                'body' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nobis minus, repellendus perferendis repudiandae reprehenderit commodi quos.'
            ],
            [
                'post' => 8,
                'user' => 1,
                'body' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, unde nisi alias rem eligendi porro eum quia! Deserunt atque obcaecati dolores minima illo.                .'
            ],
            [
                'post' => 9,
                'user' => 1,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas doloremque dolores fugiat quibusdam, reprehenderit adipisci eos iure amet hic vel sed ullam iste.'
            ],
            [
                'post' => 10,
                'user' => 1,
                'body' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque commodi hic voluptatem delectus vitae laudantium deserunt dolore eligendi saepe magni, sapiente, veritatis sequi qui nobis.'
            ],
            [
                'post' => 11,
                'user' => 1,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, earum doloremque tempora harum ipsum illo vitae incidunt a. Perspiciatis temporibus laudantium voluptate molestias! Laboriosam, illo impedit.'
            ],
            [
                'post' => 12,
                'user' => 1,
                'body' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ab assumenda autem exercitationem vitae!'
            ],
            [
                'post' => 13,
                'user' => 1,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem excepturi consequuntur ex?'
            ],
            [
                'post' => 14,
                'user' => 1,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas animi corrupti.'
            ],
            //
            [
                'post' => 14,
                'user' => 2,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus, at ipsa expedita sunt unde.'
            ],
            [
                'post' => 13,
                'user' => 2,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate obcaecati porro eum neque inventore facere?'
            ],
            [
                'post' => 12,
                'user' => 2,
                'body' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, optio quod magni perspiciatis quae hic veniam ratione.'
            ],
            [
                'post' => 11,
                'user' => 2,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam eius minus! Ea odio rerum ab omnis nesciunt.'
            ],
            [
                'post' => 10,
                'user' => 2,
                'body' => '
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut reiciendis nam debitis, ad voluptas facere eligendi molestias eos quisquam?'
            ],
            [
                'post' => 9,
                'user' => 2,
                'body' => 'orem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ab debitis cum consequuntur minima iste beatae! Cupiditate nostrum et numquam velit!'
            ],
            [
                'post' => 8,
                'user' => 2,
                'body' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nobis minus, repellendus perferendis repudiandae reprehenderit commodi quos.'
            ],
            [
                'post' => 7,
                'user' => 2,
                'body' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, unde nisi alias rem eligendi porro eum quia! Deserunt atque obcaecati dolores minima illo.                .'
            ],
            [
                'post' => 6,
                'user' => 2,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas doloremque dolores fugiat quibusdam, reprehenderit adipisci eos iure amet hic vel sed ullam iste.'
            ],
            [
                'post' => 5,
                'user' => 2,
                'body' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque commodi hic voluptatem delectus vitae laudantium deserunt dolore eligendi saepe magni, sapiente, veritatis sequi qui nobis.'
            ],
            [
                'post' => 4,
                'user' => 2,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, earum doloremque tempora harum ipsum illo vitae incidunt a. Perspiciatis temporibus laudantium voluptate molestias! Laboriosam, illo impedit.'
            ],
            [
                'post' => 3,
                'user' => 2,
                'body' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ab assumenda autem exercitationem vitae!'
            ],
            [
                'post' => 2,
                'user' => 2,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem excepturi consequuntur ex?'
            ],
            [
                'post' => 1,
                'user' => 2,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas animi corrupti.'
            ],
            //
            [
                'post' => 13,
                'user' => 3,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus, at ipsa expedita sunt unde.'
            ],
            [
                'post' => 12,
                'user' => 3,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate obcaecati porro eum neque inventore facere?'
            ],
            [
                'post' => 11,
                'user' => 3,
                'body' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, optio quod magni perspiciatis quae hic veniam ratione.'
            ],
            [
                'post' => 10,
                'user' => 3,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam eius minus! Ea odio rerum ab omnis nesciunt.'
            ],
            [
                'post' => 9,
                'user' => 3,
                'body' => '
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut reiciendis nam debitis, ad voluptas facere eligendi molestias eos quisquam?'
            ],
            [
                'post' => 8,
                'user' => 3,
                'body' => 'orem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ab debitis cum consequuntur minima iste beatae! Cupiditate nostrum et numquam velit!'
            ],
            [
                'post' => 7,
                'user' => 3,
                'body' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nobis minus, repellendus perferendis repudiandae reprehenderit commodi quos.'
            ],
            [
                'post' => 6,
                'user' => 3,
                'body' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, unde nisi alias rem eligendi porro eum quia! Deserunt atque obcaecati dolores minima illo.                .'
            ],
            [
                'post' => 5,
                'user' => 3,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas doloremque dolores fugiat quibusdam, reprehenderit adipisci eos iure amet hic vel sed ullam iste.'
            ],
            [
                'post' => 4,
                'user' => 3,
                'body' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque commodi hic voluptatem delectus vitae laudantium deserunt dolore eligendi saepe magni, sapiente, veritatis sequi qui nobis.'
            ],
            [
                'post' => 3,
                'user' => 3,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, earum doloremque tempora harum ipsum illo vitae incidunt a. Perspiciatis temporibus laudantium voluptate molestias! Laboriosam, illo impedit.'
            ],
            [
                'post' => 2,
                'user' => 3,
                'body' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ab assumenda autem exercitationem vitae!'
            ],
            [
                'post' => 1,
                'user' => 3,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem excepturi consequuntur ex?'
            ],
            [
                'post' => 14,
                'user' => 3,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas animi corrupti.'
            ],
            //
            [
                'post' => 12,
                'user' => 4,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus, at ipsa expedita sunt unde.'
            ],
            [
                'post' => 11,
                'user' => 4,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate obcaecati porro eum neque inventore facere?'
            ],
            [
                'post' => 10,
                'user' => 4,
                'body' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, optio quod magni perspiciatis quae hic veniam ratione.'
            ],
            [
                'post' => 9,
                'user' => 4,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam eius minus! Ea odio rerum ab omnis nesciunt.'
            ],
            [
                'post' => 8,
                'user' => 4,
                'body' => '
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut reiciendis nam debitis, ad voluptas facere eligendi molestias eos quisquam?'
            ],
            [
                'post' => 7,
                'user' => 4,
                'body' => 'orem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ab debitis cum consequuntur minima iste beatae! Cupiditate nostrum et numquam velit!'
            ],
            [
                'post' => 6,
                'user' => 4,
                'body' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nobis minus, repellendus perferendis repudiandae reprehenderit commodi quos.'
            ],
            [
                'post' => 5,
                'user' => 4,
                'body' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, unde nisi alias rem eligendi porro eum quia! Deserunt atque obcaecati dolores minima illo.                .'
            ],
            [
                'post' => 4,
                'user' => 4,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas doloremque dolores fugiat quibusdam, reprehenderit adipisci eos iure amet hic vel sed ullam iste.'
            ],
            [
                'post' => 3,
                'user' => 4,
                'body' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque commodi hic voluptatem delectus vitae laudantium deserunt dolore eligendi saepe magni, sapiente, veritatis sequi qui nobis.'
            ],
            [
                'post' => 2,
                'user' => 4,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, earum doloremque tempora harum ipsum illo vitae incidunt a. Perspiciatis temporibus laudantium voluptate molestias! Laboriosam, illo impedit.'
            ],
            [
                'post' => 1,
                'user' => 4,
                'body' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ab assumenda autem exercitationem vitae!'
            ],
            [
                'post' => 14,
                'user' => 4,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem excepturi consequuntur ex?'
            ],
            [
                'post' => 13,
                'user' => 4,
                'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas animi corrupti.'
            ],
        ];
    }

    public function getDependencies()
    {
        return [PostFixtures::class];
        return [UserFixtures::class];
    }
}
