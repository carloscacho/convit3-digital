import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const font = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ev3nts | O Seu Evento Começa aqui",
  description: "App de criação de eventos ",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
