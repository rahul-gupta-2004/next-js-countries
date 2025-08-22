import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <nav className="px-6 py-4">
          <Link href="/" className="hover:underline px-4">Home</Link>
          <Link href="/about" className="hover:underline px-4">About</Link>
          <Link href="/countries" className="hover:underline px-4">Countries</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
};