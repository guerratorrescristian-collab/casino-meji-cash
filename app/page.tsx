import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
      <h1 className="text-4xl font-bold text-purple-700">
  💰 Meji Cash
</h1>

<p className="mt-3 text-gray-600">
  Plataforma demo con créditos virtuales – Web + App (PWA)
</p>

      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/wallet"
          className="rounded-2xl border bg-purple-600 p-6 text-white hover:bg-purple-700"
        >
          <h2 className="text-xl font-semibold">💳 Wallet</h2>
          <p className="mt-2 text-sm">
            Cargar y ver créditos virtuales
          </p>
        </Link>

        <Link
          href="/slots"
          className="rounded-2xl border bg-purple-500 p-6 text-white hover:bg-purple-600"
        >
          <h2 className="text-xl font-semibold">🎰 Slots</h2>
          <p className="mt-2 text-sm">
            Juego demo con apuestas
          </p>
        </Link>

        <div className="rounded-2xl border bg-gray-100 p-6 text-gray-400">
          <h2 className="text-xl font-semibold">🎡 Ruleta</h2>
          <p className="mt-2 text-sm">
            Próximamente
          </p>
        </div>
      </div>
    </div>
  );
}
