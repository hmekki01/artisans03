// app/layout.tsx
import './globals.css';
import type { ReactNode } from "react";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
		<Footer />
      </body>
    </html>
  );
}