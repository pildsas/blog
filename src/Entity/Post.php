<?php

namespace App\Entity;

use App\Repository\PostRepository;
use App\Utils\getUser;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
// use Symfony\Component\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation\MaxDepth;
use JMS\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation\VirtualProperty;
use JMS\Serializer\Annotation\SerializedName;
use Doctrine\Common\Collections\Criteria;


/**
 * @ORM\Entity(repositoryClass=PostRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Post
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"post", "like", "comment", "search"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"post", "search"})
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @Groups({"post"})
     */
    private $body;

    /**
     * @ORM\ManyToOne(targetEntity=Profile::class, inversedBy="posts")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"post", "search", "profile", "comment"})
     */
    private $author;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"post"})
     */
    private $created_at;

    /**
     * @ORM\ManyToMany(targetEntity=Profile::class, inversedBy="liked")
     * @ORM\JoinTable(name="likes")
     * @Groups({"post","like"})
     * @SerializedName("likes_from")
     * @MaxDepth(1)
     */
    private $like;

    /**
     * @ORM\ManyToMany(targetEntity=Profile::class, inversedBy="disliked")
     * @ORM\JoinTable(name="dislikes")
     * @Groups({"post","like"})
     * @SerializedName("dislikes_from")
     */
    private $dislike;

    /**
     * @ORM\OneToMany(targetEntity=Comment::class, mappedBy="post", orphanRemoval=true)
     */
    private $comments;

    /**
     * @ORM\OneToOne(targetEntity=Image::class, cascade={"persist", "remove"})
     */
    private $front_cover;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"post","like", "search"})
     */
    private $front_cover_link;


    /**
     * @ORM\OneToOne(targetEntity=Image::class, inversedBy="post", cascade={"persist", "remove"})
     */
    private $header_cover;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"post","like", "search"})
     */
    private $header_cover_link;

    /**
     * @ORM\ManyToOne(targetEntity=Folder::class, inversedBy="posts")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"post"})
     */
    private $folder;

    /**
     * @ORM\ManyToMany(targetEntity=Tag::class, mappedBy="post", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $tags;

    public function __construct()
    {
        $this->like = new ArrayCollection();
        $this->dislike = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->tags = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

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

    public function getAuthor(): ?Profile
    {
        return $this->author;
    }

    public function setAuthor(?Profile $author): self
    {
        $this->author = $author;

        return $this;
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



    /**
     * @return Collection|Profile[]
     */
    public function getLike()
    {
        return $this->like;
    }

    public function addLike(Profile $like): self
    {
        if (!$this->like->contains($like)) {
            $this->like[] = $like;
        }

        return $this;
    }

    public function removeLike(Profile $like): self
    {
        if ($this->like->contains($like)) {
            $this->like->removeElement($like);
        }

        return $this;
    }

    /**
     * @return Collection|Profile[]
     */
    public function getDislike()
    {
        return $this->dislike;
    }

    public function addDislike(Profile $dislike): self
    {
        if (!$this->dislike->contains($dislike)) {
            $this->dislike[] = $dislike;
        }

        return $this;
    }

    public function removeDislike(Profile $dislike): self
    {
        if ($this->dislike->contains($dislike)) {
            $this->dislike->removeElement($dislike);
        }

        return $this;
    }

    /**
     * @VirtualProperty
     * @SerializedName("likes")
     * @Groups({"post","like"})
     */
    public function getLikesCount()
    {
        return $this->getLike()->count();
    }

    /**
     * @VirtualProperty
     * @SerializedName("dislikes")
     * @Groups({"post","like"})
     */
    public function getDislikesCount()
    {
        return $this->getDislike()->count();
    }

    /**
     * @return Collection|Comment[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setPost($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->contains($comment)) {
            $this->comments->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getPost() === $this) {
                $comment->setPost(null);
            }
        }

        return $this;
    }

    /**
     * @VirtualProperty
     * @SerializedName("comments")
     * @Groups({"post","like"})
     */
    public function getCommentCount()
    {
        return $this->getComments()->count();
    }

    public function getFrontCover(): ?Image
    {
        return $this->front_cover;
    }

    public function setFrontCover(?Image $front_cover): self
    {
        $this->front_cover = $front_cover;

        return $this;
    }

    public function getFrontCoverLink(): ?string
    {
        return $this->front_cover_link;
    }

    public function setFrontCoverLink(?string $front_cover_link): self
    {
        $this->front_cover_link = $front_cover_link;

        return $this;
    }

    public function getFolder(): ?Folder
    {
        return $this->folder;
    }

    public function setFolder(?Folder $folder): self
    {
        $this->folder = $folder;

        return $this;
    }

    /**
     * @return Collection|Comment[]
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    /**
     * @VirtualProperty
     * @SerializedName("tags")
     * @Groups({"post", "search"})
     */
    public function getTagsArray(): array
    {
        return $this->tags->getValues();
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
            $tag->addPost($this);
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        if ($this->tags->contains($tag)) {
            $this->tags->removeElement($tag);
            $tag->removePost($this);
        }

        return $this;
    }

    public function getHeaderCover(): ?Image
    {
        return $this->header_cover;
    }

    public function setHeaderCover(?Image $header_cover): self
    {
        $this->header_cover = $header_cover;

        return $this;
    }

    public function getHeaderCoverLink(): ?string
    {
        return $this->header_cover_link;
    }

    public function setHeaderCoverLink(string $header_cover_link): self
    {
        $this->header_cover_link = $header_cover_link;

        return $this;
    }

    public function getTagsFiltered($names)
    {
        return $this->getTags()->filter(function ($element) use ($names) {
            if (in_array($element->getName(), $names)) {
                return $element;
            };
        });
    }

    // public function getTagsFiltered($names)
    // {
    //     $criteria = Criteria::create()->where(Criteria::expr()->in("name", $names));

    //     return $this->getTagsCollection()->matching($criteria);
    // }
}
