import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "ContextFlow Legal", description: "Legal document assistant with code-aware chunking for contracts, case files, and compliance docs." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="antialiased">{children}</body></html>);
}
