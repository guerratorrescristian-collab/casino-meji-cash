"use client";

import { useWallet } from "../hooks/useWallet";

export default function WalletPage() {
  const { balance, addCredits, resetCredits } = useWallet();

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border p-6 bg-white">
        <h1 className="text-3xl font-bold text-purple-700">
          💳 Wallet
        </h1>
        <p className="text-gray-600 mt-2">
          Gestiona tus créditos virtuales
        </p>
      </div>

      <div className="rounded-2xl border p-6 bg-purple-50">
        <p className="text-lg">
          Saldo actual:
        </p>
        <p className="text-4xl font-bold text-purple-700">
          {balance} créditos
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => addCredits(100)}
          className="rounded-xl bg-purple-600 px-6 py-3 text-white hover:bg-purple-700"
        >
          ➕ Agregar 100
        </button>

        <button
          onClick={() => addCredits(500)}
          className="rounded-xl bg-purple-500 px-6 py-3 text-white hover:bg-purple-600"
        >
          ➕ Agregar 500
        </button>

        <button
          onClick={resetCredits}
          className="rounded-xl bg-gray-300 px-6 py-3 text-gray-800 hover:bg-gray-400"
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}
