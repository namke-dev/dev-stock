import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Dev Stock",
  description: "Project by namke-dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
