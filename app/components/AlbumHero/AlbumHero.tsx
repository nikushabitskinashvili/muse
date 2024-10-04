import styles from "./AlbumHero.module.scss";
import { Button } from "@/app/components/Button/Button";
import Image from "next/image";
import { IconEnum } from "../Icon/Icon";

interface Props {
  title?: string;
  img: string;
  total?: number;
}

export const AlbumHero = (props: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>{props.title}</h2>
      <div className={styles.main}>
        <Image
          className={styles.img}
          src={props.img}
          alt={""}
          width={265}
          height={398}
        />

        <div className={styles.about}>
          <div className={styles.aboutWrapper}>
            <h3 className={styles.h3}>
              {props.title}
              <span> Album</span>
            </h3>
            {/* <div className={styles.control}>
                            <span className={styles.total}>{`${props.total} listeners`}</span>
                        </div> */}
          </div>

          <div className={styles.images}>
            <Image
              src={IconEnum.PAUSE}
              alt="pause"
              width={24}
              height={24}
            ></Image>
            <Image
              src={IconEnum.SHUFFLE}
              alt="shuffle"
              width={24}
              height={24}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
