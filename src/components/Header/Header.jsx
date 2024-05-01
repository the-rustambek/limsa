import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/srcstyles/Header.module.css";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  return (
    <div className="container">
      <div className={styles.header_wrapper}>
        <Link href={"/"}>
          <Image
            src="/Limsa - Logotype.png"
            alt="Limsa Logo"
            width={150}
            height={35}
          />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <li className="">
              <Link href={"#about"} className={styles.mav_link}>
                About
              </Link>
            </li>
            <li className="">
              <Link href={"#projects"} className={styles.mav_link}>
                Projects
              </Link>
            </li>
            <li className="">
              <Link href={"#services"} className={styles.mav_link}>
                Services
              </Link>
            </li>
            <li className="">
              <Link href={"#contact"} className={styles.mav_link}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.menu_icon}>
          <HiMenu
            style={{ fontSize: 24, color: "#FFFFFF", crsor: "pointer" }}
          />
        </div>
        <div className={styles.actions}>
          <select name="language" id="#lang" className={styles.select}>
            <option value="uz" style={{ cursor: "pointer" }}>
              Uz
            </option>
            <option value="ru" style={{ cursor: "pointer" }}>
              Ru
            </option>
            <option value="eng" style={{ cursor: "pointer" }}>
              Eng
            </option>
          </select>
          <button className={styles.header_button}>Contact with us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
