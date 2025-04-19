import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Background from "./components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gagandeep Dhaliwal - Portfolio",
  description: "Professional portfolio showcasing my work in financial management and accounting operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" />
        <Script id="emailjs-init">
          {`(function() {
            emailjs.init("jrtW25p4QyAx1ubOc");
            console.log('EmailJS initialized');
          })();`}
        </Script>
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen relative`}>
        <Background />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
