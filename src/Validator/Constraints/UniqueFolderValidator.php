<?php

declare(strict_types=1);

namespace App\Validator\Constraints;

use App\Entity\Folder;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;

class UniqueFolderValidator extends ConstraintValidator
{

   /**
    * @var EntityManagerInterface
    */
   public $em;

   /**
    * @var Security
    */
   public $security;



   public function __construct(EntityManagerInterface $em, Security $security)
   {
      $this->em = $em;
      $this->security = $security;
   }

   public function validate($value, Constraint $constraint)
   {
      if (!$constraint instanceof UniqueFolder) {
         throw new UnexpectedTypeException($constraint, UniqueFolder::class);
      }

      if (null === $value || '' === $value) {
         return;
      }

      $profile = $this->security->getUser()->getProfile();
      $folder = $this->em->getRepository(Folder::class)->findBy(['profile' => $profile, 'name' => trim($value)]);
      if ($folder) {
         $this->context->buildViolation($constraint->message)
            ->setParameter('{{ string }}', $value)
            ->addViolation();
      }
   }
}
