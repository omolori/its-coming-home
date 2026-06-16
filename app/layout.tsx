import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "$HOME - It's Coming Home",
  description: "$HOME - The global football meme coin built for World Cup chaos.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}