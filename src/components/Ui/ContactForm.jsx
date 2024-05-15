"use client";

import React, { useState } from "react";
import styles from "@/srcapp/[locale]/page.module.css";
import { useTranslation } from "react-i18next";
import { SendData } from "@/srcservice/axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = `Name: ${formData.name}; PhoneNumber: ${formData.phone}; Message: ${formData.message}`;
    formData.name = "";
    formData.phone = "";
    formData.message = "";
    SendData(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <label htmlFor="name" className={styles.label}>
          <input
            className={styles.inputText}
            placeholder={t("name")}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="phone" className={styles.label}>
          <input
            className={styles.inputText}
            placeholder="+998"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <textarea
        required
        maxLength={2000}
        placeholder={t("textarea")}
        className={styles.textarea}
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "50px",
        }}
      >
        <button className={styles.contact_button} type="submit">
          {t("button")}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
