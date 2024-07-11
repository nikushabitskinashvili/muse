'use client'
import React, { useState } from 'react';
import Styles from "./Navbar.module.scss";
import Link from 'next/link';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Albums", href: "/albums" },
    { title: "Artists", href: "/artists" },
    { title: "Playlists", href: "/playlists" },
    { title: "Favorites", href: "/favorites" },
  ];

  const handleClick = (path: React.SetStateAction<string>) => {
    setActiveLink(path);
  };

  return (
    <div className={Styles.container}>
      <ul className={Styles.nav}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href}
              onClick={() => handleClick(link.href)}
              className={activeLink === link.href ? Styles.active : ''}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
