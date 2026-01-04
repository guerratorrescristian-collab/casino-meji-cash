import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-purple-700 text-white">
      <nav className="max-w-4xl mx-auto flex gap-4 p-4">
        <Link href="/" className="font-semibold hover:underline">
          🏠 Inicio
        </Link>
        <Link href="/wallet" className="hover:underline">
          💳 Wallet
        </Link>
        <Link href="/slots" className="hover:underline">
          🎰 Slots
        </Link>
      </nav>
    </header>
  );
}
