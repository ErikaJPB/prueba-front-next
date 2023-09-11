import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import ThemeToggle from "@/components/ThemeToggle";

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
        <div className="flex flex-col items-end mt-8 mr-6">
          <ThemeToggle />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
