<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\UserFixtures;
use App\DataFixtures\FolderFixtures;
use App\Entity\Post;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class PostFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        foreach ($this->getPostData() as $index => $data) {

            $post = new Post;
            $this->setReference('post_' . $index, $post);

            $post->setAuthor($this->getReference('user_' . $data['author'])->getProfile());
            $post->setFolder($this->getReference('folder_' . $data['author'] . '_' . $data['folder']));
            $post->setTitle($data['title']);
            $post->setBody($data['body']);

            foreach ($data['tags'] as $tag) {
                $post->addTag($this->getReference('tag_' . $tag));
            }
            $post->setFrontCoverLink($data['front_cover']);
            $post->setHeaderCoverLink($data['header_cover']);

            $manager->persist($post);
        }

        $manager->flush();
    }

    public function getPostData(): array
    {
        return [
            [
                'title' => 'Lorem ipsum dolor sit amet.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 1,
                'folder' => 1,
                'tags' => [9, 7],
                'front_cover' => '\img\fixtures\front cover\5.jpg',
                'header_cover' => '\img\fixtures\header cover\2.jpg',
                'created_at' => '2020-09-26 19:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 1,
                'folder' => 2,
                'tags' => [6, 11],
                'front_cover' => '\img\fixtures\front cover\1.jpg',
                'header_cover' => '\img\fixtures\header cover\1.jpeg',
                'created_at' => '2020-09-26 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 1,
                'folder' => 3,
                'tags' => [7, 8],
                'front_cover' => '\img\fixtures\front cover\2.jpg',
                'header_cover' => '\img\fixtures\header cover\2.jpg',
                'created_at' => '2020-09-25 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 1,
                'folder' => 4,
                'tags' => [1, 14],
                'front_cover' => '\img\fixtures\front cover\3.jpg',
                'header_cover' => '\img\fixtures\header cover\4.jpg',
                'created_at' => '2020-09-24 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 1,
                'folder' => 1,
                'tags' => [10, 15],
                'front_cover' => '\img\fixtures\front cover\6.jpg',
                'header_cover' => '\img\fixtures\header cover\7.jpg',
                'created_at' => '2020-09-26 10:13:55',
            ],
            //
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 2,
                'folder' => 1,
                'tags' => [10, 12, 13],
                'front_cover' => '\img\fixtures\front cover\6.png',
                'header_cover' => '\img\fixtures\header cover\6.png',
                'created_at' => '2020-09-25 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 2,
                'folder' => 2,
                'tags' => [1, 17],
                'front_cover' => '\img\fixtures\front cover\10.jpg',
                'header_cover' => '\img\fixtures\header cover\10.jpg',
                'created_at' => '2020-09-24 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 2,
                'folder' => 3,
                'tags' => [13, 16],
                'front_cover' => '\img\fixtures\front cover\12.jpg',
                'header_cover' => '\img\fixtures\header cover\12.jpg',
                'created_at' => '2020-09-23 10:13:55',
            ],
            //

            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 3,
                'folder' => 1,
                'tags' => [2, 5],
                'front_cover' => '\img\fixtures\front cover\7.jpeg',
                'header_cover' => '\img\fixtures\header cover\7.jpeg',
                'created_at' => '2020-09-26 10:13:55',
            ],
            //
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 4,
                'folder' => 1,
                'tags' => [10, 18],
                'front_cover' => '\img\fixtures\front cover\8.jpg',
                'header_cover' => '\img\fixtures\header cover\9.jpg',
                'created_at' => '2020-09-25 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 4,
                'folder' => 1,
                'tags' => [10, 18],
                'front_cover' => '\img\fixtures\front cover\40.jpg',
                'header_cover' => '\img\fixtures\front cover\40.jpg',
                'created_at' => '2020-09-25 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 5,
                'folder' => 1,
                'tags' => [3, 21],
                'front_cover' => '\img\fixtures\front cover\4.jpg',
                'header_cover' => '\img\fixtures\header cover\6.jpg',
                'created_at' => '2020-09-24 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 5,
                'folder' => 1,
                'tags' => [3, 21],
                'front_cover' => '\img\fixtures\front cover\51.jpg',
                'header_cover' => '\img\fixtures\front cover\51.jpg',
                'created_at' => '2020-09-24 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 6,
                'folder' => 1,
                'tags' => [19, 20],
                'front_cover' => '\img\fixtures\front cover\30.jpg',
                'header_cover' => '\img\fixtures\header cover\30.jpg',
                'created_at' => '2020-09-23 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 6,
                'folder' => 1,
                'tags' => [19, 20],
                'front_cover' => '\img\fixtures\front cover\60.jpg',
                'header_cover' => '\img\fixtures\front cover\60.jpg',
                'created_at' => '2020-09-26 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 6,
                'folder' => 1,
                'tags' => [19, 20],
                'front_cover' => '\img\fixtures\front cover\61.jpg',
                'header_cover' => '\img\fixtures\front cover\61.jpg',
                'created_at' => '2020-09-22 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 7,
                'folder' => 1,
                'tags' => [3, 4],
                'front_cover' => '\img\fixtures\front cover\20.png',
                'header_cover' => '\img\fixtures\header cover\20.png',
                'created_at' => '2020-09-27 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 7,
                'folder' => 1,
                'tags' => [3, 4],
                'front_cover' => '\img\fixtures\front cover\72.jpg',
                'header_cover' => '\img\fixtures\front cover\72.jpg',
                'created_at' => '2020-09-256 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 7,
                'folder' => 1,
                'tags' => [3, 4],
                'front_cover' => '\img\fixtures\front cover\70.jpg',
                'header_cover' => '\img\fixtures\front cover\70.jpg',
                'created_at' => '2020-09-24 10:13:55',
            ],
            [
                'title' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'body' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius qui illum perspiciatis quas corrupti reprehenderit! Quisquam doloribus cupiditate cumque quos ipsam placeat dolorem quis autem ipsa! Odit quod ex est eveniet? Fugiat cupiditate ab rerum cum odio officiis animi quasi ducimus possimus, tempora nostrum a minima laudantium quia ipsam aliquid pariatur natus reiciendis qui optio mollitia perferendis exercitationem sit! Eveniet eligendi, ipsa quia mollitia culpa, libero consequuntur animi voluptatibus molestias cumque eius deserunt tempora adipisci possimus perspiciatis saepe ea porro ad! Harum obcaecati corrupti facere soluta nesciunt reiciendis accusantium hic fuga aut animi ad earum, qui fugiat pariatur amet ipsam modi dolore repellat illum. Iste perferendis a facere, obcaecati, cumque illo enim, blanditiis aperiam doloremque veritatis impedit eligendi ad inventore architecto nam voluptate dignissimos neque vel nisi numquam incidunt quae dicta! Quam commodi quae deleniti explicabo minus vero exercitationem eveniet soluta, nam minima adipisci reprehenderit quaerat voluptate hic ipsam nihil voluptates? Quia quam obcaecati rerum alias recusandae quibusdam quas corrupti, deleniti maiores libero expedita fugiat iste, iure necessitatibus non ipsa adipisci officiis sit beatae doloremque sequi dolor fuga fugit. Adipisci inventore similique eveniet nulla at. Ullam soluta praesentium assumenda saepe ipsam ex expedita quos, quisquam voluptatibus a aliquid sequi!",
                'author' => 7,
                'folder' => 2,
                'tags' => [3, 4],
                'front_cover' => '\img\fixtures\front cover\71.jpg',
                'header_cover' => '\img\fixtures\front cover\71.jpg',
                'created_at' => '2020-09-25 10:13:55',
            ],
        ];
    }


    public function getDependencies()
    {
        return [FolderFixtures::class];
        return [UserFixtures::class];
        return [TagFixtures::class];
    }
}
