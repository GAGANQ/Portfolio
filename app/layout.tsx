import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { emailConfig } from "./config/email";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gagandeep Dhaliwal - Portfolio",
  description: "Personal portfolio website showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Create a safe script that doesn't rely on string interpolation
  const initScript = `
    window.onload = function() {
      if (window.emailjs) {
        emailjs.init("yxeRBtm6KeO1vNCcC");
        console.log("EmailJS initialized with key: yxeRBtm6KeO1vNCcC");
      } else {
        console.error("EmailJS not loaded");
      }
    }
  `;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script 
          type="text/javascript" 
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: initScript
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
