import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Jeremy Voegeli",
  description: "Personal Website and Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        <div className="grid grid-cols-1 w-sm bg-blue-500">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </div>
        {children}
        </body>
    </html>
  );
}
