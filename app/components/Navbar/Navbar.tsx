import Link from "next/link";
import styles from "./Navbar.module.scss";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className={styles.container}>
            <ul className={styles.nav}>
                <li >
                    <Link className={pathname === "/" ? styles.active : ''} href={'/'}>
                        Home
                    </Link>
                </li>
                <li >
                    <Link className={pathname === "/albom" ? styles.active : ''} href={'/albom'}>
                        Albums
                    </Link>
                </li>
                <li>
                    <Link  className={pathname === "/artists" ? styles.active : ''} href={'/artists'}>
                        Artists
                    </Link>
                </li>
                <li >
                    <Link className={pathname === "/playlist" ? styles.active : ''} href={'/playlist'}>
                        Playlists
                    </Link>
                </li>
                <li >
                    <Link className={pathname === "/favourite" ? styles.active : ''} href={'/favourite'}>
                        Favourites
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
