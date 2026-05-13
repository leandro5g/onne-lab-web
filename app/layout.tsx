import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ONNE LAB | Software, Mobile e Inovação",
  description:
    "ONNE LAB: empresa de tecnologia especializada em desenvolvimento mobile, web, APIs e produtos digitais escaláveis, fundada sobre mais de 8 anos de experiência prática no mercado.",
  keywords: ["desenvolvimento mobile", "react native", "nextjs", "software house", "MVP", "API", "produtos digitais"],
  openGraph: {
    title: "ONNE LAB | Software, Mobile e Inovação",
    description: "Transformamos ideias em produtos digitais escaláveis.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
