"use client";

import React from "react";
import IntroText from "@/srccomponents/Ui/IntroText";
import ModalForm from "@/srccomponents/Ui/Modal";
import { useTranslation } from "react-i18next";
import styles from "@/srcapp/[locale]/page.module.css";
import abBuild from "/public/abBuild.jpg";
import avtozoomWeb from "/public/avtozoomWebsite.jpg";
import homekit from "/public/homekit.jpg";
import itTime from "/public/itTime.jpg";
import loyalWebsite from "/public/loyalWebsite.jpg";
import noits from "/public/noits.jpg";
import propartnyor from "/public/propartnyor.jpg";
import zamonTour from "/public/zamonTour.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className={`container ${styles.about_wrapper}`}>
        <div className={styles.texts}>
          <IntroText />
          <article className={styles.article}>{t("text")}</article>
          <ModalForm />
        </div>
        <div className={styles.images_container}>
          <div className={styles.image_column}>
            <div className={styles.image_wrapper1}>
              <img
                src={abBuild.src}
                style={{ width: 180, border: "1px solid #6C2DBA" }}
                alt="Image"
              />
            </div>
            <div className={styles.image_wrapper1}>
              <img
                src={homekit.src}
                style={{ width: 200, border: "1px solid #6C2DBA" }}
                alt="Image"
              />
            </div>
            <div className={styles.image_wrapper1}>
              <img
                src={itTime.src}
                style={{ width: 180, border: "1px solid #6C2DBA" }}
                alt="Image"
              />
            </div>
          </div>
          <div className={styles.image_column}>
            <div className={styles.image_wrapper2}>
              <img
                src={loyalWebsite.src}
                style={{ width: 200, border: "1px solid #6C2DBA" }}
                alt="Image"
              />
            </div>
            <div className={styles.image_wrapper2}>
              <img
                src={avtozoomWeb.src}
                style={{ width: 200, border: "1px solid #6C2DBA" }}
                alt="Image"
              />
            </div>
            <div className={styles.image_wrapper2}>
              <img
                src={noits.src}
                style={{ width: 200, border: "1px solid #6C2DBA" }}
                alt="Image"
              />
            </div>
          </div>
          <div className={styles.image_column}>
            <div className={styles.image_wrapper2}>
              <img
                src={zamonTour.src}
                style={{ width: 180, border: "1px solid #6C2DBA" }}
                alt="Image"
              />
            </div>
            <div className={styles.image_wrapper2}>
              <img
                src={propartnyor.src}
                style={{ width: 200, border: "1px solid #6C2DBA" }}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
