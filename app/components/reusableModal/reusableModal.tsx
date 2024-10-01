"use client";
import styles from "./reusableModal.module.scss";
import { Button } from "@/app/components/Button/Button";
import { XButton } from "@/app/components/xButton/xButton";
import { getClientCookie } from "@/app/Helpers/GetCookieValue";
import Axios from "./../../Helpers/Axios";
import React, { useState, useEffect } from "react";
import { AUTH_COOKIE_KEY } from "@/app/constant";

interface Props {
  title: string;
  label: string;
  placeholder?: string;
  onClose?: () => void;
  closeModal?: () => void;
  id?: string;
  text?: string;
  delete?: boolean;
  onSuccessUpdate?: (newName: string) => void;
}

export const ReusableModal = (props: Props) => {
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    if (props.placeholder) {
      setInputText(props.placeholder); 
    }
  }, [props.placeholder]);

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string | undefined
  ) => {
    e.preventDefault();

    const cookie = getClientCookie(AUTH_COOKIE_KEY);

    try {
      const response = await Axios(`/playlist/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      });

      if (response.status === 200) {
        console.log(`Playlist with ID ${id} was successfully deleted.`);
        if (props.onClose) props.onClose();
      } else {
        console.error("Failed to delete playlist:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting playlist:", error);
    }
  };

  const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const token = getClientCookie(AUTH_COOKIE_KEY);

    const data = {
      name: inputText,
    };

    try {
      const response = await Axios(`/playlist/${props.id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data,
      });

      if (response.status === 200) {
        console.log("Update successful", response.data);

        if (props.onSuccessUpdate) {
          props.onSuccessUpdate(inputText); 
        }

        if (props.closeModal) {
          props.closeModal(); 
        }
      }
    } catch (error) {
      console.error("Error updating the playlist", error);
    }
  };

  return (
    <div className={styles.container}>
      {!props.delete && (
        <div className={styles.head}>
          <span className={styles.title}>{props.title}</span>
          <XButton onClick={props.closeModal} bg={true} />
        </div>
      )}

      {props.delete && (
        <div className={styles.deleteContainer}>
          <h4 className={styles.deleteTitle}>Delete playlist?</h4>
          <p className={styles.deleteText}>{props.text}</p>
          <div style={{ display: "flex", width: "100%" }}>
            <Button
              id={props.id}
              bg={"white"}
              title={"Cancel"}
              size={"huge"}
              onClick={props.closeModal}
            />
            <Button
              id={props.id}
              bg={"pink"}
              title={"Delete"}
              size={"huge"}
              onClick={(e) => handleDelete(e, props.id)}
            />
          </div>
        </div>
      )}

      {!props.delete && (
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
            id={props.id}
            bg={"pink"}
            title={props.title}
            size={"huge"}
            onClick={handleUpdate}
          />
        </form>
      )}
    </div>
  );
};
