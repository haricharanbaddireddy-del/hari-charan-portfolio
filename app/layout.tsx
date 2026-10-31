import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://haricharan.dev"
  ),
  title: "Baddireddy Hari Charan | AI + Full Stack + Automation Developer",
  description:
    "Portfolio of Baddireddy Hari Charan – Computer Science undergraduate at S.R.K.R. Engineering College (8.78 CGPA). Specialized in Full Stack Development (React, Node.js), Applied AI (Gemini API), and Enterprise Automation (n8n).",
  keywords: [
    "Baddireddy Hari Charan",
    "Hari Charan",
    "Full Stack Developer",
    "AI Developer",
    "Automation Engineer",
    "SRKR Engineering College",
    "n8n Automation",
    "Gemini API",
    "React Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Baddireddy Hari Charan" }],
  creator: "Baddireddy Hari Charan",
  openGraph: {
    title: "Baddireddy Hari Charan | AI + Full Stack + Automation Developer",
    description:
      "Building intelligent solutions through AI, Full Stack Development & Automation. Computer Science undergraduate at S.R.K.R. Engineering College.",
    url: "https://sites.google.com/view/haricharanportfolio",
    siteName: "Hari Charan Portfolio",
    images: [
      {
        url: "/images/hari-charan-portrait.jpg",
        width: 770,
        height: 1024,
        alt: "Baddireddy Hari Charan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-zinc-100 antialiased min-h-screen flex flex-col font-sans selection:bg-primary-500/30 selection:text-white">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
