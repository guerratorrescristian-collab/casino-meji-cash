import "./globals.css";
import Header from "./components/Header";
import { WalletProvider } from "./context/WalletContext";

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
        <WalletProvider>
          <Header />
          <main className="pt-4 max-w-5xl mx-auto">
            {children}
          </main>
        </WalletProvider>
      </body>
    </html>
  );
}

