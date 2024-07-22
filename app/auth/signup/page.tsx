"use client";
import { SetStateAction, useState } from "react";
import AuthButton from "@/app/components/AuthButton/AuthButton";
import AuthInput from "@/app/components/AuthInput/AuthInput";
import AuthTitle from "@/app/components/AuthTitle/AuthTitle";
import Link from "next/link";
import styles from "./SingUp.module.scss";

export default function SignUp() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    emailOrUsername: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleEmailOrUsernameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmailOrUsername(e.target.value);
    setErrors({ ...errors, emailOrUsername: "" });
  };

  const handleNewPasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setNewPassword(e.target.value);
    setErrors({ ...errors, newPassword: "" });
  };

  const handleConfirmPasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setConfirmPassword(e.target.value);
    setErrors({ ...errors, confirmPassword: "" });
  };

  const validateForm = () => {
    let valid = true;
    let errors = { emailOrUsername: "", newPassword: "", confirmPassword: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailOrUsername)) {
      errors.emailOrUsername =
        "Check for any missing characters (like @ or .com) or extra spaces.";
      valid = false;
    }

    if (newPassword.length < 8) {
      errors.newPassword = "Password must be at least 8 characters long";
      valid = false;
    }

    if (newPassword !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Email or Username:", emailOrUsername);
      console.log("New Password:", newPassword);
      console.log("Confirm Password:", confirmPassword);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className={styles.rightBlock}>
        <AuthTitle title="Sign up" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputDiv}>
            <AuthInput
              placeholder="Enter email or user name"
              type="text"
              value={emailOrUsername}
              onChange={handleEmailOrUsernameChange}
            />
            {errors.emailOrUsername !== "" && (
              <p className={styles.error}>{errors.emailOrUsername}</p>
            )}
          </div>
          <div className={styles.inputDiv}>
            <AuthInput
              placeholder="New password"
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
            {errors.newPassword !== "" && (
              <p className={styles.error}>{errors.newPassword}</p>
            )}
          </div>
          <div className={styles.inputDiv}>
            <AuthInput
              placeholder="Confirm password"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {errors.confirmPassword !== "" && (
              <p className={styles.error}>{errors.confirmPassword}</p>
            )}
          </div>
          <AuthButton
            bgColor="#E82567"
            titleColor="#FFFFFF"
            buttonTitle="Sign up"
            type="submit"
          />
        </form>
        <p className={styles.text}>
          Don’t you have an account?
          <Link className={styles.linkTag} href={"/auth/login"}>
            Sign In
          </Link>
        </p>
      </div>
      <div className={styles.secondDiv}>
        <h2>Welcome!</h2>
        <p>To keep connected with us please login with your personal info</p>
        <Link href={"/auth/login"}>
          <AuthButton
            bgColor="#FFFFFF"
            titleColor="#050505"
            buttonTitle="Log in"
            type=""
          />
        </Link>
      </div>
    </div>
  );
}
