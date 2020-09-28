<?php

namespace App\Repository;

use App\Entity\Tag;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @method Tag|null find($id, $lockMode = null, $lockVersion = null)
 * @method Tag|null findOneBy(array $criteria, array $orderBy = null)
 * @method Tag[]    findAll()
 * @method Tag[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TagRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, PaginatorInterface $paginator)
    {
        parent::__construct($registry, Tag::class);
        $this->paginator = $paginator;
    }


    public function findLike(string $string)
    {
        $qb =  $this->createQueryBuilder('t')
            ->where('t.name LIKE :val')
            ->setParameter('val', '%' . $string . '%')
            ->setMaxResults(3);
        return $qb->getQuery()->getResult();
    }


    public function findTagsPaginated($page = 1, $sort_method = 'popular')
    {
        if ($sort_method == 'popular') {
            $qb =  $this->createQueryBuilder('t')
                ->leftJoin('t.post', 'p')
                ->select('COUNT(p) AS HIDDEN used', 't')
                ->orderBy('used', 'DESC')
                ->groupBy('t.id');
        } else if ($sort_method == 'name') {
            $qb =  $this->createQueryBuilder('t')
                ->orderBy('t.name', 'ASC');
        }

        $pagination = $this->paginator->paginate($qb, $page, 8);
        return $pagination;
    }
}
