import { PT_Sans, Nunito } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ptSans = PT_Sans({ subsets: ["latin"], weight: ["700", "400"] });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata = {
  title: "Skypark",
  description: "Redesign of skypark trampoline park website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ptSans.className} ${nunito.variable}`}>
      <body className="bg-light text-lg text-dark xl:text-[20px]">
        <header>
          <Navigation />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
