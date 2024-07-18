"use client";

import React from "react";
import service1 from "/public/banner-redimensionat.jpg";
import mApps from "/public/mobile_apps.png";
import tgBots from "/public/telegram_bots.png";
import styles from "@/srcstyles/Service.module.css";
import { FaCheck } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Service = () => {
  const { t } = useTranslation();

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
          <h3 className={styles.service_card_title}>{t("websites")}</h3>
          <ul className={styles.service_text_list}>
            <li className={styles.list_item}>
              <div>
                <FaCheck style={{ fontSize: "20px", width: 20, height: 20 }} />
              </div>
              <p className={styles.service_card_text}>{t("webText1")}</p>
            </li>
            <li className={styles.list_item}>
              <div>
                <FaCheck style={{ fontSize: "20px", width: 20, height: 20 }} />
              </div>
              <p className={styles.service_card_text}>{t("webText2")}</p>
            </li>
            <li className={styles.list_item}>
              <div>
                <FaCheck style={{ fontSize: "20px", width: 20, height: 20 }} />
              </div>
              <p className={styles.service_card_text}>{t("webText3")}</p>
            </li>
            <li className={styles.list_item}>
              <div>
                <FaCheck style={{ fontSize: "20px", width: 20, height: 20 }} />
              </div>
              <p className={styles.service_card_text}>{t("webText4")}</p>
            </li>
          </ul>
          <Link href="#contact">
            <button className={styles.contact_button}>{t("call")}</button>
          </Link>
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
          <h3 className={styles.service_card_title}>{t("mobile")}</h3>
          <ul className={styles.service_text_list}>
            <li className={styles.list_item}>
              <div>
                <FaCheck style={{ fontSize: "20px" }} />
              </div>
              <p className={styles.service_card_text}>Android</p>
            </li>
            <li className={styles.list_item}>
              <div>
                <FaCheck style={{ fontSize: "20px" }} />
              </div>
              <p className={styles.service_card_text}>IOS</p>
            </li>
          </ul>
          <Link href="#contact">
            <button className={styles.contact_button}>{t("call")}</button>
          </Link>{" "}
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
          <h3 className={styles.service_card_title}>{t("telegram_bots")}</h3>
          <ul className={styles.service_text_list}>
            <li className={styles.list_item}>
              <div>
                <FaCheck style={{ fontSize: "20px" }} />
              </div>
              <p className={styles.service_card_text}>{t("botText1")}</p>
            </li>
            <li className={styles.list_item}>
              <div>
                <FaCheck style={{ fontSize: "20px" }} />
              </div>
              <p className={styles.service_card_text}>{t("botText2")}</p>
            </li>
            <li className={styles.list_item}>
              <div>
                <FaCheck style={{ fontSize: "20px" }} />
              </div>
              <p className={styles.service_card_text}>{t("botText3")}</p>
            </li>
            <li className={styles.list_item}>
              <div>
                <FaCheck style={{ fontSize: "20px" }} />
              </div>
              <p className={styles.service_card_text}>{t("botText4")}</p>
            </li>
          </ul>
          <Link href="#contact">
            <button className={styles.contact_button}>{t("call")}</button>
          </Link>{" "}
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
          <h3 className={styles.service_card_title}>{t("graphicDesign")}</h3>
          <ul className={styles.service_text_list}>
            <li className={styles.list_item}>
              <div>
                <FaCheck style={{ fontSize: "20px" }} />
              </div>
              <p className={styles.service_card_text}>{t("graphicDesText1")}</p>
            </li>
            <li className={styles.list_item}>
              <div>
                <FaCheck style={{ fontSize: "20px" }} />
              </div>
              <p className={styles.service_card_text}>{t("graphicDesText2")}</p>
            </li>
            <li className={styles.list_item}>
              <div>
                <FaCheck style={{ fontSize: "20px" }} />
              </div>
              <p className={styles.service_card_text}>{t("graphicDesText3")}</p>
            </li>
            <li className={styles.list_item}>
              <div>
                <FaCheck style={{ fontSize: "20px" }} />
              </div>
              <p className={styles.service_card_text}>{t("graphicDesText4")}</p>
            </li>
          </ul>
          <Link href="#contact">
            <button className={styles.contact_button}>{t("call")}</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Service;
