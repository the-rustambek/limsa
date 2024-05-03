"use client";

import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiSolidAlarm } from "react-icons/bi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import styles from "@/srcstyles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();

  return (
    <div className={`container ${styles.footer_wrapper}`}>
      <h2 className={styles.footer_title}>Contacts</h2>
      <div className={styles.contact_wrapper}>
        <div className={styles.contact_info}>
          <div className={styles.contact_item}>
            <FaLocationDot style={{ fontSize: "24px", color: "#6C2DBA" }} />
            <div>
              <h3 className={styles.item_title}>{t("footer:address")}</h3>
              <p className={styles.item_text}>
                Toshkent shahar Yunusobod tumani
              </p>
            </div>
          </div>
          <div className={styles.contact_item}>
            <FaPhoneVolume style={{ fontSize: "24px", color: "#6C2DBA" }} />
            <div>
              <h3 className={styles.item_title}>{t("footer:phoneNumber")}</h3>
              <p className={styles.item_text}> +998 (93) 513-88-33</p>
            </div>
          </div>
          <div className={styles.contact_item}>
            <BiSolidAlarm style={{ fontSize: "24px", color: "#6C2DBA" }} />
            <div>
              <h3 className={styles.item_title}>{t("footer:workHours")}</h3>
              <p className={styles.item_text}>9:00 18:00 Mon-Sat</p>
            </div>
          </div>
          <div className={styles.contact_item}>
            <IoShareSocialSharp
              style={{ fontSize: "24px", color: "#6C2DBA" }}
            />
            <div>
              <h3 className={styles.item_title}>{t("footer:social")}</h3>
              <div className={styles.social}>
                <Link
                  href={"https://www.linkedin.com/company/limsa-2021/"} aria-label="Linkedin"
                  target="_blank"
                >
                  <FaLinkedin
                    className={styles.social_item}
                    style={{ fontSize: "24px" }}
                  />
                </Link>
                <Link href={"https://instagram.com"} aria-label="Instagram" target="_blank">
                  <FaSquareInstagram
                    className={styles.social_item}
                    style={{ fontSize: "24px" }}
                  />
                </Link>
                <Link href={"https://t.me"} aria-label="Telegram" target="_blank">
                  <FaTelegram
                    className={styles.social_item}
                    style={{ fontSize: "24px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.643310333162!2d69.28572299999999!3d41.33836900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4e3088e9bf%3A0xdd9a89a16d423604!2sIT%20Time%20Academy!5e0!3m2!1sen!2s!4v1714640889918!5m2!1sen!2s"
          className={styles.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </div>
      <div className={styles.footer_bottom}>
        <Image
          src="/Limsa - Logotypecolor2.png"
          alt="Limsa Logo"
          width={150}
          height={35}
        />
        <p className={styles.copy_text}>{t("footer:copy")}</p>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
