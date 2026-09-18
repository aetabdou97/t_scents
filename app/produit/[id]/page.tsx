'use client'
import { useState } from 'react'

const numWhatsApp = "33600000000";

// Mock data
const produitMock = {
  id: 1,
  nom: 'Oud Mystérieux',
  description: 'Un parfum profond et boisé avec des notes épicées et cuirées, parfait pour les soirées.',
  notes: 'Bois de Oud, Rose, Ambre, Vanille',
  prix: 35,
  formats: ['15ml', '30ml', '50ml'],
  image: '/placeholder.jpg'
}

export default function ProduitPage({ params }: { params: { id: string } }) {
  // We use mock for now
  const produit = produitMock;
  
  const [formatSelectionne, setFormatSelectionne] = useState(produit.formats[0])
  const [quantite, setQuantite] = useState(1)

  const message = `Bonjour, je souhaite commander :
- Produit : ${produit.nom}
- Format : ${formatSelectionne}
- Quantité : ${quantite}`
  
  const lienWhatsApp = `https://wa.me/${numWhatsApp}?text=${encodeURIComponent(message)}`

  return (
    <div className="bg-fond-clair text-noir-mat rounded-xl overflow-hidden mt-8 max-w-3xl mx-auto shadow-2xl flex flex-col md:flex-row">
      
      {/* Image Section */}
      <div className="md:w-1/2 h-80 md:h-auto bg-gray-300 flex items-center justify-center text-gray-500">
        [Grande photo du produit]
      </div>
      
      {/* Détails Section */}
      <div className="md:w-1/2 p-6 md:p-8 space-y-6 flex flex-col justify-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-bleu-nuit">{produit.nom}</h1>
          <p className="text-or font-bold text-2xl mt-2">À partir de {produit.prix} €</p>
        </div>

        <p className="text-gray-700 leading-relaxed">{produit.description}</p>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <span className="font-bold text-bleu-nuit block mb-1">Notes olfactives :</span> 
          <span className="text-gray-600">{produit.notes}</span>
        </div>

        <div className="space-y-5 pt-4">
          <div>
            <label className="font-bold block mb-2 text-sm text-gray-700 uppercase tracking-wider">Format</label>
            <div className="flex flex-wrap gap-2">
              {produit.formats.map(format => (
                <button 
                  key={format}
                  onClick={() => setFormatSelectionne(format)}
                  className={`px-4 py-2 rounded-md border transition ${formatSelectionne === format ? 'bg-bleu-nuit text-white border-bleu-nuit shadow-md' : 'bg-white hover:bg-gray-100 border-gray-300 text-gray-700'}`}
                >
                  {format}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="font-bold block mb-2 text-sm text-gray-700 uppercase tracking-wider">Quantité</label>
            <div className="flex items-center">
              <button 
                onClick={() => setQuantite(Math.max(1, quantite - 1))}
                className="bg-gray-200 px-3 py-2 rounded-l-md hover:bg-gray-300 transition text-gray-700 font-bold"
              >-</button>
              <input 
                type="number" 
                min="1" 
                value={quantite} 
                readOnly
                className="border-y border-gray-200 p-2 w-16 text-center text-gray-800 font-semibold focus:outline-none"
              />
              <button 
                onClick={() => setQuantite(quantite + 1)}
                className="bg-gray-200 px-3 py-2 rounded-r-md hover:bg-gray-300 transition text-gray-700 font-bold"
              >+</button>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <a 
            href={lienWhatsApp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-green-500 text-white font-bold py-4 rounded-lg hover:bg-green-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Commander sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
