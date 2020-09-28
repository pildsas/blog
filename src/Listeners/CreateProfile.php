<?php

namespace App\Listeners;

use App\Entity\User;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use App\Entity\Profile;

class CreateProfile
{

   public function postPersist(LifecycleEventArgs $args)
   {
      $entity = $args->getObject();

      if (!$entity instanceof User) {
         return;
      }

      // $em = $args->getObjectManager();

      // $profile = new Profile;
      // $entity->setProfile($profile);
      // dump($args);
      // $em->persist($entity);
      // $em->flush();
   }
}
