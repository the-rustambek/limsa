"use client";

import React, { useState } from "react";
import styles from "@/srcapp/[locale]/page.module.css";
import { useTranslation } from "react-i18next";
import { Modal } from "antd";
import { SendData } from "@/srcservice/axios";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const ModalForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const { t } = useTranslation();
  let [phoneNumber, setPhoneNumber] = useState()

  const showDrawer = () => {
    setModalOpen(true);
  };

  const onClose = () => {
    setModalOpen(false);
  };

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
    <>
      <button className={styles.contact_button} onClick={showDrawer}>
        {t("header:contact")}
      </button>
      <Modal
        title={t("contactTitle")}
        centered
        open={modalOpen}
        onCancel={onClose}
        footer={false}
      >
        <form className={styles.formM} onSubmit={handleSubmit}>
          <label htmlFor="name">
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
          <label htmlFor="phone">
          <PhoneInput 
             className={styles.inputText}
             placeholder="Enter phone number"
             defaultCountry="UZ"
             value={phoneNumber} 
             onChange={setPhoneNumber}
             required
          />
          </label>
          <textarea
            maxLength={2000}
            placeholder={t("textarea")}
            className={styles.textarea}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <button className={styles.contact_button} type="submit">
              {t("button")}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ModalForm;