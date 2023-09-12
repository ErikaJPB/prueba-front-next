import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prueba Frontend",
  description: "Prueba Frontend Junior",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="flex flex-col min-h-screen">
          <div className="flex justify-between items-center px-4 py-2 ">
            <Navbar />
            <ThemeToggle />
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
