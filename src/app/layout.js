import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Stock",
  description: "Project by namke-dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
        ${inter.className} 
        bg-gray-100
        text-gray-950
        relative
        overflow-y-auto
        custom-scrollbar
        dark:bg-gray-900 
        dark:text-gray-50 
        dark:text-opacity-90`}
      >
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
