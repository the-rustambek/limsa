import Image from "next/image";
import styles from "./page.module.css";
import ItTime from "/public/ITtimeLogo.png";
import dezLogo from "/public/dez_logo.png";
import HomeKit from "/public/homekitLogo.png";
import Loyal from "/public/Loyal.png";
import NOITS from "/public/namanganOITS.jpg";
import abBuild from "/public/abBuild.jpg";
import avtozoomWeb from "/public/avtozoomWebsite.jpg";
import dezinfection from "/public/desinfection.jpg";
import homekit from "/public/homekit.jpg";
import itTime from "/public/itTime.jpg";
import loyalWebsite from "/public/loyalWebsite.jpg"
import noits from "/public/noits.jpg";
import propartnyor from "/public/propartnyor.jpg";
import zamonTour from "/public/zamonTour.jpg";
import responsiveImage from "/public/responsive-web-design.png";
import Header from "@/srccomponents/Header/Header";
import Counter from "@/srccomponents/Ui/Counter";
import Logo from "@/srccomponents/Ui/Logo";
import Websites from "@/srccomponents/Ui/Websites";
import Service from "@/srccomponents/Ui/Service";
import { VscFeedback } from "react-icons/vsc";
import Carousel from "@/srccomponents/Ui/Carousel";
import Footer from "@/srccomponents/Footer/Footer";
import initTranslations from "../i18n";
import TranslationsProvider from "@/srccomponents/TranslationsProvider";

const i18namespaces = ["main", "header", "footer"]

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18namespaces);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18namespaces}>
        <header className={styles.header}>
          <Header />
        </header>
        <main>
          <section id="about">
            <div className={`container ${styles.about_wrapper}`}>
              <div className={styles.texts}>
                <h1 className={styles.text_container}>
                  Sizning {" "}
                  <strong className={styles.animatedText}>biznesingizni</strong> {" "}
                  rivojlantirish uchun mukammal <strong className={styles.strong}>'IT'</strong> yechimlar!
                </h1>
                <article className={styles.article}>
                  {t("text")}
                </article>
                <button className={styles.contact_button}>
                  {t("header:contact")}
                </button>
              </div>
              <div className={styles.images_container}>
                <div className={styles.image_column}>
                  <div className={styles.image_wrapper1}>
                    <img src={abBuild.src} style={{ width: 180, border: "1px solid #6C2DBA" }} alt="Image" />
                  </div>
                  <div className={styles.image_wrapper1}>
                    <img src={homekit.src} style={{ width: 200, border: "1px solid #6C2DBA" }} alt="Image" />
                  </div>
                  <div className={styles.image_wrapper1}>
                    <img src={itTime.src} style={{ width: 180, border: "1px solid #6C2DBA" }} alt="Image" />
                  </div>
                </div>
                <div className={styles.image_column}>
                  <div className={styles.image_wrapper2}>
                    <img src={loyalWebsite.src} style={{ width: 200, border: "1px solid #6C2DBA" }} alt="Image" />
                  </div>
                  <div className={styles.image_wrapper2}>
                    <img src={avtozoomWeb.src} style={{ width: 200, border: "1px solid #6C2DBA" }} alt="Image" />
                  </div>
                  <div className={styles.image_wrapper2}>
                    <img src={noits.src} style={{ width: 200, border: "1px solid #6C2DBA" }} alt="Image" />
                  </div>
                </div>
                <div className={styles.image_column}>
                  <div className={styles.image_wrapper2}>
                    <img src={zamonTour.src} style={{ width: 180, border: "1px solid #6C2DBA" }} alt="Image" />
                  </div>
                  <div className={styles.image_wrapper2}>
                    <img src={propartnyor.src} style={{ width: 200, border: "1px solid #6C2DBA" }} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="partners">
            <div className={`container ${styles.partners_wrapper}`}>
              <Image src="/Limsa - Logotype 2.png"
                alt="Limsa Logo"
                width={250}
                height={60} />
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
              </div>
            </div>
          </section>
          <section id="projects">
            <div className="container">
            <h4 className={styles.projects_text_sm}>{t("projects_text_sm")}</h4>
              <h2 className={styles.projects_text_lg}>{t("we_did")}</h2>

              <div className={styles.projects_wrapper}>
                <Websites image={abBuild} />
                <Websites image={avtozoomWeb} />
                <Websites image={dezinfection} />
                <Websites image={homekit} />
                <Websites image={itTime} />
                <Websites image={loyalWebsite} />
                <Websites image={noits} />
                <Websites image={propartnyor} />
                <Websites image={zamonTour} />
              </div>
            </div>
          </section>
          <section id="services">
            <div className={`container ${styles.service_wrapper}`}>
              <h2 className={styles.service_title}>{t("service_title")}</h2>
              <Service />
            </div>
          </section>
          <section id="advantages">
            <div className="container">
              <div className={styles.advantages_wrapper}>
                <div>
                  <img src={responsiveImage.src} className={styles.adv_image} alt="Image" />
                </div>
                <div>
                  <p className={styles.advantages_text_sm}>{t("responsive")}</p>
                  <h2 className={styles.advantages_text_lg}>{t("resTitle")}</h2>
                  <p className={styles.advantages_text}>{t("resText")}</p>
                </div>
              </div>
            </div>
          </section>
          <section id="feedbacks">
            <div className="container">
              <div className={styles.feedbacks_text_wrapper}>
                <VscFeedback style={{ fontSize: "52px", color: "#561689", marginBottom: 20 }} />
                <h2 className={styles.feedbacks_title}>
                  {t("feedbackTitle")}
                </h2>
                <Carousel />
              </div>
            </div>
          </section>
          <section id="contact">
            <div className="container">
              <h2 className={styles.contact_title}>{t("contactTitle")}</h2>
              <p className={styles.contact_title2}>
                {t("contactText")}
              </p>
              <form className={styles.form}>
                <div className={styles.inputs}>
                  <input className={styles.inputText} placeholder={t("name")} type="text" required />
                  <input className={styles.inputText} placeholder="+998" type="tel" required />
                </div>
                <textarea
                  required
                  maxLength={2000}
                  placeholder={t("textarea")}
                  className={styles.textarea}
                >
                </textarea>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "40px", marginBottom: "50px" }}>
                  <button className={styles.contact_button}>
                    {t("button")}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
    </TranslationsProvider>

  );
}
