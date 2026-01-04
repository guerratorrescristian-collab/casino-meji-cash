"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "meji-cash-balance";

export function useWallet() {
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setBalance(Number(saved));
  }, []);

  const save = (value: number) => {
    setBalance(value);
    localStorage.setItem(STORAGE_KEY, value.toString());
  };

  const addCredits = (amount: number) => {
    save(balance + amount);
  };

  const resetCredits = () => {
    save(0);
  };

  return {
    balance,
    addCredits,
    resetCredits,
  };
}
