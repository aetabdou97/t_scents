import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Découvrez votre prochaine <span className="text-or">signature olfactive</span>
        </h1>
        <p className="text-gray-300 max-w-lg mx-auto">
          Des huiles parfumées intenses et élégantes, conçues pour laisser une empreinte inoubliable.
        </p>
        <Link href="/boutique" className="inline-block bg-or text-noir-mat px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition">
          Découvrir les senteurs
        </Link>
      </section>

      {/* Catégories rapides */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {['Homme', 'Femme', 'Mixte'].map((cat) => (
          <Link key={cat} href={`/boutique?categorie=${cat.toLowerCase()}`} className="bg-bleu-nuit p-6 rounded-lg border border-or/20 hover:border-or transition shadow-lg">
            <h3 className="font-semibold text-lg">{cat}</h3>
          </Link>
        ))}
      </section>

      {/* Bestsellers section could go here */}

      {/* Pourquoi nous choisir ? */}
      <section className="bg-bleu-nuit p-8 rounded-xl border border-or/10 shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-or">Pourquoi nous choisir ?</h2>
        <ul className="space-y-4 text-gray-300 max-w-md mx-auto list-disc list-inside">
          <li>Qualité premium et tenue longue durée</li>
          <li>Prix accessibles</li>
          <li>Livraison rapide et soignée</li>
          <li>Commande simple et directe via WhatsApp</li>
        </ul>
      </section>

      {/* Avis clients */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-or">L'avis de nos clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-noir-mat border border-gray-800 p-6 rounded-lg">
            <p className="italic mb-4">"Une tenue exceptionnelle, je n'ai eu que des compliments toute la journée."</p>
            <p className="font-bold text-sm text-or">- Sarah M.</p>
          </div>
          <div className="bg-noir-mat border border-gray-800 p-6 rounded-lg">
            <p className="italic mb-4">"Commande reçue rapidement. L'Oud est parfaitement équilibré. Je recommande !"</p>
            <p className="font-bold text-sm text-or">- Thomas K.</p>
          </div>
        </div>
      </section>

      {/* Call to action Final */}
      <section className="text-center bg-gradient-to-r from-bleu-nuit to-noir-mat border border-or/30 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Une senteur vous plaît ?</h2>
        <p className="mb-6 text-gray-300">Commandez directement sur WhatsApp en moins de 2 minutes.</p>
        <Link href="/boutique" className="bg-or text-noir-mat px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition">
          Voir le catalogue
        </Link>
      </section>
    </div>
  )
}
