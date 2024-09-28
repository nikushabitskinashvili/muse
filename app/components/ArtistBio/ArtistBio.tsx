'use client';

import styles from './ArtistBio.module.scss'

interface props {
    heading: string;
    bio: string;

}

export const ArtistBio = (Props : props) => {
    return(
        <div className={styles.container}>
            <span className= {styles.bioHeading}>{Props.heading}</span>
            <span className={styles.bio}>{Props.bio}</span>
        </div>
    )
}