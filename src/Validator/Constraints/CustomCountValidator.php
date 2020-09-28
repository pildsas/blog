<?php

declare(strict_types=1);

namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;

class CustomCountValidator extends ConstraintValidator
{



   public function validate($value, Constraint $constraint)
   {
      if (!$constraint instanceof CustomCount) {
         throw new UnexpectedTypeException($constraint, CustomCount::class);
      }

      if (null === $value || '' === $value) {
         return;
      }


      // dump($value);
      // dump($constraint);

      $tags_array = explode(',', $value);

      if (count($tags_array) > $constraint->limit) {
         $this->context->buildViolation($constraint->message)
            ->setParameter('{{ string }}', $value)
            ->setParameter('{{ limit }}', strval($constraint->limit))
            ->addViolation();
      }
   }
}
