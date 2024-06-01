import type { Metadata } from "next";
import { Fredoka, Quando } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOVELYLOOOP.TON",
  description: "A WEB3 BRAND BUILDING ON TON",
  icons: {
    icon: "logo.png",
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
      <body className={`bg-black text-white ${fredoka.className}`}>{children}</body>
    </html>
  );
}
