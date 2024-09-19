"use client";
import styles from "./PlaylistItem.module.scss";
import { IconEnum } from "@/app/components/Icon/Icon";

import React, { useEffect, useState, useRef, Dispatch, SetStateAction } from "react";

import Image from "next/image";
import { DotsPop } from "@/app/components/dotsPop/dotsPop";
import { ReusableModal } from "@/app/components/reusableModal/reusableModal";
import { YourPlaylistModal } from "@/app/components/yourPlaylistModal/yourPlaylistModal";

import { PlaylistItemProps } from "@/app/Interfaces/Interfaces";

export const PlaylistItem = (props: PlaylistItemProps) => {
  const [dotsPop, setDotsPop] = useState(false);
  const [liked, setLiked] = useState(false);
  const [createPop, setCreatePop] = useState(false);
  const [addPop, setAddPop] = useState(false);
  const createPopRef = useRef<HTMLDivElement>(null);
  const addPopRef = useRef<HTMLDivElement>(null);

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

  const closeDotsPop = () => {
    setDotsPop(!dotsPop);
  };

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

  const isDotted = props.dottedId === props.id;

  const dotsClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDotsPop(!dotsPop);
    if (dotsPop)
      isDotted ? props.setDottedId(null) : props.setDottedId(props.id);
  };

  const clickOnPop = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const isActive = props.activeId === props.id;
  const icon = props.icon === "bin" ? IconEnum.BIN : IconEnum.DOTS;

  const handleClick = () => {
    isActive ? props.setActiveId(null) : props.setActiveId(props.id);

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
  if (isActive) classNames.push(styles.active);

  return (
    <>
      {addPop && (
        <div className={styles.popBackground} onClick={closeAddPop}>
          <div
            ref={addPopRef}
            onClick={clickOnPop}
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
            onClick={clickOnPop}
            className={styles.popContainer}
          >
            <ReusableModal
              title={"Create Playlist"}
              label={"Name"}
              onClose={closeCreatePop}
              placeholder={"Playlist name"}
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
              src={props.image}
              alt={`album`}
              width={56}
              height={56}
            />
          </div>
          <div className={styles.text}>
            <span>{`${props.title} - ${props.name}`}</span>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.time}>
            <Image src={IconEnum.CLOCK} alt={""} width={24} height={24} />
            <span className={styles.text}>
              {(props.duration / 60).toFixed(2)}
            </span>
          </div>
          <Image
            className={`${styles.icon} ${styles.heart}`}
            src={liked ? IconEnum.FILLHEART : IconEnum.HEART}
            alt={""}
            width={24}
            height={24}
            onClick={toggleLike}
          />
          <Image
            className={styles.dots}
            src={icon}
            alt={""}
            width={24}
            height={24}
            onClick={dotsClick}
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
    </>
  );


    
};
