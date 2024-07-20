'use client'
import styles from "./page.module.css";
import Navbar from "@/app/components/Navbar/Navbar";
import {PlaylistItem} from "@/app/components/PlaylistItem/PlaylistItem";
import {IconEnum} from "@/app/components/Icon/Icon";
import {Plaster} from "next/dist/compiled/@next/font/dist/google";
import {ArtistHero} from "@/app/components/ArtistHero/ArtistHero";

export default function Home() {
    return (
        <main className={styles.main}>
            <ArtistHero artistName={'Billie Eilish'} songsCount={5769} imgSrc={'images/artist.png'}/>
            <PlaylistItem price={123} icon={'bin'}/>
        </main>
    );
}
