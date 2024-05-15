"use client";

import React from "react";
import styles from "@/srcapp/[locale]/page.module.css";
import Counter from "@/srccomponents/Ui/Counter";
import Image from "next/image";
import Logo from "@/srccomponents/Ui/Logo";
import ItTime from "/public/ITtimeLogo.png";
import dezLogo from "/public/dez_logo.png";
import HomeKit from "/public/homekitLogo.png";
import Loyal from "/public/Loyal.png";
import NOITS from "/public/namanganOITS.jpg";
import autozoom from "/public/avtozoom.svg";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <section id="partners">
      <div className={`container ${styles.partners_wrapper}`}>
        <Image
          src="/Limsa - Logotype 2.png"
          alt="Limsa Logo"
          width={250}
          height={60}
        />
        <h2 className={styles.partners_title}>{t("partners_title")}</h2>

        <div className={styles.counter}>
          <Counter countEnd={500} text={t("complated_projects")} />
          <Counter countEnd={20} text={t("clients_text")} />
        </div>
        <div className={styles.logos}>
          <Logo image={ItTime.src} text={"IT Time"} />
          <Logo image={dezLogo.src} text={"Dezinfeksiya Tashkent"} />
          <Logo image={HomeKit.src} text={"HomeKit"} />
          <Logo image={Loyal.src} text={"Loyal"} />
          <Logo image={NOITS.src} text={"Namangan OITS"} />
          <Logo image={autozoom.src} text={"Auto zoom"} />
        </div>
      </div>
    </section>
  );
};

export default Partners;
