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
        <aside className="w-48 shrink-0 flex flex-col bg-blue-100">
          <Link href="/" className="text-center">Home</Link>
          <Link href="/about" className="text-center">About</Link>
          <Link href="/projects" className="text-center">Projects</Link>
          <Link href="/resume" className="text-center">Resume</Link>
          <Link href="/contact" className="text-center">Contact</Link>
        </aside>
        <main className="flex-1">
          {children}
        </main>
        </body>
    </html>
  );
}
