import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Jeremy Voegeli",
  description: "Personal Website and Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-screen flex">
        <aside className="fixed w-48 shrink-0 h-screen flex flex-col bg-blue-100">
          <h1 className="text-center">Jeremy Voegeli</h1>
          <hr className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:via-black"/>
          <Link href="/" className="text-center">Home</Link>
          <Link href="/about" className="text-center">About</Link>
          <Link href="/projects" className="text-center">Projects</Link>
          <Link href="/resume" className="text-center">Resume</Link>
          <Link href="/contact" className="text-center">Contact</Link>
          <div className="h-full"/>
          <div className="grid grid-rows-3 mb-10">
            <hr className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:via-black"/>
            <Link href="https://github.com/JeremyVoegeli" target="_blank" className="text-center">GitHub</Link>
            <Link href="https://www.linkedin.com/in/jeremyvoegeli/" target="_blank" className="text-center">LinkedIn</Link>
          </div>
        </aside>
        <main className="flex-1">
          {children}
        </main>
        </body>
    </html>
  );
}
