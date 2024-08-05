"use client"

import styles from './ArtistPage.module.scss';
import Navbar from '../components/Navbar/Navbar';
import { ArtistCard } from '../components/ArtistCard/ArtistCard';
import { artists } from '../data/CarouselData';
export default  function artist () {

    return(
        <div className={styles.main}>
            <Navbar/>

            <div className={styles.container}>
                <span className={styles.heading}>The Artists</span>

                <div className={styles.wrapper}>
                    
                    {artists.map(artist => (
                        <ArtistCard key={artist.id} title={"Artists"} item = {artist}/>
                        
                    ))}


                </div>
            </div>
        </div>
    )
}