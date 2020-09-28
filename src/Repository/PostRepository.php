<?php

namespace App\Repository;

use App\Entity\Folder;
use App\Entity\Post;
use App\Entity\Profile;
use App\Entity\Tag;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @method Post|null find($id, $lockMode = null, $lockVersion = null)
 * @method Post|null findOneBy(array $criteria, array $orderBy = null)
 * @method Post[]    findAll()
 * @method Post[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, PaginatorInterface $paginator)
    {
        parent::__construct($registry, Post::class);
        $this->paginator = $paginator;
    }

    /**
     * @return Post[] Returns an array of Post objects
     */

    public function findPost($sort_method = null)
    {


        if ($sort_method == 'liked') {
            $qb = $this->createQueryBuilder('p')
                ->leftJoin('p.like', 'l')
                ->select('COUNT(l) AS HIDDEN liked', 'p')
                ->orderBy('liked', 'DESC')
                ->groupBy('p.id');
        } elseif ($sort_method == 'newest') {
            $qb = $this->createQueryBuilder('p')
                ->orderBy('p.created_at', 'DESC');
        } else {
            $qb = $this->createQueryBuilder('p');
        }
        return $qb->getQuery()->getResult();
    }

    public function findRecentPosts(int $count, Profile $profile)
    {
        $qb = $this->createQueryBuilder('p')
            ->where('p.author = :profile_id')
            ->setParameter('profile_id', $profile->getId())
            ->orderBy('p.created_at', 'DESC')
            ->setMaxResults($count);

        return $qb->getQuery()->getResult();
    }

    public function findRecentSavedPosts(int $count, Profile $profile, $folders)
    {
        $qb = $this->createQueryBuilder('p')
            ->leftJoin('p.folder', 'f')
            ->where('f = :folders_id')
            ->andWhere('p.author = :profile_id')
            ->setParameters(['folders_id' => $folders, 'profile_id' => $profile->getId()])
            ->orderBy('p.created_at', 'DESC')
            ->setMaxResults($count);
        return $qb->getQuery()->getResult();
    }

    public function findPaginated($page = 1, $sort_method = 'desc')
    {

        if ($sort_method == 'liked') {
            $qb = $this->createQueryBuilder('p')
                ->leftJoin('p.like', 'l')
                ->select('COUNT(l) AS HIDDEN liked', 'p')
                ->orderBy('liked', 'DESC')
                ->groupBy('p.id');
        } elseif ($sort_method == 'desc') {
            $qb = $this->createQueryBuilder('p')
                ->orderBy('p.created_at', 'DESC');
        } elseif ($sort_method == 'commented') {
            $qb = $this->createQueryBuilder('p')
                ->leftJoin('p.comments', 'c')
                ->select('COUNT(c) AS HIDDEN commented', 'p')
                ->orderBy('commented', 'DESC')
                ->groupBy('p.id');
        } else {
            $qb = $this->createQueryBuilder('p');
        }

        $pagination = $this->paginator->paginate($qb, $page, 6);
        return $pagination;
    }

    public function findPostsPaginated($page = 1, $sort_method = 'desc', Profile $profile)
    {

        if ($sort_method == 'liked') {
            $qb = $this->createQueryBuilder('p')
                ->leftJoin('p.like', 'l')
                ->andWhere('p.author = :profile_id')
                ->setParameters(['profile_id' => $profile->getId()])
                ->select('COUNT(l) AS HIDDEN liked', 'p')
                ->orderBy('liked', 'DESC')
                ->groupBy('p.id');
        } elseif ($sort_method == 'desc') {
            $qb = $this->createQueryBuilder('p')
                ->andWhere('p.author = :profile_id')
                ->setParameters(['profile_id' => $profile->getId()])
                ->orderBy('p.created_at', 'DESC');
        } elseif ($sort_method == 'commented') {
            $qb = $this->createQueryBuilder('p')
                ->leftJoin('p.comments', 'c')
                ->andWhere('p.author = :profile_id')
                ->setParameters(['profile_id' => $profile->getId()])
                ->select('COUNT(c) AS HIDDEN commented', 'p')
                ->orderBy('commented', 'DESC')
                ->groupBy('p.id');
        }

        $pagination = $this->paginator->paginate($qb, $page, 6);
        return $pagination;
    }

    public function findByFolder($page = 1, $sort_method = 'newest', Profile $profile, Folder $folder)
    {

        if ($sort_method == 'liked') {
            $qb = $this->createQueryBuilder('p')
                ->leftJoin('p.like', 'l')
                ->andWhere('p.author = :profile_id')
                ->andWhere('p.folder = :folder_id')
                ->setParameters(['profile_id' => $profile->getId(), 'folder_id' => $folder->getId()])
                ->select('COUNT(l) AS HIDDEN liked', 'p')
                ->orderBy('liked', 'DESC')
                ->groupBy('p.id');
        } elseif ($sort_method == 'desc') {
            $qb = $this->createQueryBuilder('p')
                ->andWhere('p.author = :profile_id')
                ->andWhere('p.folder = :folder_id')
                ->setParameters(['profile_id' => $profile->getId(), 'folder_id' => $folder->getId()])
                ->orderBy('p.created_at', 'DESC');
        } elseif ($sort_method == 'commented') {
            $qb = $this->createQueryBuilder('p')
                ->leftJoin('p.comments', 'c')
                ->andWhere('p.author = :profile_id')
                ->andWhere('p.folder = :folder_id')
                ->setParameters(['profile_id' => $profile->getId(), 'folder_id' => $folder->getId()])
                ->select('COUNT(c) AS HIDDEN commented', 'p')
                ->orderBy('commented', 'DESC')
                ->groupBy('p.id');
        }

        $pagination = $this->paginator->paginate($qb, $page, 6);
        return $pagination;
    }


    public function findFollowed($profile, $page = 1, $sort_method = 'desc')
    {

        if ($sort_method == 'liked') {
            $qb = $this->createQueryBuilder('p')
                ->leftJoin('p.like', 'l')
                ->andWhere('p.author IN (:profile_ids)')
                ->setParameters(['profile_ids' => $profile])
                ->select('COUNT(l) AS HIDDEN liked', 'p')
                ->orderBy('liked', 'DESC')
                ->groupBy('p.id');
        } elseif ($sort_method == 'desc') {
            $qb = $this->createQueryBuilder('p')
                ->andWhere('p.author IN (:profile_ids)')
                ->setParameters(['profile_ids' => $profile])
                ->orderBy('p.created_at', 'DESC');
        } elseif ($sort_method == 'commented') {
            $qb = $this->createQueryBuilder('p')
                ->leftJoin('p.comments', 'c')
                ->andWhere('p.author IN (:profile_ids)')
                ->setParameters(['profile_ids' => $profile])
                ->select('COUNT(c) AS HIDDEN commented', 'p')
                ->orderBy('commented', 'DESC')
                ->groupBy('p.id');
        }

        $pagination = $this->paginator->paginate($qb, $page, 6);
        return $pagination;
    }

    public function findLike(string $string)
    {
        $qb = $this->createQueryBuilder('p')
            ->leftJoin('p.author', 'a')
            ->leftJoin('p.tags', 't')
            ->orWhere('p.title LIKE :val')
            ->orWhere('t.name LIKE :val')
            ->setParameter('val', '%' . $string . '%')
            ->setMaxResults(5);

        return $qb->getQuery()->getResult();
    }

    public function findByTags(Tag $tag, $page = 1, $sort_method = 'desc')
    {
        if ($sort_method == 'liked') {
            $qb = $this->createQueryBuilder('p')
                ->leftJoin('p.like', 'l')
                ->leftJoin('p.tags', 't')
                ->andWhere('t.id = :tag_id')
                ->setParameter('tag_id', $tag)
                ->select('COUNT(l) AS HIDDEN liked', 'p')
                ->orderBy('liked', 'DESC')
                ->groupBy('p.id');
        } elseif ($sort_method == 'desc') {
            $qb = $this->createQueryBuilder('p')
                ->leftJoin('p.tags', 't')
                ->andWhere('t.id = :tag_id')
                ->setParameter('tag_id', $tag)
                ->orderBy('p.created_at', 'DESC');
        } elseif ($sort_method == 'commented') {
            $qb = $this->createQueryBuilder('p')
                ->leftJoin('p.comments', 'c')
                ->leftJoin('p.tags', 't')
                ->andWhere('t.id = :tag_id')
                ->setParameter('tag_id', $tag)
                ->select('COUNT(c) AS HIDDEN commented', 'p')
                ->orderBy('commented', 'DESC')
                ->groupBy('p.id');
        }

        $pagination = $this->paginator->paginate($qb, $page, 6);
        return $pagination;
    }
}
