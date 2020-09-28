<?php

namespace App\Entity;

use App\Repository\ProfileRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
// use Symfony\Component\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation\MaxDepth;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=ProfileRepository::class)
 */
class Profile
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"post", "liked", "profile", "search", "like", "folder", "comment"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"post", "comment", "like", "profile", "search"})
     * @Assert\NotBlank(message = "Field cannot be empty")
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"post","like", "profile", "comment", "search"})
     * @Assert\NotBlank(message = "Field cannot be empty")
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"post", "comment", "like", "profile", "search"})
     */
    private $avatar;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"profile", "search"})
     * 
     */
    private $nickname;

    /**
     * @ORM\OneToOne(targetEntity=User::class, mappedBy="profile", cascade={"persist", "remove"})
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity=Image::class, mappedBy="profile", orphanRemoval=true)
     */
    private $images;

    /**
     * @ORM\OneToMany(targetEntity=Post::class, mappedBy="author", orphanRemoval=true)
     * @Groups({"profile"})
     */
    private $posts;

    /**
     * @ORM\ManyToMany(targetEntity=Post::class, mappedBy="like")
     */
    private $liked;

    /**
     * @ORM\ManyToMany(targetEntity=Post::class, mappedBy="dislike")
     */
    private $disliked;

    /**
     * @ORM\OneToMany(targetEntity=Comment::class, mappedBy="profile", orphanRemoval=true)
     */
    private $comments;

    /**
     * @ORM\OneToMany(targetEntity=Folder::class, mappedBy="profile", orphanRemoval=true)
     */
    private $folders;

    /**
     * @ORM\ManyToMany(targetEntity=Profile::class, inversedBy="following")
     * @ORM\JoinTable(name="following")
     */
    private $following;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"profile"})
     */
    private $about;


    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->posts = new ArrayCollection();
        $this->liked = new ArrayCollection();
        $this->disliked = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->folders = new ArrayCollection();
        $this->follow = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getNickname(): ?string
    {
        return $this->nickname;
    }

    public function setNickname(?string $nickname): self
    {
        $this->nickname = $nickname;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        // set the owning side of the relation if necessary
        if ($user->getProfile() !== $this) {
            $user->setProfile($this);
        }

        return $this;
    }

    /**
     * @return Collection|Image[]
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
            $image->setProfile($this);
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->images->contains($image)) {
            $this->images->removeElement($image);
            // set the owning side to null (unless already changed)
            if ($image->getProfile() === $this) {
                $image->setProfile(null);
            }
        }

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
            $post->setAuthor($this);
        }

        return $this;
    }

    public function removePost(Post $post): self
    {
        if ($this->posts->contains($post)) {
            $this->posts->removeElement($post);
            // set the owning side to null (unless already changed)
            if ($post->getAuthor() === $this) {
                $post->setAuthor(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Post[]
     */
    public function getLiked(): Collection
    {
        return $this->liked;
    }

    public function addLiked(Post $liked): self
    {
        if (!$this->liked->contains($liked)) {
            $this->liked[] = $liked;
            $liked->addLike($this);
        }

        return $this;
    }

    public function removeLiked(Post $liked): self
    {
        if ($this->liked->contains($liked)) {
            $this->liked->removeElement($liked);
            $liked->removeLike($this);
        }

        return $this;
    }

    /**
     * @return Collection|Post[]
     */
    public function getDisliked(): Collection
    {
        return $this->disliked;
    }

    public function addDisliked(Post $disliked): self
    {
        if (!$this->disliked->contains($disliked)) {
            $this->disliked[] = $disliked;
            $disliked->addDislike($this);
        }

        return $this;
    }

    public function removeDisliked(Post $disliked): self
    {
        if ($this->disliked->contains($disliked)) {
            $this->disliked->removeElement($disliked);
            $disliked->removeDislike($this);
        }

        return $this;
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
            $comment->setProfile($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->contains($comment)) {
            $this->comments->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getProfile() === $this) {
                $comment->setProfile(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Folder[]
     */
    public function getFolders(): Collection
    {
        return $this->folders;
    }

    public function addFolder(Folder $folder): self
    {
        if (!$this->folders->contains($folder)) {
            $this->folders[] = $folder;
            $folder->setProfile($this);
        }

        return $this;
    }

    public function removeFolder(Folder $folder): self
    {
        if ($this->folders->contains($folder)) {
            $this->folders->removeElement($folder);
            // set the owning side to null (unless already changed)
            if ($folder->getProfile() === $this) {
                $folder->setProfile(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getFollowing(): Collection
    {
        return $this->following;
    }

    public function addFollowing(self $follower): self
    {
        if (!$this->following->contains($follower)) {
            $this->following[] = $follower;
        }

        return $this;
    }

    public function removeFollowing(self $follower): self
    {
        if ($this->following->contains($follower)) {
            $this->following->removeElement($follower);
        }

        return $this;
    }

    public function getAbout()
    {
        return $this->about;
    }

    public function setAbout($about)
    {
        $this->about = $about;

        return $this;
    }
}
