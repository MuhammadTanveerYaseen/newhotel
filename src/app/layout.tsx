<<<<<<< HEAD

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./home/components/Footer";
import Header from "./home/components/Header";
=======
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
>>>>>>> 42f1c05 (Initial commit from Create Next App)

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
<<<<<<< HEAD
      > 
      
      <Header/>
      
        {children}
       
        <Footer></Footer>
        
=======
      >
        {children}
>>>>>>> 42f1c05 (Initial commit from Create Next App)
      </body>
    </html>
  );
}
