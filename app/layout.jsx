import { Marcellus, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CursorProvider from "@/components/CursorContext";
import Transition from "@/components/Transition";
import PageTransition from "@/components/PageTransition";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const lobster = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-lobster",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "LuxeGlam",
  description: "Luxury Glamour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${marcellus.variable} ${montserrat.variable} ${lobster.variable} antialiased overflow-x-hidden`}
      >
        <CursorProvider>
          <Transition />
          <Header />
          <PageTransition>{children}</PageTransition>
        </CursorProvider>
      </body>
    </html>
  );
}
