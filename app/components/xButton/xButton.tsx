import styles from "./xButton.module.scss";
import { IconEnum } from "@/app/utils/Icon/Icon";
import { useState } from "react";
import Image from "next/image";

interface Props {
  bg: boolean;
  closeModal: () => void;
}

export const XButton = (props: Props) => {
  const classes = [styles.x];

  if (!props.bg) classes.push(styles.bgNone);

  return (
    <button onClick={props.closeModal} className={classes.join(" ")}>
      <Image alt={""} src={IconEnum.DELETE} width={24} height={24} />
    </button>
  );
};
