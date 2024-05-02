import { Inter } from "next/font/google";
import "./globals.css";
import i18nConfig from "@/srci18nConfig";
import { dir } from 'i18next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Limsa",
  description: "LIMSA - SIZNING BIZNESINGIZNI RIVOJLANTIRISH UCHUN MUKAMMAL 'IT' YECHIMLAR!. Web-sayt, internet-magazin, dasturlash, sayt, mobil ilovalar, innovatsiya, sayt yaratish, telegram bot yaratish, CRM, ichki boshqaruv tizim, biznesingiz uchun IT xizmatlari ",
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
