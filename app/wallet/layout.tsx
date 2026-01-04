import type { ReactNode } from "react";

export default function WalletLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="max-w-4xl mx-auto p-6">
      {children}
    </section>
  );
}
