"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "meji-cash-balance";

export function useWallet() {
  const [balance, setBalance] = useState<number>(0);

  // Cargar saldo al iniciar
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setBalance(Number(saved));
    } else {
      setBalance(200); // saldo inicial
    }
  }, []);

  // Guardar saldo cada vez que cambia
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, balance.toString());
  }, [balance]);

  const addCredits = (amount: number) => {
    setBalance((prev) => prev + amount);
  };

  const resetCredits = () => {
    setBalance(0);
  };

  return {
    balance,
    addCredits,
    resetCredits,
  };
}
