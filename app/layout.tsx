import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gagandeep Dhaliwal | Financial Systems Analyst & ERP Administrator",
  description: "Accounting & IT professional with 5+ years of experience bridging financial operations and enterprise systems administration. Expert in Dynamics 365, SAP, and process automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} bg-black text-white min-h-screen relative antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
