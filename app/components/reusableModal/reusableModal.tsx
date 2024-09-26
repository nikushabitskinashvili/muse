"use client";
import styles from "./reusableModal.module.scss";
import { Button } from "@/app/components/Button/Button";
import { XButton } from "@/app/components/xButton/xButton";
import { getClientCookie } from "@/app/Helpers/GetCookieValue";
import Axios from "./../../Helpers/Axios";
import React, { useState } from "react";
import { AUTH_COOKIE_KEY } from "@/app/constant";

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

  const handleUpdate = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string | undefined
  ) => {
    e.preventDefault();

    const token = getClientCookie(AUTH_COOKIE_KEY);

    const data = {
      name: inputText,
    };

    try {
      const response = await Axios(`/playlist/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data,
      });

      console.log("Update successful", response.data);
    } catch (error) {
      console.error("Error updating the playlist", error);
    }
  };


  const handleCreatePlaylist = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    const token = getClientCookie(AUTH_COOKIE_KEY);

    const data = {
      name: inputText,
    };

    try {
      const response = await Axios(`/playlist/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data,
      });

      console.log("Playlist create successful", response.data);
    } catch (error) {
      console.error("Error updating the playlist", error);
    }
  };
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
        {props.title === "Create Playlist" ? (
          <Button
            id={props.id}
            bg={"pink"}
            title={props.title}
            size={"huge"}
            onClick={(e) => handleCreatePlaylist(e)}
          />
        ) : (
          <Button
            id={props.id}
            bg={"pink"}
            title={props.title}
            size={"huge"}
            onClick={(e) => handleUpdate(e, props.id)}
          />
        )}
      </form>
    </div>
  );
};
