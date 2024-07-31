'use client';
import styles from './ArtistPage.module.scss'
import Navbar from "@/app/components/Navbar/Navbar";
import { ArtistHero } from "@/app/components/ArtistHero/ArtistHero";
import { ArtistCard } from "@/app/components/ArtistCard/ArtistCard";


const ArtistPage = () => {
    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.wrapper}>
                

            </div>
            
        </div>
    )
}
export default ArtistPage;