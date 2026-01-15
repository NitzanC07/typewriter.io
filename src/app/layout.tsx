import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Typewriter.io",
  description: "Education and Technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="he">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="page-background">
          <div className="page-frame">


            <main className="main">
              {children}
            </main>

          </div>
        </div>
      </body>
    </html>
  );
}
