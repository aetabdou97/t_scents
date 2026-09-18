import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "T_Scents - Signature Olfactive",
  description: "Découvrez notre collection d'huiles parfumées.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-noir-mat text-white min-h-screen flex flex-col`}>
        <header className="bg-bleu-nuit border-b border-or/20 p-4 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.jpg" 
                alt="Logo T_Scents" 
                width={50} 
                height={50} 
                className="rounded-full object-cover border-2 border-or/50"
              />
            </Link>
            <nav className="space-x-4 text-sm md:text-base hidden sm:block">
              <Link href="/" className="hover:text-or transition">Accueil</Link>
              <Link href="/boutique" className="hover:text-or transition">Boutique</Link>
              <Link href="/a-propos" className="hover:text-or transition">À propos</Link>
              <Link href="/contact" className="hover:text-or transition">Contact</Link>
            </nav>
            {/* Menu mobile simplifié */}
            <nav className="space-x-4 text-sm sm:hidden flex">
               <Link href="/boutique" className="hover:text-or transition">Boutique</Link>
               <Link href="/contact" className="hover:text-or transition">Contact</Link>
            </nav>
          </div>
        </header>
        
        <main className="flex-grow max-w-4xl mx-auto w-full p-4">
          {children}
        </main>

        <footer className="bg-bleu-nuit p-6 text-center text-sm text-gray-400 mt-12 border-t border-or/20">
          <p>© {new Date().getFullYear()} - Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
