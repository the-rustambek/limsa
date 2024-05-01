import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiSolidAlarm } from "react-icons/bi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import styles from "@/srcstyles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={`container ${styles.footer_wrapper}`}>
      <h2 className={styles.footer_title}>Contacts</h2>
      <div className={styles.contact_wrapper}>
        <div className={styles.contact_info}>
          <div className={styles.contact_item}>
            <FaLocationDot style={{ fontSize: "24px", color: "#6C2DBA" }} />
            <div>
              <h3 className={styles.item_title}>Address</h3>
              <p className={styles.item_text}>
                Toshkent shahar Yunusobod tumani
              </p>
            </div>
          </div>
          <div className={styles.contact_item}>
            <FaPhoneVolume style={{ fontSize: "24px", color: "#6C2DBA" }} />
            <div>
              <h3 className={styles.item_title}>Phone number</h3>
              <p className={styles.item_text}>+998 71 000 00 00</p>
            </div>
          </div>
          <div className={styles.contact_item}>
            <BiSolidAlarm style={{ fontSize: "24px", color: "#6C2DBA" }} />
            <div>
              <h3 className={styles.item_title}>Working hours</h3>
              <p className={styles.item_text}>9:00 18:00 Mon-Sat</p>
            </div>
          </div>
          <div className={styles.contact_item}>
            <IoShareSocialSharp
              style={{ fontSize: "24px", color: "#6C2DBA" }}
            />
            <div>
              <h3 className={styles.item_title}>Social accounts</h3>
              <div className={styles.social}>
                <Link href={"https://facebook.com"}>
                  <FaFacebook
                    className={styles.social_item}
                    style={{ fontSize: "24px" }}
                  />
                </Link>
                <Link href={"https://instagram.com"}>
                  <FaSquareInstagram
                    className={styles.social_item}
                    style={{ fontSize: "24px" }}
                  />
                </Link>
                <Link href={"https://t.me"}>
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
          src="https://yandex.com/map-widget/v1/?feedback=object%2Fadd&feedback-context=map.context&ll=69.285680%2C41.338380&z=20.06"
          className={styles.map}
          frameBorder={0}
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className={styles.footer_bottom}>
        <Image
          src="/Limsa - Logotypecolor2.png"
          alt="Limsa Logo"
          width={150}
          height={35}
        />
        <p className={styles.copy_text}>© 2024 Limsa. All rights reserved.</p>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
