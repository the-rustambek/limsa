"use client";

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/srcstyles/Header.module.css";
import { HiMenu } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import i18nConfig from "@/srci18nConfig";
import { Drawer } from 'antd';

const Header = () => {
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    const newLocale = e.target.value;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

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
            <li className={styles.nav_list_item}>
              <Link href={"#about"} className={styles.nav_link}>
                {t(`header:about`)}
              </Link>
            </li>
            <li className={styles.nav_list_item}>
              <Link href={"#projects"} className={styles.nav_link}>
                {t("header:projects")}
              </Link>
            </li>
            <li className={styles.nav_list_item}>
              <Link href={"#services"} className={styles.nav_link}>
                {t("header:services")}
              </Link>
            </li>
            <li className={styles.nav_list_item}>
              <Link href={"#contact"} className={styles.nav_link}>
                {t("header:contact")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <select
            onChange={handleChange}
            value={currentLocale}
            className={styles.select}
          >
            <option value="uz" style={{ cursor: "pointer" }}>
              Uz
            </option>
            <option value="ru" style={{ cursor: "pointer" }}>
              Ru
            </option>
            <option value="en" style={{ cursor: "pointer" }}>
              Eng
            </option>
          </select>
          <Link href={"tel:+998935138813"}>
            <button className={styles.header_button}>
              +998 (93) 513-88-33
            </button>
          </Link>
          <div className={styles.menu_icon} onClick={showDrawer}>
            <HiMenu
              style={{ fontSize: 24, color: "#FFFFFF", crsor: "pointer" }}
            />
          </div>
        </div>
        <Drawer title="" onClose={onClose} open={open}>
          <ul className={styles.nav_listR}>
            <li className={styles.nav_list_itemR}>
              <Link
                href={"#about"}
                className={styles.nav_linkR}
                onClick={() => setOpen(false)}
              >
                {t(`header:about`)}
              </Link>
            </li>
            <li className={styles.nav_list_itemR}>
              <Link
                href={"#projects"}
                className={styles.nav_linkR}
                onClick={() => setOpen(false)}
              >
                {t("header:projects")}
              </Link>
            </li>
            <li className={styles.nav_list_itemR}>
              <Link
                href={"#services"}
                className={styles.nav_linkR}
                onClick={() => setOpen(false)}
              >
                {t("header:services")}
              </Link>
            </li>
            <li className={styles.nav_list_itemR}>
              <Link
                href={"#contact"}
                className={styles.nav_linkR}
                onClick={() => setOpen(false)}
              >
                {t("header:contact")}
              </Link>
            </li>
          </ul>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <select
              onChange={handleChange}
              value={currentLocale}
              className={styles.selectR}
            >
              <option value="uz" style={{ cursor: "pointer" }}>
                Uz
              </option>
              <option value="ru" style={{ cursor: "pointer" }}>
                Ru
              </option>
              <option value="en" style={{ cursor: "pointer" }}>
                Eng
              </option>
            </select>
          </div>
          <div style={{display:"flex", justifyContent:"center"}}>
            <Link href={"tel:+998935138813"}>
            <button className={styles.header_buttonR}>
              +998 (93) 513-88-33
            </button>
          </Link>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
