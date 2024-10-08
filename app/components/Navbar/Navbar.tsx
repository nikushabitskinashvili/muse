"use client";
import styles from "./Navbar.module.scss";
import NavbarItem from "../NavbarItem/NavbarItem";
import { usePathname } from "next/navigation";
import Input from "../Input/Input";
import { IconEnum } from "@/app/utils/Icon/Icon";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { handleLogout } from "@/app/scripts/Logout";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const navLinks = [
    { title: "Home", pathname: "/", key: "/" },
    { title: "Albums", pathname: "/albums", key: "/albums" },
    { title: "Artists", pathname: "/artists", key: "/artists" },
    { title: "Playlists", pathname: "/playlists", key: "/playlists" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const burgerMenu = () => {
    setIsOpen((open: boolean) => !open);
  };

  const closeBurger = () => {
    setIsOpen(false);
  };

  let pathName = usePathname();
  console.log(pathName, "pathName");

  const logOut = () => {
    handleLogout();
    router.refresh();
  };

  const burgerClass = [styles.items];

  if (isOpen) burgerClass.push(styles.isOpen);

  const wrapperclass = [styles.wrapper];

  if (isOpen) wrapperclass.push(styles.navOpen);

  return (
    <div
      className={pathName === "/" ? styles.linearContainer : styles.container}
    >
      <div className={wrapperclass.join(" ")}>
        <div className={styles.nav}>
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              width={112}
              height={44}
              className={styles.navImg}
            />
          </Link>

          <Link href={"/"}>
            <Image
              src={"/icons/Muse-tablet.svg"}
              alt="Logo"
              width={74}
              height={29}
              className={styles.museTablet}
            />
          </Link>

          <Link href={"/"}>
            <Image
              src={"/icons/Muse-phone.svg"}
              alt="Logo"
              width={55}
              height={22}
              className={styles.musePhone}
            />
          </Link>

          <ul className={`${styles.hiden} ${styles.items}`}>
            {navLinks.map((link, idx) => (
              <NavbarItem
                key={idx}
                active={pathName === link.key}
                pathname={link.pathname}
                title={link.title}
              />
            ))}
          </ul>
        </div>
        <div className={styles.search_log}>
          <Input />
          <Image
            src={IconEnum.LOGOUT}
            className={styles.logOut}
            style={{ cursor: "pointer" }}
            onClick={logOut}
            alt={""}
            width={32}
            height={32}
          />
        </div>
        <div className={styles.burgerIcon} onClick={burgerMenu}>
          <Image
            className={styles.burgerIcon}
            src={isOpen ? IconEnum.DELETE : IconEnum.BURGER}
            alt={""}
            width={44}
            height={44}
          />
        </div>
      </div>
      <ul className={`${styles.burger} ${burgerClass.join(" ")}`}>
        {navLinks.map((link, idx) => (
          <NavbarItem
            key={idx}
            active={pathName === link.key}
            pathname={link.pathname}
            title={link.title}
            onClose={closeBurger}
          />
        ))}
        <li>
          <Image
            style={{ cursor: "pointer" }}
            src={IconEnum.LOGOUT}
            onClick={logOut}
            alt={""}
            width={32}
            height={32}
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
