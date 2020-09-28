<?php

namespace App\Repository;

use App\Entity\Folder;
use App\Entity\Profile;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @method Folder|null find($id, $lockMode = null, $lockVersion = null)
 * @method Folder|null findOneBy(array $criteria, array $orderBy = null)
 * @method Folder[]    findAll()
 * @method Folder[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FolderRepository extends ServiceEntityRepository
{


    public function __construct(ManagerRegistry $registry, PaginatorInterface $paginator)
    {
        parent::__construct($registry, Folder::class);
        $this->paginator = $paginator;
    }


    public function findPaginated($page = 1, $sort = 'updated', Profile $profile)
    {

        if ($sort == 'updated') {
            $qb = $this->createQueryBuilder('f')
                ->leftJoin('f.profile', 'p')
                ->andWhere('p = :profile_id')
                ->setParameters(['profile_id' => $profile->getId()])
                ->orderBy('f.modified', 'DESC');
        } elseif ($sort == 'created') {
            $qb = $this->createQueryBuilder('f')
                ->andWhere('f.profile = :profile_id')
                ->setParameters(['profile_id' => $profile->getId()])
                ->orderBy('f.created_at', 'DESC');
        } elseif ($sort == 'posts') {
            $qb = $this->createQueryBuilder('f')
                ->leftJoin('f.posts', 'p')
                ->andWhere('f.profile = :profile_id')
                ->setParameters(['profile_id' => $profile->getId()])
                ->select('COUNT(p) AS HIDDEN posted', 'f')
                ->orderBy('posted', 'DESC')
                ->groupBy('f.id');
        }


        $pagination = $this->paginator->paginate($qb, $page, 3);
        return $pagination;
    }
}
