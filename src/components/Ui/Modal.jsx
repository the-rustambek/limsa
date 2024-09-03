"use client";

import React, { useState } from "react";
import styles from "@/srcapp/[locale]/page.module.css";
import { useTranslation } from "react-i18next";
import { Modal } from "antd";
import { SendData } from "@/srcservice/axios";
import IntlTelInput from "intl-tel-input/reactWithUtils";
import "intl-tel-input/styles";

const ModalForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const { t } = useTranslation();
  let [number, setNumber] = useState();
  const [isValid, setIsValid] = useState();
  const countries = ["uz", "ru", "kg", "kz", "tj"];

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
    formData.name = "";
    number = "";
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
            <IntlTelInput
              onChangeNumber={setNumber}
              onChangeValidity={setIsValid}
              initOptions={{
                separateDialCode: true,
                autoPlaceholder: "off",
                strictMode: true,
                initialCountry: "uz",
                countryOrder: countries,
              }}
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
