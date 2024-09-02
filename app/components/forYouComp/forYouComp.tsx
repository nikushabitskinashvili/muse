'use client'
import styles from './forYouComp.module.scss'
import {PlaylistItem} from "@/app/components/PlaylistItem/PlaylistItem";
import {useState} from "react";
import Link from "next/link";

const albums = [
    {
        id: 1,
        title: "Happier Than Ever (Official Music Video)",
        image: "/images/foryou.png",
        category: "Billie Eilish",
        price: 202,
    },
    {
        id: 2,
        title: "Bad Guy",
        image: "/images/foryou.png",
        category: "Billie Eilish",
        price: 202,
    },
    {
        id: 3,
        title: "Therefore I Am",
        image: "/images/foryou.png",
        category: "Billie Eilish",
        price: 202,
    },
    {
        id: 4,
        title: "Everything I Wanted",
        image: "/images/foryou.png",
        category: "Billie Eilish",
        price: 202,
    },
    {
        id: 5,
        title: "Lovely",
        image: "/images/foryou.png",
        category: "Billie Eilish",
        price: 202,
    },
    {
        id: 6,
        title: "Ocean Eyes",
        image: "/images/foryou.png",
        category: "Billie Eilish",
        price: 202,
    },
    {
        id: 7,
        title: "When The Party's Over",
        image: "/images/foryou.png",
        category: "Billie Eilish",
        price: 202,
    },
    {
        id: 8,
        title: "You Should See Me In A Crown",
        image: "/images/foryou.png",
        category: "Billie Eilish",
        price: 202,
    },
    {
        id: 9,
        title: "Bury A Friend",
        image: "/images/foryou.png",
        category: "Billie Eilish",
        price: 202,
    },
    {
        id: 10,
        title: "No Time To Die",
        image: "/images/foryou.png",
        category: "Billie Eilish",
        price: 202,
    },
];

export const ForYouComp = () => {


    const [activeId, setActiveId] = useState<number | null>(null)


    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <span className={styles.title}>For You</span>
                <Link href={"/foryou"} className={styles.link}>See all</Link>
            </div>
            <div className={styles.list}>
                {albums.slice(0, 3).map(album => (
                    <PlaylistItem
                        id={album.id}
                        activeId={activeId}
                        setActiveId={setActiveId}
                        key={album.id}
                        title={album.title}
                        image={album.image}
                        duration={album.price}
                        name={album.category}
                        icon={'dots'}/>
                ))}
            </div>
        </div>
    )
}