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
  title: "Aswin Sankar TK | Full Stack MERN Developer",
  description:
    "Portfolio of Aswin Sankar TK, a full stack developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
  keywords: [
    "MERN developer",
    "React developer",
    "Software Engineer",
    "Software Developer",
    "JavaScript Developer",
    "Full stack Developer",
    "Bengaluru",
  ],
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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={parkinsans.className}>{children}</body>
    </html>
  );
}
