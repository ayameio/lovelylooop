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
  description: "",
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
