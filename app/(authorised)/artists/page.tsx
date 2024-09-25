'use client';
import styles from "./ArtistPage.module.scss";
import { ArtistCard } from "../../components/ArtistCard/ArtistCard";
import { artists } from "../../data/CarouselData";
import { title } from "process";
import { API } from "@/app/Helpers/Axios";
import { useState, useEffect } from "react";

export default function Artist() {
  const [artist,setArtist]=useState([])

    console.log(artist);
    

    useEffect(()=>{
        const token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlrYXRlc3RAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzI3MjY0MzAyfQ.nlu0AqqPSbQzPv30sb3iiBtEPGiU9n113z2lreGNwV0"
        const fetchData = async () =>{
            try {
                const response = await API.get("http://10.10.51.12:3001/artist",{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                setArtist(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    },[])
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <span className={styles.title}>The Artists</span>
        <div className={styles.wrapper}>
          {artists.map((item) => (

            <ArtistCard title={title} key={item.id} item={item} />

          ))}
        </div>
      </div>
    </div>
  );
}
