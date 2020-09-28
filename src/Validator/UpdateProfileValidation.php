<?php

namespace App\Validation;

use Symfony\Component\Validator\Constraints as Assert;
use App\Validator\Constraints\UniqueDto;


class UpdateProfileValidation
{

   /**
    * @Assert\NotBlank(message = "Field cannot be empty")
    * @Assert\Length(
    *      min = 3,
    *      max = 50,
    *      minMessage = "Your firstname must be at least {{ limit }} characters long",
    *      maxMessage = "Your firstname cannot be longer than {{ limit }} characters",
    *      allowEmptyString = false
    * )
    * @var string
    */
   public $firstname;

   /**
    * @Assert\NotBlank(message = "Field cannot be empty")
    * @Assert\Length(
    *      min = 3,
    *      max = 50,
    *      minMessage = "Your lastname must be at least {{ limit }} characters long",
    *      maxMessage = "Your lastname cannot be longer than {{ limit }} characters",
    *      allowEmptyString = false
    * )
    * @var string
    */
   public $lastname;

   /**
    * @Assert\Length(
    *      min = 3,
    *      max = 50,
    *      minMessage = "Your alias must be at least {{ limit }} characters long",
    *      maxMessage = "Your alias cannot be longer than {{ limit }} characters",
    *      allowEmptyString = false
    * )
    * @var string
    */
   public $nickname;


   /**
    * @Assert\Length(
    *      min = 3,
    *      max = 1500,
    *      minMessage = "Text area must be at least {{ limit }} characters long",
    *      maxMessage = "Text area cannot be longer than {{ limit }} characters",
    *      allowEmptyString = false
    * )
    * @var string
    */
   public $about;


   /**
    *     @Assert\File(
    *     maxSize = "5000k",
    *     mimeTypes = {"image/jpeg", "image/png"},
    *     mimeTypesMessage = "Please upload a valid .jpeg / .png image"
    * )
    */
   public $avatar;
}
