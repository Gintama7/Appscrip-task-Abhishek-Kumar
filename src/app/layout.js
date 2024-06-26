import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:"ShopKart",
  description: "All items in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <header><Header/></header>
        {children}
        <footer><Footer/></footer></body>
    </html>
  );
}
