import "./globals.css";
import Link from "next/link";
import Nav from "./components/Nav";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Jeremy Voegeli",
  description: "Personal Website and Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`min-h-screen flex ${display.variable} ${sans.variable} ${mono.variable}`}>
        <aside className="fixed w-48 shrink-0 h-screen flex flex-col bg-[#365066] text-[#EDF1F6] border-r border-[#0F1720]">
          <span className="text-center font-display font-semibold pt-8 pb-4 text-white">
            Jeremy Voegeli
          </span>
          <hr className="border-[#33455C] mx-4" />
          <Nav />
          <div className="h-full" />
          <div className="grid grid-rows-3 mb-10 px-4">
            <hr className="border-[#33455C] mb-2" />
            <Link
              href="https://github.com/JeremyVoegeli"
              target="_blank"
              className="flex justify-center py-1 text-3xl text-[#B9C4D0] hover:text-[#2E9C7B] transition-colors"
            >
              <FiGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jeremyvoegeli/"
              target="_blank"
              className=" flex justify-center py-2 text-3xl text-[#B9C4D0] hover:text-[#2E9C7B] transition-colors"
            >
              <FiLinkedin />
            </Link>
          </div>
        </aside>
        <main className="flex-1 ml-48">
          {children}
        </main>
      </body>
    </html>
  );
}