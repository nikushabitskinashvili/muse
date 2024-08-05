'use client'
import { useRouter } from 'next/router';
import styles from './page.module.scss';
import { AlbumHero } from '@/app/components/AlbumHero/AlbumHero';
import { title } from 'process';
import { PlaylistHero } from '@/app/components/PlaylistHero/PlaylistHero';
import { PlaylistItem } from '@/app/components/PlaylistItem/PlaylistItem';

const AlbumDetailsPage = () => {

    const album = {
        title: 'sdhsdsdhc',
        image: '/images/1.png',
        total:2
    }
    const playlist = [
        {
            id: 1,
            title: "Happier Than Ever (Official Music Video)",
            image: "/images/foryou.png",
            name: "Billie Eilish",
            price: 202,
        },
        {
            id: 2,
            title: "Bad Guy",
            image: "/images/foryou.png",
            name: "Billie Eilish",
            price: 202,
        },
        {
            id: 3,
            title: "Therefore I Am",
            image: "/images/foryou.png",
            name: "Billie Eilish",
            price: 202,
        },
        {
            id: 4,
            title: "Everything I Wanted",
            image: "/images/foryou.png",
            name: "Billie Eilish",
            price: 202,
        },
        {
            id: 5,
            title: "Lovely",
            image: "/images/foryou.png",
            name: "Billie Eilish",
            price: 202,
        },
        {
            id: 6,
            title: "Ocean Eyes",
            image: "/images/foryou.png",
            name: "Billie Eilish",
            price: 202,
        },
        {
            id: 7,
            title: "When The Party's Over",
            image: "/images/foryou.png",
            name: "Billie Eilish",
            price: 202,
        },
        {
            id: 8,
            title: "You Should See Me In A Crown",
            image: "/images/foryou.png",
            name: "Billie Eilish",
            price: 202,
        },
        {
            id: 9,
            title: "Bury A Friend",
            image: "/images/foryou.png",
            name: "Billie Eilish",
            price: 202,
        },
        {
            id: 10,
            title: "No Time To Die",
            image: "/images/foryou.png",
            name: "Billie Eilish",
            price: 202,
        },
    ];
    
        
    
   
    return (
        <div className={styles.albumDetails}>
            <AlbumHero title={album.title} image={album.image} total={album.total}/>
            <div className={styles.list}>
                        {playlist.map(album => (
                            <PlaylistItem
                                key={album.id}
                                title={album.title}
                                image={album.image}
                                duration={album.price}
                                icon={'dots'} name={''} />
                        ))}
                    </div>
        </div>
    );
};

export default AlbumDetailsPage;
