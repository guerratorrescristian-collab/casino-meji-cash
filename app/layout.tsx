import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Casino Demo",
  description: "Plataforma demo con créditos virtuales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="pt-4">{children}</main>
      </body>
    </html>
  );
}
