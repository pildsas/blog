<?php

namespace App\Validation;

use Symfony\Component\Validator\Constraints as Assert;
use App\Validator\Constraints\UniqueDto;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;


/**
 * @UniqueDto(entityClass="App\Entity\User", fields={"email"}, message="Email already in use")
 */
class RegisterValidation
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
    * @Assert\NotBlank(message = "Field cannot be empty")
    * @Assert\Email(
    *     message = "The email '{{ value }}' is not a valid email.")
    * @var string
    */
   public $email;


   /**
    * @Assert\NotBlank(message = "Field cannot be empty")
    *  @Assert\Length(
    *      min = 6,
    *      max = 20,
    *      minMessage = "Your password must be at least {{ limit }} characters long",
    *      maxMessage = "Your password cannot be longer than {{ limit }} characters",
    *      allowEmptyString = false
    * )
    * @var string The hashed password
    */
   public $password;
}
