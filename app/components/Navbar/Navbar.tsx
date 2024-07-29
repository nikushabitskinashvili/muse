"use client";
import styles from "./Navbar.module.scss";
import NavbarItem from "../NavbarItem/NavbarItem";
import { usePathname } from "next/navigation";
import Input from "../Input/Input";

const Navbar = () => {
  const navLinks = [
    { title: "Home", pathname: "/", key: "/" },
    { title: "Albums", pathname: "/albums", key: "/albums" },
    { title: "Artists", pathname: "/artists", key: "/artists" },
    { title: "Playlists", pathname: "/playlists", key: "/playlists" },
    { title: "Favorites", pathname: "/favorites", key: "favorites" },
  ];

  const pathName = usePathname();
  console.log(pathName, "pathName");

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <img
            src={"/images/Logo.png"}
            alt="Logo"
            width={112}
            height={44}
            className={styles.navImg}
          />
          <ul>
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
        <Input />
      </div>
    </div>
  );
};

export default Navbar;
