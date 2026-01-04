"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "meji-cash-wallet";

export function useWallet() {
  const [balance, setBalance] = useState<number>(0);

  // 🔹 Cargar saldo al iniciar
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      setBalance(Number(stored));
    } else {
      setBalance(200); // saldo inicial
      localStorage.setItem(STORAGE_KEY, "200");
    }
  }, []);

  // 🔹 Guardar saldo cada vez que cambia
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, balance.toString());
  }, [balance]);

  const addCredits = (amount: number) => {
    setBalance((prev) => Math.max(prev + amount, 0));
  };

  const resetCredits = () => {
    setBalance(200);
  };

  return {
    balance,
    addCredits,
    resetCredits,
  };
}

