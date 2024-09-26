import { cookies } from "next/headers";
import styles from "./ArtistHero.module.scss";

interface Props {
  artistName: string;
  artistBio: string;
  imgSrc: string;
  monthlyListeners: number;
}

export const ArtistHero = (props: Props) => {
  const style = {
    backgroundImage: `url(${props.imgSrc})`,
  };

  return (
    <div style={style} className={styles.container}>
      <h2 className={styles.h}>The artist</h2>
      <div className={styles.artist}>
        <div className={styles.artistInfoWrap}>
          <span className={styles.artistName}>{props.artistName}</span>
          <span className={styles.artistBio}>
            {props.artistBio} 
          </span>
        </div>
        <div>
          <span
            className={styles.monthlyListeners}
          >{`${props.monthlyListeners} monthly listeners`}</span>
        </div>
      </div>
    </div>
  );
};
