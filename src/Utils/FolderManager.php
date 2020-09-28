<?php

namespace App\Utils;

use App\Entity\Folder;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;

class FolderManager
{

    /**
     * @var EntityManagerInterface
     */
    public $em;

    /**
     * @var Security
     */
    public $security;



    public function __construct(EntityManagerInterface $em, Security $security)
    {
        $this->em = $em;
        $this->security = $security;
    }


    public function createFolder(string $folder_name)
    {

        // if ($this->em->getRepository(Folder::class)->findOneBy(['name' => $folder_name, 'profile' => $profile_id])) {
        //     $folder = $this->em->getRepository(Folder::class)->findOneBy(['name' => $folder_name]);
        //     return false;
        // } else {
        $folder = new Folder;
        $folder->setName($folder_name);
        $profile = $this->security->getUser()->getProfile();
        $folder->setProfile($profile);

        $this->em->persist($folder);
        $this->em->flush();
        // }

        return $folder;
    }


    public function getFolder($id): Folder
    {
        $folder = $this->em->getRepository(Folder::class)->findOneBy(['id' => $id, 'profile' => $this->security->getUser()->getProfile()]);

        return $folder;
    }

    public function removeFolder($folder_id)
    {
        $folder = $this->em->getRepository(Folder::class)->findOneBy(['id' => $folder_id]);
        $this->em->remove($folder);
        $this->em->flush();
        return true;
    }


    public function renameFolder($folder_id, $folder_name)
    {
        $folder = $this->em->getRepository(Folder::class)->findOneBy(['id' => $folder_id]);
        $folder->setName($folder_name);
        $this->em->persist($folder);
        $this->em->flush();
        return $folder;
    }
}
