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
import Axios  from "../../Helpers/Axios";

export const PlaylistItem = (props: PlaylistItemProps) => {
  const [dotsPop, setDotsPop] = useState(false);
  const [liked, setLiked] = useState(false);
  const [createPop, setCreatePop] = useState(false);
  const [addPop, setAddPop] = useState(false);
  const dotsPopRef = useRef<HTMLDivElement>(null);
  const createPopRef = useRef<HTMLDivElement>(null);
  const addPopRef = useRef<HTMLDivElement>(null);
  const [playlistName, setPlaylistName] = useState<string>("My Playlist");
  const [artist,setArtist]=useState<any>(null)

  console.log(artist)

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
  }, [props.artistId]); // Change to props.artistId
  
  

  const handleSuccessUpdate = (newName: string) => {
    setPlaylistName(newName); 
  };


  useEffect(() => {
    if (addPop || createPop) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [addPop, createPop]);

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
      props.setDottedId(props.id); // Set this one active
    } else {
      props.setDottedId(null); // Close when clicked again
    }
  };

  const handleClick = () => {
    const isActive = props.activeId === props.id;
    if (isActive) {
      props.setActiveId(null);
    } else {
      props.setActiveId(props.id);
    }

    if (props.onClick) {
      props.onClick();
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
            <YourPlaylistModal onClose={closeAddPop} />
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
            <Image src={IconEnum.CLOCK} alt={""} width={24} height={24} />
            {/* <span className={styles.text}>
              {(props.duration / 60).toFixed(2)}
            </span> */}
          </div>
          <Image
            className={`${styles.icon} ${styles.heart}`}
            src={liked ? IconEnum.FILLHEART : IconEnum.HEART}
            alt={""}
            width={24}
            height={24}
            onClick={toggleLike}
          />
          <div ref={dotsPopRef}>
            <Image
              className={styles.dots}
              src={props.icon === "bin" ? IconEnum.BIN : IconEnum.DOTS}
              alt={""}
              width={24}
              height={24}
              onClick={
                props.icon === "dots" ? dotsClick : () => console.log("delete")
              }
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
