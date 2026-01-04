"use client";

import { useState } from "react";
import { useWallet } from "../hooks/useWallet";
import Link from "next/link";

export default function SlotsPage() {
  const { balance, addCredits } = useWallet();
  const [result, setResult] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);

  const play = () => {
    if (balance < 50) {
      setResult("❌ No tienes suficientes créditos");
      return;
    }

    setSpinning(true);
    setResult(null);

    setTimeout(() => {
      const win = Math.random() < 0.4; // 40% probabilidad

      if (win) {
        addCredits(100); // gana 100
        setResult("🎉 ¡Ganaste +100 créditos!");
      } else {
        addCredits(-50); // pierde 50
        setResult("😢 Perdiste -50 créditos");
      }

      setSpinning(false);
    }, 1200);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <Link href="/" className="text-sm text-purple-600 hover:underline">
        ← Volver al inicio
      </Link>

      <div className="rounded-2xl border p-6 text-center">
        <h1 className="text-3xl font-bold text-purple-700">🎰 Slots</h1>
        <p className="mt-2 text-gray-600">
          Apuesta 50 créditos y prueba suerte
        </p>
      </div>

      <div className="rounded-2xl border bg-purple-50 p-6 text-center">
        <p className="text-gray-500">Saldo actual</p>
        <p className="text-3xl font-bold text-purple-700">
          {balance} créditos
        </p>
      </div>

      <button
        onClick={play}
        disabled={spinning}
        className="w-full rounded-xl bg-purple-600 py-4 text-white font-semibold hover:bg-purple-700 disabled:opacity-50"
      >
        {spinning ? "Girando..." : "🎰 Jugar (−50 créditos)"}
      </button>

      {result && (
        <div className="rounded-xl border p-4 text-center font-medium">
          {result}
        </div>
      )}
    </div>
  );
}
