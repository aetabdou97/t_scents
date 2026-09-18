import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen -mx-4 -mt-4">
      <header className="bg-white border-b p-4 flex justify-between items-center shadow-sm">
        <Link href="/admin" className="text-xl font-bold text-bleu-nuit">
          Administration Parfums
        </Link>
        <Link href="/" className="text-sm text-gray-500 hover:text-black">
          Retour au site public
        </Link>
      </header>
      <main className="p-8 max-w-5xl mx-auto">
        {children}
      </main>
    </div>
  );
}
