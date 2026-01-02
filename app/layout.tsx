import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casino Demo",
  description: "Plataforma demo con créditos virtuales",
  manifest: "/manifest.webmanifest",
  themeColor: "#7c3aed",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

