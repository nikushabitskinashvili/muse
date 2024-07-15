'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Input from "./components/Input/Input";
import Link from "next/dist/client/link";
import AlbumCard from "./components/AlbumCard/AlbumCard";


export default function Home() {
  return (
    <main className={styles.main}>
      <AlbumCard name='barry white' image='/images/barry.jpg' id={0} title={"love making music"}/>
    </main>
  );
}
