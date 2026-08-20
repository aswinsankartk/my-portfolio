import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const barlowcondensed = Barlow_Condensed({
  variable: "--font-barlowcondensed",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const dmsans = DM_Sans({
  variable: "--font-dmsans",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aswinsankartk.vercel.app"),
  title: "Aswin Sankar TK | Software Developer",
  description:
    "Portfolio of Aswin Sankar TK, a software developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
  verification: {
    google: "8nizk4PobkHiKBE9GgCFJ5d59-ROmBkVepPiuQY0hzc",
  },
  keywords: [
    "Web Developer",
    "Bingestudy",
    "MERN developer",
    "React developer",
    "Software Engineer",
    "Software Developer",
    "JavaScript Developer",
    "Full stack Developer",
    "Bengaluru",
  ],
  openGraph: {
    title: "Aswin Sankar TK | Software Developer",
    description:
      "Portfolio of Aswin Sankar TK, a software developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
    url: "https://aswinsankartk.vercel.app",
    siteName: "Aswin Sankar TK | Software Developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aswin Sankar TK | Software Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aswin Sankar TK | Software Developer",
    description:
      "Portfolio of Aswin Sankar TK, a software developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aswinsankartk.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowcondensed.variable} ${dmsans.variable} ${manrope.variable} h-full antialiased scroll-smooth scrollbar-thin`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
