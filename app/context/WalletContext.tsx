"use client";

import { createContext, useContext, useEffect, useState } from "react";

type WalletContextType = {
  balance: number;
  addCredits: (amount: number) => void;
  resetCredits: () => void;
};

const WalletContext = createContext<WalletContextType | null>(null);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [balance, setBalance] = useState<number>(0);

  // 🔹 Cargar desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem("wallet-balance");
    if (saved !== null) {
      setBalance(Number(saved));
    }
  }, []);

  // 🔹 Guardar en localStorage cada cambio
  useEffect(() => {
    localStorage.setItem("wallet-balance", balance.toString());
  }, [balance]);

  const addCredits = (amount: number) => {
    setBalance((prev) => prev + amount);
  };

  const resetCredits = () => {
    setBalance(0);
  };

  return (
    <WalletContext.Provider value={{ balance, addCredits, resetCredits }}>
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
