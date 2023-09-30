import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Cursor from "@/components/Cursor";
import Head from "next/head";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ethan Lanting | Web Developer",
  description: "A self-taught web developer from Texas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const env = process.env.NODE_ENV;
  return (
    <html lang="en">
      <body
        className={`${raleway.className} ${
          env == "development" && "debug-screens"
        } background  `}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
