"use client";

import React, { useState } from "react";
import styles from "@/srcapp/[locale]/page.module.css";
import { useTranslation } from "react-i18next";
import { Modal, message } from "antd";
import { SendData } from "@/srcservice/axios";

const ModalForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const { t } = useTranslation();

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
    const data = `Name: ${formData.name}; PhoneNumber: ${formData.phone}; Message: ${formData.message}`;
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
        visible={modalOpen}
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
