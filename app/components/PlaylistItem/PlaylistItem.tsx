"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./PlaylistItem.module.scss";
import { IconEnum } from "@/app/components/Icon/Icon";
import { DotsPop } from "@/app/components/dotsPop/dotsPop";
import { ReusableModal } from "@/app/components/reusableModal/reusableModal";
import { YourPlaylistModal } from "@/app/components/yourPlaylistModal/yourPlaylistModal";
import { PlaylistItemProps } from "@/app/Interfaces/Interfaces";
import { getClientCookie } from "@/app/Helpers/GetCookieValue";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import Axios from "../../Helpers/Axios";
import { decodeJwt } from "jose";
import { useRouter } from "next/navigation";

export const PlaylistItem = (props: PlaylistItemProps) => {
  const [dotsPop, setDotsPop] = useState(false);
  const [liked, setLiked] = useState(false);
  const [createPop, setCreatePop] = useState(false);
  const [addPop, setAddPop] = useState(false);
  const dotsPopRef = useRef<HTMLDivElement>(null);
  const createPopRef = useRef<HTMLDivElement>(null);
  const addPopRef = useRef<HTMLDivElement>(null);
  const [playlistName, setPlaylistName] = useState<string>("My Playlist");
  const [artist, setArtist] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchArtistName = async () => {
      const token = getClientCookie(AUTH_COOKIE_KEY);
      try {
        const response = await Axios.get(`/artist/${props.artistId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setArtist(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (props.artistId) {
      fetchArtistName();
    }
  }, [props.artistId]);

  const handleSuccessUpdate = (newName: string) => {
    setPlaylistName(newName);
    if (props.refreshFetch) props.refreshFetch();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dotsPopRef.current &&
        !dotsPopRef.current.contains(event.target as Node)
      ) {
        setDotsPop(false);
        props.setDottedId(null);
      }
    };

    if (dotsPop) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dotsPop, props]);

  const toggleCreatePop = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCreatePop(!createPop);
  };

  const toggleAddPop = (event: React.MouseEvent) => {
    event.stopPropagation();
    setAddPop(!addPop);
  };

  const toggleLike = (event: React.MouseEvent) => {
    event.stopPropagation();
    setLiked(!liked);
  };

  const dotsClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDotsPop(!dotsPop);
    if (!dotsPop) {
      props.setDottedId(props.id);
    } else {
      props.setDottedId(null);
    }
  };

  const deleteClick = (event: React.MouseEvent) => {
    event.stopPropagation();

    if (props.icon === "bin") {
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

      Axios.delete(`playlist/add/${user.id}/${props.playlistId}/${props.id}`)
        .then(() => {
          if (props.refreshFetch) props.refreshFetch();
        })
        .catch((error) => {
          console.error("Error deleting item:", error);
        });

      router.push(`/playlists/${props.playlistId}`);
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();

    const isActive = props.activeId === props.id;
    if (isActive) {
      props.setActiveId(null);
    } else {
      props.setActiveId(props.id);
    }

    if (props.onClick) {
      props.onClick(); // Calls the function to play the music
    }
  };

  const closeCreatePop = () => {
    setCreatePop(false);
  };

  const closeAddPop = () => {
    setAddPop(false);
  };

  const classNames = [styles.playlistItem];
  if (props.activeId === props.id) classNames.push(styles.active);

  return (
    <>
      {addPop && (
        <div className={styles.popBackground} onClick={closeAddPop}>
          <div
            ref={addPopRef}
            onClick={(event) => event.stopPropagation()}
            className={styles.popContainer}
          >
            <YourPlaylistModal onClose={closeAddPop} musicId={props.id} />
          </div>
        </div>
      )}

      {createPop && (
        <div className={styles.popBackground} onClick={closeCreatePop}>
          <div
            ref={createPopRef}
            onClick={(event) => event.stopPropagation()}
            className={styles.popContainer}
          >
            <ReusableModal
              title={"Create Playlist"}
              label={"Name"}
              onClose={closeCreatePop}
              placeholder={"Playlist name"}
              closeModal={closeCreatePop}
              onSuccessUpdate={handleSuccessUpdate}
              refreshPlaylist={props.refreshPlaylist}
            />
          </div>
        </div>
      )}

      <div className={classNames.join(" ").trim()} onClick={handleClick}>
        <div className={styles.leftSection}>
          <div className={styles.imageSection}>
            <Image
              className={styles.icon}
              src={IconEnum.AUDIO}
              alt="audio"
              width={24}
              height={24}
            />
            <Image
              className={styles.image}
              src={artist?.image}
              alt={`album`}
              width={56}
              height={56}
            />
          </div>
          <div className={styles.text}>
            <span>{`${props.name} - ${props.title}`}</span>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.time}>
            {/* <Image src={IconEnum.CLOCK} alt={""} width={24} height={24} /> */}
            {/* <span className={styles.text}>
              {(props.duration / 60).toFixed(2)}
            </span> */}
          </div>
          {/* <Image
            className={`${styles.icon} ${styles.heart}`}
            src={liked ? IconEnum.FILLHEART : IconEnum.HEART}
            alt={""}
            width={24}
            height={24}
            onClick={toggleLike}
          /> */}
          <div ref={dotsPopRef}>
            <Image
              className={styles.dots}
              src={props.icon === "bin" ? IconEnum.BIN : IconEnum.DOTS}
              alt={""}
              width={24}
              height={24}
              onClick={props.icon === "dots" ? dotsClick : deleteClick}
            />
            {dotsPop && (
              <DotsPop
                createNewPlaylist={toggleCreatePop}
                addToPlaylist={toggleAddPop}
                className={styles.dotspop}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
