'use client'
import { useRouter } from 'next/router';
import styles from './page.module.scss';
import { AlbumHero } from '@/app/components/AlbumHero/AlbumHero';
import { title } from 'process';
import { PlaylistHero } from '@/app/components/PlaylistHero/PlaylistHero';
import { PlaylistItem } from '@/app/components/PlaylistItem/PlaylistItem';
import { MuseoModerno } from 'next/font/google';
import { MusicWrapper } from '@/app/components/musicWrapper/musicWrapper';

const AlbumDetailsPage = () => {

    const album = {
        title: 'sdhsdsdhc',
        image: '/images/1.png',
        total: 2
    }




    return (
        <main className={styles.main}>
            <div className={styles.albumDetails}>
                <AlbumHero title={album.title} image={album.image} total={album.total} />
                <div className={styles.list}>
                    <MusicWrapper />
                </div>
            </div>
        </main>

    );
};

export default AlbumDetailsPage;