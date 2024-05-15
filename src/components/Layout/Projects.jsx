"use client";

import React from "react";
import styles from "@/srcapp/[locale]/page.module.css";
import Websites from "@/srccomponents/Ui/Websites";
import abBuild from "/public/abBuild.jpg";
import avtozoomWeb from "/public/avtozoomWebsite.jpg";
import dezinfection from "/public/desinfection.jpg";
import homekit from "/public/homekit.jpg";
import itTime from "/public/itTime.jpg";
import loyalWebsite from "/public/loyalWebsite.jpg";
import noits from "/public/noits.jpg";
import propartnyor from "/public/propartnyor.jpg";
import zamonTour from "/public/zamonTour.jpg";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects">
      <div className="container">
        <h4 className={styles.projects_text_sm}>{t("projects_text_sm")}</h4>
        <h2 className={styles.projects_text_lg}>{t("we_did")}</h2>

        <div className={styles.projects_wrapper}>
          <Websites
            image={abBuild}
            link={"https://www.ataevbahodirbuild.uz/"}
          />
          <Websites
            image={avtozoomWeb}
            link={"https://www.autozoomrental.com"}
          />
          <Websites
            image={dezinfection}
            link={"https://www.dezinfeksiyatashkent.uz/"}
          />
          <Websites
            image={homekit}
            link={"https://www.https://www.homekit.uz/"}
          />
          <Websites image={itTime} link={"https://www.it-time-academy.uz"} />
          <Websites image={loyalWebsite} link={"https://www.uzloyal.uz"} />
          <Websites image={noits} link={"https://www.namanganoits.uz/"} />
          <Websites image={propartnyor} link={"https://www.propartnyor.uz"} />
          <Websites image={zamonTour} link={"https://www.zamontour.uz"} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
