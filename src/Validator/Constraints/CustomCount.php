<?php

declare(strict_types=1);

namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;


/**
 * @Annotation
 */
class CustomCount extends Constraint
{
   public $message = 'You cannot specify more than {{ limit }} tags';
   public $limit;
}
