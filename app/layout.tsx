import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import type { Viewport } from "next";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ethan Lanting | Web Developer",
  description: "A self-taught web developer from Texas.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ethanlanting.dev/",
    title: "Ethan Lanting | Web Developer",
    description: "A self-taught web developer from Texas.",
    images: [
      {
        url: "https://ethanlanting.dev/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ethan Lanting | Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
  },
};

export const viewport: Viewport = {
  themeColor: "#252734",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
