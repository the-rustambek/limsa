"use client";

import React from "react";
import styles from "@/srcapp/[locale]/page.module.css";
import ContactForm from "@/srccomponents/Ui/ContactForm";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <div className="container">
        <h2 className={styles.contact_title}>{t("contactTitle")}</h2>
        <p className={styles.contact_title2}>{t("contactText")}</p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
