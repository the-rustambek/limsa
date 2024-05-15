"use client";

import React from "react";
import styles from "@/srcapp/[locale]/page.module.css";
import Service from "@/srccomponents/Ui/Service";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="services">
      <div className={`container ${styles.service_wrapper}`}>
        <h2 className={styles.service_title}>{t("service_title")}</h2>
        <Service />
      </div>
    </section>
  );
};

export default Services;
