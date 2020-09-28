<?php

namespace App\Entity;

use App\Repository\CommentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation\MaxDepth;
use JMS\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation\VirtualProperty;
use JMS\Serializer\Annotation\SerializedName;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=CommentRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Comment
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"comment"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Profile::class, inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"comment"})
     * @SerializedName("comment_author")
     */
    private $profile;

    /**
     * @ORM\Column(type="text")
     * @Groups({"comment"})
     * @Assert\NotBlank(message = "Field cannot be empty")
     */
    private $body;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"comment"})
     * @SerializedName("img_attached")
     */
    private $img;

    /**
     * @ORM\ManyToOne(targetEntity=Post::class, inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"comment"})
     * @SerializedName("commented_post")
     */
    private $post;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"comment"})
     * @SerializedName("createdAt")
     */
    private $createdAt;

    /**
     * @ORM\ManyToMany(targetEntity=Profile::class)
     * @ORM\JoinTable(name="comment_likes")
     * @Groups({"comment"})
     * @SerializedName("likes_from")
     */
    private $likes;

    /**
     * @ORM\ManyToMany(targetEntity=Profile::class)
     * @ORM\JoinTable(name="comment_dislikes")
     * @Groups({"comment"})
     * @SerializedName("dislikes_from")
     */
    private $dislikes;

    public function __construct()
    {
        $this->likes = new ArrayCollection();
        $this->dislikes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getBody(): ?string
    {
        return $this->body;
    }

    public function setBody(string $body): self
    {
        $this->body = $body;

        return $this;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg($img): self
    {
        $this->img = $img;

        return $this;
    }

    public function getPost(): ?Post
    {
        return $this->post;
    }

    public function setPost(?Post $post): self
    {
        $this->post = $post;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    /** 
     * @ORM\PrePersist
     */
    public function setCreatedAt(): self
    {
        $this->createdAt = new \DateTime();

        return $this;
    }

    /**
     * @return Collection|Profile[]
     */
    public function getLikes(): Collection
    {
        return $this->likes;
    }

    public function addLike(Profile $like): self
    {
        if (!$this->likes->contains($like)) {
            $this->likes[] = $like;
        }

        return $this;
    }

    public function removeLike(Profile $like): self
    {
        if ($this->likes->contains($like)) {
            $this->likes->removeElement($like);
        }

        return $this;
    }

    /**
     * @return Collection|Profile[]
     */
    public function getDislikes(): Collection
    {
        return $this->dislikes;
    }

    public function addDislike(Profile $dislike): self
    {
        if (!$this->dislikes->contains($dislike)) {
            $this->dislikes[] = $dislike;
        }

        return $this;
    }

    public function removeDislike(Profile $dislike): self
    {
        if ($this->dislikes->contains($dislike)) {
            $this->dislikes->removeElement($dislike);
        }

        return $this;
    }

    /**
     * @VirtualProperty
     * @SerializedName("likes")
     * @Groups({"comment"})
     */
    public function getLikesCount()
    {
        return $this->getLikes()->count();
    }

    /**
     * @VirtualProperty
     * @SerializedName("dislikes")
     * @Groups({"comment"})
     */
    public function getDislikesCount()
    {
        return $this->getDislikes()->count();
    }
}
