import leftArrow from "../../../public/images/left-arrow.svg";
import rightArrow from "../../../public/images/Arrow.svg";
import Image from "next/image";
import styles from "./SwiperTitle.module.scss";

export const SwiperTitle = ({
  title,
  swiper,
}: {
  title: string;
  swiper: any;
}) => {
  return (
    <div className={styles.swiperTitleWrapper}>
      <h4>{title}</h4>
      <div>
        <Image
          src={leftArrow}
          alt="arrow"
          width={32}
          height={32}
          onClick={() => swiper && swiper.slidePrev()}
        />
        <Image
          src={rightArrow}
          alt="arrow"
          width={32}
          height={32}
          onClick={() => swiper && swiper.slideNext()}
        />
      </div>
    </div>
  );
};
