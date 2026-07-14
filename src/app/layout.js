import "./globals.css";
import Link from "next/link";
import Nav from "./components/Nav";

export const metadata = {
  title: "Jeremy Voegeli",
  description: "Personal Website and Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-screen flex">
        <aside className="fixed w-48 shrink-0 h-screen flex flex-col bg-blue-100">
          <span className="text-center font-semibold">Jeremy Voegeli</span>
          <hr className="border-gray-300 my-3"/>
          <Nav />
          <div className="h-full"/>
          <div className="grid grid-rows-3 mb-10">
            <hr className="border-gray-300 my-3"/>
            <Link href="https://github.com/JeremyVoegeli" target="_blank" className="text-center py-1">GitHub</Link>
            <Link href="https://www.linkedin.com/in/jeremyvoegeli/" target="_blank" className="text-center py-1">LinkedIn</Link>
          </div>
        </aside>
        <main className="flex-1 ml-48">
          {children}
        </main>
      </body>
    </html>
  );
}