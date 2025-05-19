import type { Metadata } from "next";
import { Anton, Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Fontes
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Blink Streetwear",
  description: "Blink, a marca de streetwear que traz camisetas com estampas exclusivas e criativas.",
  keywords: "streetwear, camisetas, moda, estilo, blink, blink streetwear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${bebas.variable} ${space.variable}`}>
      <body className="bg-black text-white">
        
        <Header />
        
        <main className="min-h-[70vh] px-6 py-8">{children}</main>

        <Footer />

      </body>
    </html>
  );
}
