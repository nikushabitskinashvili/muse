"use client";
import styles from "./PlaylistHero.module.scss";
import { IconEnum } from "@/app/utils/Icon/Icon";
import { Button } from "@/app/components/Button/Button";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Props {
  image: string;
  playlistName: string;
  totalTracks: number;
  totalTime: number;
  openModal: () => void;
}

export const PlaylistHero = (props: Props) => {
  let time;
  const hours = Math.floor(props.totalTime / 3600);
  const minutes = Math.floor((props.totalTime % 3600) / 60);
  const seconds = props.totalTime % 60;

  if (props.totalTime > 3600) {
    time = `${hours}:${minutes}:${seconds}`;
  } else {
    time = `${minutes}:${seconds}`;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.h2}>Summer Vibe</h2>
        <div className={styles.icons}>
          <Image
            className={styles.icon}
            src={IconEnum.PEN}
            alt=""
            width={24}
            height={24}
            onClick={props.openModal}
          />
          <Image
            className={styles.icon}
            src={IconEnum.BIN}
            alt=""
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className={styles.main}>
        <Image
          className={styles.image}
          alt=""
          src={props.image}
          width={435}
          height={394}
        />
        <div className={styles.control}>
          <div className={styles.desc}>
            <span className={styles.text}>Playlist</span>
            <h3 className={styles.playlistName}>{props.playlistName}</h3>
            <span className={styles.about}>
              {props.totalTracks} tracks -{" "}
              <span className={styles.time}>
                <Image
                  className={styles.clock}
                  alt=""
                  src={IconEnum.CLOCK}
                  width={16}
                  height={16}
                />{" "}
                {time}
              </span>
            </span>
          </div>
          <div className={styles.buttons}>
            <Image
              className={styles.pause}
              src={IconEnum.PAUSE}
              alt=""
              width={40}
              height={40}
            />
            <Button
              title={"shuffle"}
              bg={"pink"}
              icon={"SHUFFLE"}
              hoverIcon={"SHUFFLE"}
              activeIcon={"SHUFFLE"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
