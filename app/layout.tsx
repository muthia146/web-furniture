import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // 1. INI YANG DITAMBAHKAN DI ATAS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LUXÉ Atelier | Fine Furniture",
  description: "Curating Timeless Masterpieces for Your Sanctuary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <Navbar />
          
          {/* Pembungkus konten utama */}
          <div className="pt-28 min-h-screen"> 
            {children}
          </div>
          
          <Footer /> {/* 2. INI YANG DITAMBAHKAN DI BAWAH CHILDREN */}
        </CartProvider>
      </body>
    </html>
  );
}