import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderPage from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Toaster } from "@/Components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Grocery Store",
  description: "Grocery Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderPage/>
        {children}
        <Toaster />
        <Footer/>
      
      </body>
    </html>
  );
}
