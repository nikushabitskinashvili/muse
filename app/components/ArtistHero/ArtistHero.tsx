import styles from "./ArtistHero.module.scss";

interface Props {
  artistName: string;
  artistBio: string;
  imgSrc: string;
  songsCount: number;
}

export const ArtistHero = (props: Props) => {
  const style = {
    backgroundImage: `url(${props.imgSrc})`,
  };


  return (
    <div style={style} className={styles.container}>
      <h2 className={styles.h}>The artist</h2>
      <div className={styles.artist}>
        <div>
            <span className={styles.artistName}>{props.artistName}</span>
            <span className={styles.artistBio}>{props.artistBio}</span>
        </div>
        <div>
          <span className={styles.songsCount}>{`${props.songsCount} total songs`}</span>
        </div>
      </div>
    </div>
  );
};
