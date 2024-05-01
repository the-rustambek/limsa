import React from "react";
import service1 from "/public/banner-redimensionat.jpg";
import mApps from "/public/mobile_apps.png";
import tgBots from "/public/telegram_bots.png";
import Image from "next/image";
import styles from "@/srcstyles/Service.module.css";
import { FaCheck } from "react-icons/fa6";

const Service = () => {
  return (
    <div className={styles.service_container}>
      <div className={styles.service_card}>
        <div className={styles.image_container}>
          <img
            src={service1.src}
            className={styles.image}
            style={{ borderRadius: "8px" }}
            alt="123"
          />
        </div>
        <div>
          <h3 className={styles.service_card_title}>Websites</h3>
          <ul className={styles.service_text_list}>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Landing page marketing va boshqa maqsadlar uchun
              </p>
            </li>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Ta'lim platformalari to'lov tizimlarini o'z ichiga olgan ta'lim
                platformasi
              </p>
            </li>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Internet magazinlar + to'lov tizimlari
              </p>
            </li>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Web dasturlar, CRM, LMS tizimlari
              </p>
            </li>
          </ul>
          <button className={styles.contact_button}>Call now</button>
        </div>
      </div>
      <div className={styles.service_card}>
        <div className={styles.image_container}>
          <img
            src={mApps.src}
            className={styles.image}
            style={{ borderRadius: "8px" }}
            alt="123"
          />
        </div>
        <div>
          <h3 className={styles.service_card_title}>Mobile apps</h3>
          <ul className={styles.service_text_list}>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Landing page marketing va boshqa maqsadlar uchun
              </p>
            </li>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Ta'lim platformalari to'lov tizimlarini o'z ichiga olgan ta'lim
                platformasi
              </p>
            </li>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Internet magazinlar + to'lov tizimlari
              </p>
            </li>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Web dasturlar, CRM, LMS tizimlari
              </p>
            </li>
          </ul>
          <button className={styles.contact_button}>Call now</button>
        </div>
      </div>
      <div className={styles.service_card}>
        <div className={styles.image_container}>
          <img
            src={tgBots.src}
            className={styles.image}
            style={{ borderRadius: "8px" }}
            alt="123"
          />
        </div>
        <div>
          <h3 className={styles.service_card_title}>Telegram bots</h3>
          <ul className={styles.service_text_list}>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Landing page marketing va boshqa maqsadlar uchun
              </p>
            </li>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Ta'lim platformalari to'lov tizimlarini o'z ichiga olgan ta'lim
                platformasi
              </p>
            </li>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Internet magazinlar + to'lov tizimlari
              </p>
            </li>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Web dasturlar, CRM, LMS tizimlari
              </p>
            </li>
          </ul>
          <button className={styles.contact_button}>Call now</button>
        </div>
      </div>
      <div className={styles.service_card}>
        <div className={styles.image_container}>
          <img
            src={service1.src}
            className={styles.image}
            style={{ borderRadius: "8px" }}
            alt="123"
          />
        </div>
        <div>
          <h3 className={styles.service_card_title}>Graphic degign</h3>
          <ul className={styles.service_text_list}>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Landing page marketing va boshqa maqsadlar uchun
              </p>
            </li>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Ta'lim platformalari to'lov tizimlarini o'z ichiga olgan ta'lim
                platformasi
              </p>
            </li>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Internet magazinlar + to'lov tizimlari
              </p>
            </li>
            <li className={styles.list_item}>
              <FaCheck style={{ fontSize: "20px" }} />
              <p className={styles.service_card_text}>
                Web dasturlar, CRM, LMS tizimlari
              </p>
            </li>
          </ul>
          <button className={styles.contact_button}>Call now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
