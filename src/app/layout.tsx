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
  title: "lovelylooop",
  description: "Just a lovely WEB3 brand! Play your favorite WEB3 and WEB2 games on lovelylooop. All WEB3 creators are invited! Support lovelylooop by following us on social media, buying our merch and playing our games. Have a blessed day! Much love <3",
  icons: {
    icon: "/icons/icon.png",
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
        <link rel="/icons/icon.png" type="image/png" />
      </head>
      <body className={`${fredoka.className}`}>{children}</body>
    </html>
  );
}
