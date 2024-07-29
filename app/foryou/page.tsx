import styles from './foryou.module.scss'
// import {XButton} from "@/app/components/XButton/XButton";
import {PlaylistItem} from "@/app/components/PlaylistItem/PlaylistItem";
import {IconEnum} from "@/app/components/Icon/Icon";
import {white} from "next/dist/lib/picocolors";
import Navbar from "@/app/components/Navbar/Navbar";

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


export default function ForYou() {
    return (
        <>
            <Navbar/>
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.head}>
                        <span className={styles.title}>For you</span>
                        {/*<XButton bg={false}/>*/}
                        <span style={{color: 'white'}}>X</span>
                    </div>
                    <div className={styles.list}>
                        {albums.map(album => (
                            <PlaylistItem
                                key={album.id}
                                title={album.title}
                                image={album.image}
                                price={album.price}
                                icon={'dots'}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}