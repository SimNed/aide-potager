import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const interSans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aide potager",
  description: "Un outil pour vous aider au potager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${interSans.className} h-screen antialiased`}>
        <Header />
        <main className="h-main">{children}</main>
      </body>
    </html>
  );
}
