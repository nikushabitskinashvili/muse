"use client";
import styles from "@/app/(authorised)/foryou/foryou.module.scss";
import { PlaylistItem } from "@/app/components/PlaylistItem/PlaylistItem";
import { useState } from "react";

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

export const MusicWrapper = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [dottedId, setDottedId] = useState<number | null>(null);

  return (
    <div className={styles.list}>
      {albums.map((album) => (
        <PlaylistItem
          dottedId={dottedId}
          setDottedId={setDottedId}
          id={album.id}
          activeId={activeId}
          setActiveId={setActiveId}
          key={album.id}
          title={album.title}
          image={album.image}
          duration={album.price}
          name={album.category}
          icon={"dots"} audioSrc={""} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }        />
      ))}
    </div>
  );
};

