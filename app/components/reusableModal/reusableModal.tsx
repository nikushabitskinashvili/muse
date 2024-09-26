"use client";
import styles from "./reusableModal.module.scss";
import { Button } from "@/app/components/Button/Button";
import { XButton } from "@/app/components/xButton/xButton";
import React, { useState } from "react";

interface Props {
  title: string;
  label: string;
  placeholder?: string;
  onClose?: () => void;
  closeModal?: () => void;
  id?: string;
}

export const ReusableModal = (props: Props) => {
  const [inputText, setInputText] = useState<string>("");

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span className={styles.title}>{props.title}</span>
        <XButton onClick={props.onClose} bg={true} />
      </div>
      <form className={styles.form}>
        <div className={styles.inputCont}>
          <label className={styles.label} htmlFor={props.label}>
            {props.label}
          </label>
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className={styles.input}
            type="text"
            id={props.label}
            placeholder={props.placeholder}
          />
        </div>

        <Button
          name={inputText}
          id={props.id}
          bg={"pink"}
          title={props.title}
          size={"huge"}
        />
      </form>
    </div>
  );
};
