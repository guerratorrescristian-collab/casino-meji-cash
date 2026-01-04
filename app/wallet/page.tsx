"use client";

import Link from "next/link";
import { useWallet } from "../hooks/useWallet";

export default function WalletPage() {
  const { balance, addCredits, resetCredits } = useWallet();

  return (
    <div className="max-w-4xl mx-auto space-y-8">

      <Link
        href="/"
        className="inline-block text-purple-600 hover:underline"
      >
        ← Volver al inicio
      </Link>

      <div className="rounded-2xl border p-6">
        <h1 className="text-2xl font-bold text-purple-700">
          💳 Wallet
        </h1>
        <p className="text-gray-600">
          Gestiona tus créditos virtuales
        </p>
      </div>

      <div className="rounded-2xl bg-purple-50 p-6">
        <p className="text-gray-600">Saldo actual:</p>
        <p className="text-4xl font-bold text-purple-700">
          {balance} créditos
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => addCredits(100)}
          className="bg-purple-600 text-white px-4 py-2 rounded-xl"
        >
          + Agregar 100
        </button>

        <button
          onClick={() => addCredits(500)}
          className="bg-purple-500 text-white px-4 py-2 rounded-xl"
        >
          + Agregar 500
        </button>

        <button
          onClick={resetCredits}
          className="bg-gray-300 px-4 py-2 rounded-xl"
        >
          Reset
        </button>
      </div>

    </div>
  );
}

