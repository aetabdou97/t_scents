import Link from 'next/link';

// Mock data (will be replaced by Prisma query)
const produits = [
  { id: 1, nom: 'Oud Suprême', categorie: 'mixte', prix: 35, image: '/placeholder.jpg', formats: '30ml, 50ml' },
  { id: 2, nom: 'Rose Éternelle', categorie: 'femme', prix: 28, image: '/placeholder.jpg', formats: '30ml' },
  { id: 3, nom: 'Bois d\'Ambre', categorie: 'homme', prix: 30, image: '/placeholder.jpg', formats: '30ml, 50ml' },
  { id: 4, nom: 'Vanille Noir', categorie: 'mixte', prix: 25, image: '/placeholder.jpg', formats: '15ml, 30ml' },
];

export default function Boutique({
  searchParams,
}: {
  searchParams: { categorie?: string }
}) {
  const categorieFilter = searchParams.categorie;
  
  const produitsFiltres = categorieFilter 
    ? produits.filter(p => p.categorie === categorieFilter)
    : produits;

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-or">Notre Collection</h1>
      
      {/* Filtres */}
      <div className="flex justify-center space-x-2 sm:space-x-4 mb-12">
        <Link href="/boutique" className={`px-4 py-2 rounded-full border border-or/30 transition ${!categorieFilter ? 'bg-or text-noir-mat font-bold' : 'hover:bg-bleu-nuit'}`}>
          Tous
        </Link>
        <Link href="/boutique?categorie=homme" className={`px-4 py-2 rounded-full border border-or/30 transition ${categorieFilter === 'homme' ? 'bg-or text-noir-mat font-bold' : 'hover:bg-bleu-nuit'}`}>
          Homme
        </Link>
        <Link href="/boutique?categorie=femme" className={`px-4 py-2 rounded-full border border-or/30 transition ${categorieFilter === 'femme' ? 'bg-or text-noir-mat font-bold' : 'hover:bg-bleu-nuit'}`}>
          Femme
        </Link>
        <Link href="/boutique?categorie=mixte" className={`px-4 py-2 rounded-full border border-or/30 transition ${categorieFilter === 'mixte' ? 'bg-or text-noir-mat font-bold' : 'hover:bg-bleu-nuit'}`}>
          Mixte
        </Link>
      </div>

      {/* Grille Produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produitsFiltres.map((produit) => (
          <Link key={produit.id} href={`/produit/${produit.id}`} className="block group">
            <div className="bg-fond-clair text-noir-mat rounded-xl overflow-hidden shadow-lg transition transform group-hover:-translate-y-1 group-hover:shadow-xl">
              <div className="h-64 bg-gray-300 w-full flex items-center justify-center text-gray-500">
                [Photo {produit.nom}]
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg text-bleu-nuit mb-1">{produit.nom}</h3>
                <p className="text-sm text-gray-500 mb-2">{produit.formats}</p>
                <p className="text-or font-bold text-xl">{produit.prix} €</p>
                <div className="mt-4 bg-noir-mat text-white py-2 rounded-lg text-sm font-semibold group-hover:bg-or group-hover:text-noir-mat transition">
                  Voir le produit
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {produitsFiltres.length === 0 && (
        <div className="text-center text-gray-400 py-12">
          Aucun produit trouvé dans cette catégorie pour le moment.
        </div>
      )}
    </div>
  )
}
