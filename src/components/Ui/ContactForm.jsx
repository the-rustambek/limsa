"use client";

import React, { useState } from "react";
import styles from "@/srcapp/[locale]/page.module.css";
import { useTranslation } from "react-i18next";
import { SendData } from "@/srcservice/axios";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const { t } = useTranslation();
  let [phoneNumber, setPhoneNumber] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = `Name: ${formData.name}; PhoneNumber: ${phoneNumber}; Message: ${formData.message}`;
    formData.name = "";
    phoneNumber = "";
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
          <PhoneInput 
             className={styles.inputText}
             placeholder="Enter phone number"
             defaultCountry="UZ"
             value={phoneNumber} 
             onChange={setPhoneNumber}
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