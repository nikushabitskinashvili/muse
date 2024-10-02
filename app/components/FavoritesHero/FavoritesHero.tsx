"use client";
import { Button } from "../Button/Button";
import { IconEnum } from "../Icon/Icon";
import styles from "./FavoritesHero.module.scss";
import Image from "next/image";

interface Props {
  image: string;
  totalTracks: number;
  totalTime: number;
  id?: string;
}

export const FavoritesHero= (props: Props) => {
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
            <span className={styles.text}>Favorites</span>
            <h3 className={styles.playlistName}>Liked Music</h3>
            <span className={styles.about}>
              {props.totalTracks} tracks -
              <span className={styles.time}>
                <Image
                  className={styles.clock}
                  alt=""
                  src={IconEnum.CLOCK}
                  width={16}
                  height={16}
                />
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
