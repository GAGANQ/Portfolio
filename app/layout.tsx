import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script 
          type="text/javascript" 
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          defer
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.onload = function() {
                if (window.emailjs) {
                  const publicKey = "${publicKey}";
                  if (!publicKey) {
                    console.error('EmailJS public key is not set');
                    return;
                  }
                  try {
                    emailjs.init(publicKey);
                    console.log('EmailJS initialized successfully');
                  } catch (error) {
                    console.error('Failed to initialize EmailJS:', error);
                  }
                } else {
                  console.error('EmailJS not found');
                }
              }
            `
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
