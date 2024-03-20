import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const inter_init = Inter({
  subsets: ["latin"],
  weight: ["300", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chat Dosen Generator",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={`${poppins_init.variable} ${inter_init.variable}`}>
        {children}
      </body>
    </html>
  );
}
