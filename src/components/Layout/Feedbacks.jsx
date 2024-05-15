"use client";

import React from "react";
import styles from "@/srcapp/[locale]/page.module.css";
import { VscFeedback } from "react-icons/vsc";
import Carousel from "@/srccomponents/Ui/Carousel";
import { useTranslation } from "react-i18next";

const Feedbacks = () => {
  const { t } = useTranslation();

  return (
    <section id="feedbacks">
      <div className="container">
        <div className={styles.feedbacks_text_wrapper}>
          <VscFeedback
            style={{ fontSize: "52px", color: "#561689", marginBottom: 20 }}
          />
          <h2 className={styles.feedbacks_title}>{t("feedbackTitle")}</h2>
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
