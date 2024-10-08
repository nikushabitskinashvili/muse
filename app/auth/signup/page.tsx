"use client";
import { SetStateAction, useState } from "react";
import AuthButton from "@/app/components/AuthButton/AuthButton";
import AuthInput from "@/app/components/AuthInput/AuthInput";
import AuthTitle from "@/app/components/AuthTitle/AuthTitle";
import Link from "next/link";
import styles from "./SingUp.module.scss";
import Axios from "@/app/Helpers/Axios";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    emailOrUsername: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (validateForm()) {
      try {
        const response = await Axios.post("/user", {
          email: emailOrUsername,
          password: newPassword,
          confirmPassword,
        });

        if (response.status === 201) {
          setSuccessMessage(
            "Account created successfully! You can now log in."
          );
          setErrorMessage(null);
          router.push("/auth/login");
        } else {
          throw new Error("Something went wrong. Please try again.");
        }
      } catch (error: any) {
        setErrorMessage(
          error.response?.data?.message ||
            "An error occurred. Please try again."
        );
        setSuccessMessage(null);
      }
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className={styles.rightBlock}>
        <AuthTitle title="Sign up" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputDiv}>
            <AuthInput
              placeholder="Enter email or username"
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
              placeholder="New password"
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
            {errors.newPassword && (
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
            {errors.confirmPassword && (
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

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        {successMessage && <p className={styles.success}>{successMessage}</p>}

        <p className={styles.text}>
          Already have an account?
          <Link className={styles.linkTag} href={"/auth/login"}>
            Sign In
          </Link>
        </p>
      </div>
      <div className={styles.secondDiv}>
        <h2>Welcome!</h2>
        <p>To keep connected with us, please login with your personal info</p>
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
