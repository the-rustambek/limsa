import styles from "./page.module.css";
import initTranslations from "../i18n";
import TranslationsProvider from "@/srccomponents/TranslationsProvider";
import Header from "@/srccomponents/Header/Header";
import About from "@/srccomponents/Layout/About";
import Partners from "@/srccomponents/Layout/Partners";
import Projects from "@/srccomponents/Layout/Projects";
import Services from "@/srccomponents/Layout/Services";
import Advantages from "@/srccomponents/Layout/advantages";
import Feedbacks from "@/srccomponents/Layout/Feedbacks";
import Contact from "@/srccomponents/Layout/Contact";
import Footer from "@/srccomponents/Footer/Footer";

const i18namespaces = ["main", "header", "footer"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18namespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18namespaces}
    >
      <header className={styles.header}>
        <Header />
      </header>
      <main>
        <About />
        <Partners />
        <Projects />
        <Services />
        <Advantages />
        <Feedbacks />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </TranslationsProvider>
  );
}
