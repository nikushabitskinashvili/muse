"use client";
import styles from "./AlbumCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import Axios from "@/app/Helpers/Axios";
import { decodeJwt } from "jose";
import { getClientCookie } from "@/app/Helpers/GetCookieValue";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import { MouseEvent } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AlbumCard = ({
  item,
  className,
  playlist,
  musicId,
  isModal,
  onClose,
}: {
  item: any;
  className?: string;
  playlist?: boolean;
  musicId?: number;
  isModal?: boolean;
  onClose?: () => void;
}) => {
  const link = playlist ? `playlists/${item.id}` : `albums/${item.id}`;

  const handleAddMusicToPlaylist = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const token = getClientCookie(AUTH_COOKIE_KEY);

    if (!token) {
      console.error("No token found");
      return;
    }

    const user = decodeJwt(token);

    if (!user || !user.id) {
      console.error("Invalid token payload");
      return;
    }

    try {
      const response = await Axios.patch(
        `/playlist/add/${item.id}/${user.id}/${musicId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Music Successfully added to playlist", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          onClose && onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Error adding music to the playlist", error);
    }
  };

  return isModal ? (
    <Link
      className={`${styles.albumCard} ${className}`}
      onClick={handleAddMusicToPlaylist}
      href="#"
    >
      <Image
        className={styles.albumImg}
        src={
          item.cover
            ? item.cover
            : "https://thewritepractice.com/wp-content/uploads/2019/08/Punctuating-Song-Titles.jpg"
        }
        alt={item.title}
        width={150}
        height={146}
      />
      <div className={styles.albumName}>
        <span className={styles.albumTitle}>
          {item.title ? item.title : item.name}
        </span>
        <span className={styles.artistName}>{item.subTitle}</span>
      </div>
    </Link>
  ) : (
    <Link className={`${styles.albumCard} ${className}`} href={`${link}`}>
      <Image
        className={styles.albumImg}
        src={
          item.cover
            ? item.cover
            : "https://thewritepractice.com/wp-content/uploads/2019/08/Punctuating-Song-Titles.jpg"
        }
        alt={item.title}
        width={150}
        height={146}
      />
      <div className={styles.albumName}>
        <span className={styles.albumTitle}>
          {item.title ? item.title : item.name}
        </span>
        <span className={styles.artistName}>{item.subTitle}</span>
      </div>
    </Link>
  );
};

export default AlbumCard;
