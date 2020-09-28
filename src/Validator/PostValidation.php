<?php

namespace App\Validation;

use App\Validator\Constraints\CustomCount;
use Symfony\Component\Validator\Constraints as Assert;




class PostValidation
{

   public $id;

   /**
    * @Assert\NotBlank(message = "Field cannot be empty")
    * @Assert\Length(
    *      min = 6,
    *      max = 200,
    *      minMessage = "Title must be at least {{ limit }} characters long",
    *      maxMessage = "Title cannot be longer than {{ limit }} characters",
    *      allowEmptyString = false
    * )
    * @var string
    */
   public $title;

   /**
    * @Assert\NotBlank(message = "Field cannot be empty")
    * @var string
    */
   public $body;


   /**
    *     @Assert\File(
    *     maxSize = "5000k",
    *     mimeTypes = {"image/jpeg", "image/png"},
    *     mimeTypesMessage = "Please upload a valid .jpeg / .png image"
    * )
    */
   public $front_cover;

   /**
    *     @Assert\File(
    *     maxSize = "5000k",
    *     mimeTypes = {"image/jpeg", "image/png"},
    *     mimeTypesMessage = "Please upload a valid .jpeg / .png image"
    * )
    */
   public $header_cover;

   /**
    * @Assert\NotBlank(message = "You must specify at least 1 tag")
    * @CustomCount(
    *      limit = 5,
    *      message = "You cannot specify more than {{ limit }} tags"
    * )
    */
   public $tags;

   /**
    * @Assert\NotBlank(message = "No folder were selected")
    * @var string
    */
   public $folder;
}
