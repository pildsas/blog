<?php

namespace App\Entity;

use App\Repository\FolderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation\MaxDepth;
use JMS\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation\VirtualProperty;
use JMS\Serializer\Annotation\SerializedName;
use Symfony\Component\Validator\Constraints as Assert;
use App\Validator\Constraints\UniqueFolder;

/**
 * @ORM\Entity(repositoryClass=FolderRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Folder
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"folder", "post"})
     * @SerializedName("folder_id")
     */
    private $id;


    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"folder", "post"})
     * @Assert\NotBlank(message = "Field cannot be empty")
     * @Assert\Length(
     *      min = 3,
     *      max = 18,
     *      minMessage = "Folder name must be at least {{ limit }} characters long",
     *      maxMessage = "Folder name cannot be longer than {{ limit }} characters",
     *      allowEmptyString = false
     * )
     * @UniqueFolder(message="Folder with name '{{ string }}' already exist")
     * 
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=Profile::class, inversedBy="folders")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"folder"})
     * @SerializedName("author")
     */
    private $profile;

    /**
     * @ORM\OneToMany(targetEntity=Post::class, mappedBy="folder", orphanRemoval=true)
     * @Groups({"folder"})
     */
    private $posts;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"folder"})
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"folder"})
     */
    private $modified;



    public function __construct()
    {
        $this->posts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getProfile(): ?Profile
    {
        return $this->profile;
    }

    public function setProfile(?Profile $profile): self
    {
        $this->profile = $profile;

        return $this;
    }

    /**
     * @return Collection|Post[]
     */

    public function getPosts(): Collection
    {
        return $this->posts;
    }

    public function addPost(Post $post): self
    {
        if (!$this->posts->contains($post)) {
            $this->posts[] = $post;
            $post->setFolder($this);
        }

        return $this;
    }

    public function removePost(Post $post): self
    {
        if ($this->posts->contains($post)) {
            $this->posts->removeElement($post);
            // set the owning side to null (unless already changed)
            if ($post->getFolder() === $this) {
                $post->setFolder(null);
            }
        }

        return $this;
    }

    public function getPostsCount()
    {
        return $this->getPosts()->count();
    }


    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    /** 
     * @ORM\PrePersist
     */
    public function setCreatedAt(): self
    {
        $this->created_at = new \DateTime();

        return $this;
    }


    public function __toString()
    {
        return $this->getName();
    }


    public function getModified(): ?\DateTimeInterface
    {
        return $this->modified;
    }

    /** 
     * @ORM\PrePersist
     */
    public function setModified(): self
    {
        $this->modified = new \DateTime();

        return $this;
    }
}
