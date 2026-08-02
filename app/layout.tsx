import type { Metadata } from "next";
import { Parkinsans } from "next/font/google";
import "./globals.css";

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aswin Sankar | Full Stack MERN Developer",
  description:
    "Portfolio of Aswin Sankar, a full stack developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
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
    <html lang="en" className={`${parkinsans.variable} h-full antialiased`}>
      <body className={parkinsans.className}>{children}</body>
    </html>
  );
}
