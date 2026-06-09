import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Karthick Raj | Business Analyst & Data Analyst Portfolio",
  description:
    "Futuristic portfolio for Karthick Raj, an entry-level Business Analyst and Data Analyst skilled in SQL, Excel, Power BI, Tableau, KPI reporting and data storytelling.",
  keywords: [
    "Karthick Raj",
    "Business Analyst",
    "Data Analyst",
    "Power BI Developer",
    "Dashboard Designer",
    "SQL",
    "Excel",
    "Tableau"
  ],
  openGraph: {
    title: "Karthick Raj | Business Analyst Portfolio",
    description:
      "AI-inspired analytics portfolio showcasing dashboards, projects, certifications and business insights.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${space.variable}`}>{children}</body>
    </html>
  );
}
