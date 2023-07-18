import "./globals.css";
import type { Metadata } from "next";
import { Quicksand, Cinzel } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import Providers from "../../component/Providers";

// const quicksand = Quicksand({ subsets: ["latin"] });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const quick = Quicksand({ subsets: ["latin"], variable: "--font-quick" });

export const metadata: Metadata = {
  title: "GenPI Kota Dumai",
  description: "Website Generasi Pesona Indonesia Kota Dumai",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${`${quick.variable}`}`}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
