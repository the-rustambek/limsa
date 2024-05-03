"use client";

import React, { useState } from "react";
import styles from "@/srcapp/[locale]/page.module.css";
import { useTranslation } from "react-i18next";
import { Modal } from "antd";

const ModalForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  const showDrawer = () => {
    setModalOpen(true);
  };

  const onClose = () => {
    setModalOpen(false);
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
        <form className={styles.formM}>
            <input
              className={styles.inputText}
              placeholder={t("name")}
              type="text"
              required
            />
            <input
              className={styles.inputText}
              placeholder="+998"
              type="tel"
              required
            />
          <textarea
            required
            maxLength={2000}
            placeholder={t("textarea")}
            className={styles.textarea}
          ></textarea>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <button className={styles.contact_button}>{t("button")}</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ModalForm;
