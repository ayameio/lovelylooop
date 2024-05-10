import type { Metadata } from "next";
import { Fredoka, Quando } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"] });
const quando = Quando({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-quando'
});

export const metadata: Metadata = {
  title: "lovelylooop.xyz",
  description: "We love Web3!",
  icons: {
    icon: "icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon.png" type="image/png" />
      </head>
      <body className={`${fredoka.className}`}>{children}</body>
    </html>
  );
}
