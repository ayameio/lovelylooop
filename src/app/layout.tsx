import type { Metadata } from "next";
import { Fredoka, Quando } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"] });
const quando = Quando({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "lovelylooop",
  description: "web3 gaming brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.className}>{children}</body>
    </html>
  );
}
