"use client";

import { createContext, useContext, useEffect, useState } from "react";

type WalletContextType = {
  balance: number;
  addCredits: (amount: number) => void;
  resetCredits: () => void;
};

const WalletContext = createContext<WalletContextType | null>(null);

const STORAGE_KEY = "meji-cash-wallet";

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [balance, setBalance] = useState(0);

  // Cargar desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setBalance(Number(stored));
    } else {
      setBalance(200);
      localStorage.setItem(STORAGE_KEY, "200");
    }
  }, []);

  // Guardar cada cambio
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, balance.toString());
  }, [balance]);

  const addCredits = (amount: number) => {
    setBalance((prev) => prev + amount);
  };

  const resetCredits = () => {
    setBalance(200);
  };

  return (
    <WalletContext.Provider
      value={{ balance, addCredits, resetCredits }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within WalletProvider");
  }
  return context;
}
