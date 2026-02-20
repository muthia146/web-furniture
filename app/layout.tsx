import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "./components/Navbar";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Provider harus membungkus semua komponen agar keranjang belanja berfungsi di semua halaman */}
        <CartProvider>
          {/* Navbar diletakkan di atas children agar selalu muncul di setiap halaman */}
          <Navbar />
          
          {/* Konten halaman akan muncul di sini */}
          <div className="pt-20"> 
            {children}
          </div>
          
          {/* Kamu bisa tambah Footer di bawah sini nanti */}
        </CartProvider>
      </body>
    </html>
  );
}