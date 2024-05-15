"use client";

import React from "react";
import styles from "@/srcapp/[locale]/page.module.css";
import responsiveImage from "/public/responsive-web-design.png";
import { useTranslation } from "react-i18next";

const Advantages = () => {
  const { t } = useTranslation();

  return (
    <section id="advantages">
      <div className="container">
        <div className={styles.advantages_wrapper}>
          <div>
            <img
              src={responsiveImage.src}
              className={styles.adv_image}
              alt="Image"
            />
          </div>
          <div>
            <p className={styles.advantages_text_sm}>{t("responsive")}</p>
            <h2 className={styles.advantages_text_lg}>{t("resTitle")}</h2>
            <p className={styles.advantages_text}>{t("resText")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
