<?php

declare(strict_types=1);

namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;


/**
 * @Annotation
 */
class UniqueFolder extends Constraint
{
   public $message = 'Folder with name "{{ string }}" already exists';
}
