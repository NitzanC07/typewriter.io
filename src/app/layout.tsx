import type { Metadata } from "next";
import { Varela_Round, Bellefair } from "next/font/google";
import "./globals.css";

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varelaRound",
});
const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
})
export const metadata: Metadata = {
  title: "Typewriter.io",
  description: "Education and Technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="he">
      <body className={`${varelaRound.variable} ${bellefair.variable}`}>
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
