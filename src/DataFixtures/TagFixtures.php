<?php

namespace App\DataFixtures;

use App\Entity\Tag;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class TagFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        foreach ($this->getTagData() as $index => $data) {

            $tag = new Tag;
            $tag->setName($data['name']);
            $this->addReference('tag_' . ($index + 1), $tag);
            $manager->persist($tag);
        }

        $manager->flush();
    }

    public function getTagData(): array
    {
        return [
            ['name' => 'technology'],
            ['name' => 'anime'],
            ['name' => 'psychology'],
            ['name' => 'philosophy'],
            ['name' => 'manga'],
            ['name' => 'cars'],
            ['name' => 'space'],
            ['name' => 'rockets'],
            ['name' => 'mars'],
            ['name' => 'innovation'],
            ['name' => 'tesla'],
            ['name' => 'phones'],
            ['name' => 'design'],
            ['name' => 'tunnel digging'],
            ['name' => 'energy'],
            ['name' => 'music'],
            ['name' => 'computers'],
            ['name' => 'social engineering'],
            ['name' => 'evolution'],
            ['name' => 'science'],
            ['name' => 'meditation'],
        ];
    }
}
