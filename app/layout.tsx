import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const montserratSans = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Masmotors",
  description:
    "Taller automotriz especializado en mecánica general, frenos, cambio de aceite, mantenimiento de caja de cambios y reparación de motor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${montserratSans.variable} antialiased `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
