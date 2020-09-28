<?php

namespace App\Utils;

use App\Entity\Post;
use App\Entity\Tag;
use App\Repository\TagRepository;
use Doctrine\ORM\EntityManagerInterface;

class TagManager
{


   public function __construct(EntityManagerInterface $em)
   {
      $this->em = $em;
   }

   public function createTag(string $name)
   {
      if ($this->getTag($name)) {
         $tag = $this->getTag($name);
      } else {
         $tag = new Tag;
         $tag->setName($name);

         $this->em->persist($tag);
         $this->em->flush();
      }

      return $tag;
   }

   public function getTag(string $name)
   {
      $tag = $this->em->getRepository(Tag::class)->findOneBy(['name' => $name]);

      return $tag;
   }

   public function editTags(Post $post, $array)
   {
      $old = [];

      foreach ($post->getTags() as $tag) {
         array_push($old, $tag->getName());
      }

      $remove_list = array_diff($old, $array);
      $add_list = array_diff($array, $old);

      $filtered = $post->getTagsFiltered($remove_list);

      foreach ($filtered as $old_tag) {
         $post->removeTag($old_tag);
         $this->notUsed($old_tag);
      }

      foreach ($add_list as $tag_name) {
         $new_tag = $this->createTag($tag_name);
         $post->addTag($new_tag);
      }
   }

   public function notUsed($tag)
   {
      if ($tag->getPost()->count() == 0) {
         $this->em->remove($tag);
         $this->em->flush();
      }
   }

   public function removeTag(string $name)
   {
      $tag = $this->em->getRepository(Tag::class)->findOneBy(['name' => $name]);
      $this->em->remove($tag);
      $this->em->flush();

      return true;
   }
}
