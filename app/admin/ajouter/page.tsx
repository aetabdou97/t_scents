'use client'
import Link from 'next/link';

export default function AjouterProduit() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border">
      <h1 className="text-2xl font-bold mb-6">Ajouter un nouveau produit</h1>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom du produit</label>
          <input type="text" className="w-full border rounded-md p-2" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
          <select className="w-full border rounded-md p-2">
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
            <option value="mixte">Mixte</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Prix de base (€)</label>
          <input type="number" step="0.01" className="w-full border rounded-md p-2" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Formats (séparés par une virgule, ex: 15ml, 30ml)</label>
          <input type="text" className="w-full border rounded-md p-2" placeholder="15ml, 30ml, 50ml" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes olfactives</label>
          <input type="text" className="w-full border rounded-md p-2" placeholder="Bois de Santal, Rose..." required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea rows={4} className="w-full border rounded-md p-2" required></textarea>
        </div>

        <div className="pt-4 flex justify-end space-x-4">
          <Link href="/admin" className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50 transition">
            Annuler
          </Link>
          <button type="submit" className="px-6 py-2 bg-bleu-nuit text-white font-bold rounded-md hover:bg-blue-900 transition">
            Enregistrer le produit
          </button>
        </div>
      </form>
    </div>
  )
}
