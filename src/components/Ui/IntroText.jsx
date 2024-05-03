"use client";
import React from "react";
import styles from "@/srcapp/[locale]/page.module.css";
import { useTranslation } from "react-i18next";

const IntroText = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <>
      {currentLocale === "uz" ? (
        <h1 className={styles.text_container}>
          Sizning <strong className={styles.animatedText}>biznesingizni</strong>{" "}
          rivojlantirish uchun mukammal{" "}
          <strong className={styles.strong}>'IT'</strong> yechimlar!
        </h1>
      ) : currentLocale === "en" ? (
        <h1 className={styles.text_container}>
          Perfect <strong className={styles.strong}>'IT'</strong> {" "}
          SOLUTIONS TO DEVELOP YOUR {" "}
          <strong className={styles.animatedText}>BUSINESS!</strong>
        </h1>
      ) : (
        <h1 className={styles.text_container}>
          ИДЕАЛЬНЫЕ{" "}  <strong className={styles.strong}>'IT'</strong>{" "}
           РЕШЕНИЯ
          ДЛЯ РАЗВИТИЯ ВАШЕГО <strong className={styles.animatedText}>БИЗНЕСА!</strong>
        </h1>
      )}
    </>
  );
};

export default IntroText;
