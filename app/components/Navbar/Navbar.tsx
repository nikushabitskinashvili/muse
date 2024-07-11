'use client'
import Styles from "./Navbar.module.scss";
import NavbarItem from '../NavbarItem/NavbarItem';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const navLinks = [
        { title: "Home", pathname: "/" , key:"/"},
        { title: "Albums", pathname: "/albums", key:"/albums" },
        { title: "Artists", pathname: "/artists", key:"/artists" },
        { title: "Playlists", pathname: "/playlists", key:"/playlists" },
        { title: "Favorites", pathname: "/favorites", key:"favorites" },
    ];

    const pathName = usePathname()
    console.log(pathName,'pathName')
    

    return (
        <div className={Styles.container}>
            <ul className={Styles.nav}>
                {navLinks.map((link,idx) => (
                    <NavbarItem key={idx} active={pathName === link.key} pathname={link.pathname} title={link.title} />
                ))}
            </ul>
        </div>
    );
};

export default Navbar;