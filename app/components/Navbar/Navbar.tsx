"use client";
import styles from "./Navbar.module.scss";
import NavbarItem from "../NavbarItem/NavbarItem";
import {usePathname} from "next/navigation";
import Input from "../Input/Input";
import {IconEnum} from "@/app/utils/Icon/Icon";
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {XButton} from "@/app/components/xButton/xButton";


const Navbar = () => {
    const navLinks = [
        {title: "Home", pathname: "/", key: "/"},
        {title: "Albums", pathname: "/albums", key: "/albums"},
        {title: "Artists", pathname: "/artists", key: "/artists"},
        {title: "Playlists", pathname: "/playlists", key: "/playlists"},
        {title: "Favorites", pathname: "/favorites", key: "favorites"},
    ];

    const [isOpen, setIsOpen] = useState(false);

    const burgerMenu = () => {
        setIsOpen((open: boolean) => !open);
    }

    const logOut = () => {
        pathName = '/auth/login';
    }

    let pathName = usePathname();
    console.log(pathName, "pathName");

    const burgerClass = [styles.items];

    if (isOpen) burgerClass.push(styles.isOpen);

    const wrapperclass = [styles.wrapper];

    if (isOpen) wrapperclass.push(styles.navOpen);

    console.log(isOpen)

    return (
        <div className={pathName === '/' ? styles.linearContainer : styles.container}>
            <div className={wrapperclass.join(' ')}>
                <div className={styles.nav}>
                    <Image
                        src={"/images/Logo.png"}
                        alt="Logo"
                        width={112}
                        height={44}
                        className={styles.navImg}
                    />

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
                    <Input/>
                    <Link href={pathName}><Image src={IconEnum.LOGOUT} className={styles.logOut} onClick={logOut}
                                                 alt={''} width={32} height={32}/></Link>
                </div>
                <div className={styles.burgerIcon} onClick={burgerMenu}><Image  src={isOpen ? IconEnum.DELETE : IconEnum.BURGER}  alt={''} width={44} height={44}/></div>
            </div>
            <ul className={`${styles.burger} ${burgerClass.join(" ")}`}>
                {navLinks.map((link, idx) => (
                    <NavbarItem
                        key={idx}
                        active={pathName === link.key}
                        pathname={link.pathname}
                        title={link.title}
                    />
                ))}
                <li className={styles.burger_logOut} onClick={logOut}><Image src={IconEnum.LOGOUT} alt={''} width={32}
                                                                             height={32}/></li>
            </ul>
        </div>
    );
};

export default Navbar;

