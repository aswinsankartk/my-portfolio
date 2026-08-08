import type { Metadata } from "next";
import { Parkinsans, Figtree } from "next/font/google";
import "./globals.css";

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aswinsankartk.vercel.app"),
  title: "Aswin Sankar TK | Full Stack MERN Developer",
  description:
    "Portfolio of Aswin Sankar TK, a full stack developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
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
    title: "Aswin Sankar TK | Full Stack MERN Developer",
    description:
      "Portfolio of Aswin Sankar TK, a full stack developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
    url: "https://aswinsankartk.vercel.app",
    siteName: "Aswin Sankar TK | Full Stack MERN Developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aswin Sankar TK | Full Stack MERN Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aswin Sankar TK | Full Stack MERN Developer",
    description:
      "Portfolio of Aswin Sankar TK, a full stack developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
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
      className={`${parkinsans.variable} h-full antialiased scroll-smooth`}
    >
      <body className={parkinsans.className}>{children}</body>
    </html>
  );
}
