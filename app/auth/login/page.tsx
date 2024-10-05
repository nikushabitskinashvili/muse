"use client";
import { SetStateAction, useEffect, useState } from "react";
import AuthButton from "@/app/components/AuthButton/AuthButton";
import AuthInput from "@/app/components/AuthInput/AuthInput";
import styles from "./LoginPage.module.scss";
import AuthTitle from "@/app/components/AuthTitle/AuthTitle";
import Link from "next/link";
import { handleLogin } from "@/app/scripts/Login";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    emailOrUsername: "",
    password: "",
    general: "",
  });

  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (error === "blocked") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: "Your account has been blocked. Please contact support.",
      }));
    }
  }, [error]);

  const handleEmailOrUsernameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmailOrUsername(e.target.value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      emailOrUsername: "",
      general: "",
    }));
  };

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      password: "",
      general: "",
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const result = await handleLogin(emailOrUsername, password);

    if (result.success) {
      window.location.reload();
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        general:
          result.errorMessage || "An error occurred. Please try again later.",
      }));
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className={styles.secondDiv}>
        <h2>Welcome!</h2>
        <p>To keep connected with us please login with your personal info</p>
        <Link href={"/auth/signup"}>
          <AuthButton
            bgColor="#FFFFFF"
            titleColor="#050505"
            buttonTitle="Sign up"
            type=""
          />
        </Link>
      </div>
      <div className={styles.rightBlock}>
        <AuthTitle title="Log in" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputDiv}>
            <AuthInput
              placeholder="Enter email or user name"
              type="text"
              value={emailOrUsername}
              onChange={handleEmailOrUsernameChange}
            />
            {errors.emailOrUsername && (
              <p className={styles.error}>{errors.emailOrUsername}</p>
            )}
          </div>
          <div className={styles.inputDiv}>
            <AuthInput
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password !== "" && (
              <p className={styles.error}>{errors.password}</p>
            )}
          </div>
          {errors.general && <p className={styles.error}>{errors.general}</p>}
          <AuthButton
            bgColor="#E82567"
            titleColor="#FFFFFF"
            buttonTitle="Log in"
            type="submit"
          />
        </form>
        <p className={styles.text}>
          Don’t you have an account?
          <Link className={styles.linkTag} href={"/auth/signup"}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
