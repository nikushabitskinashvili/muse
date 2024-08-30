'use client';

import styles from './page.module.scss';
import { AlbumHero } from '@/app/components/AlbumHero/AlbumHero';
import { MusicWrapper } from '@/app/components/musicWrapper/musicWrapper';
import { popularAlbum } from '@/app/data/CarouselData';
import { strict } from 'assert';
import { useParams } from 'next/navigation';

const AlbumDetailsPage = () => {
    const { id } = useParams()
    
    const album = popularAlbum[+id];

    return (
        <main className={styles.main}>
            <div className={styles.albumDetails}>
                <AlbumHero title={album.title} img={album.img} total={album.total} />
                <div className={styles.list}>
                    <MusicWrapper />
                </div>
            </div>
        </main>
    );
};

export default AlbumDetailsPage;
