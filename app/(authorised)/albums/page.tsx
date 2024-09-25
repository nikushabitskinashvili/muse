"use client"
import { popularAlbum } from '@/app/data/CarouselData';
import styles from './page.module.scss';
import AlbumCard from '@/app/components/AlbumCard/AlbumCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '@/app/Helpers/Axios';

const Albums = () => {

    const [album,setAlbum]=useState([])

    console.log(album);
    

    useEffect(()=>{
        const token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlrYXRlc3RAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzI3MjY0MzAyfQ.nlu0AqqPSbQzPv30sb3iiBtEPGiU9n113z2lreGNwV0"
        const fetchData = async () =>{
            try {
                const response = await API.get("http://10.10.51.12:3001/album",{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                setAlbum(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    },[])


    return (
        <div className={styles.main}>
            <div className={styles.mainWrapper}>
                <div className={styles.albumTxt}>
                    <span>Popular albums</span>
                </div>
                <div className={styles.container}>
                    {popularAlbum.map((item) => (
                        <AlbumCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Albums;
