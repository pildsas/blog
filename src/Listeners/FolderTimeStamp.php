<?php

namespace App\Listeners;


use Doctrine\Persistence\Event\LifecycleEventArgs;
use App\Entity\Folder;
use App\Entity\Post;

class FolderTimeStamp
{

   public function postPersist(LifecycleEventArgs $args)
   {
      $entity = $args->getObject();

      if (!$entity instanceof Post) {
         return;
      }

      $em = $args->getObjectManager();
      $folder = $entity->getFolder();
      $folder->setModified(new \DateTime());
      $em->persist($folder);
      $em->flush();
   }
}
