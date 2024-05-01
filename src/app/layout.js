import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Limsa",
  description: "LIMSA - SIZNING BIZNESINGIZNI RIVOJLANTIRISH UCHUN MUKAMMAL 'IT' YECHIMLAR!. Web-sayt, internet-magazin, dasturlash, sayt, mobil ilovalar, innovatsiya, sayt yaratish, telegram bot yaratish, CRM, ichki boshqaruv tizim, biznesingiz uchun IT xizmatlari ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
