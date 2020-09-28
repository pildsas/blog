<?php

namespace App\Utils;

use Symfony\Component\Security\Core\Security;

class GetUser
{


   /**
    * @var Security
    */
   public $security;

   public function __construct(Security $security)
   {

      $this->security = $security;
   }
}
