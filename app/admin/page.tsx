'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-lg shadow-md border">
        <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (password === 'admin123') setIsAuthenticated(true);
          else alert('Mot de passe incorrect');
        }}>
          <input 
            type="password" 
            placeholder="Mot de passe" 
            className="w-full border p-2 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-bleu-nuit text-white py-2 rounded font-bold">Se connecter</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Liste des Produits</h1>
        <Link href="/admin/ajouter" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition">
          + Ajouter un produit
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-4 font-semibold text-gray-600">ID</th>
              <th className="p-4 font-semibold text-gray-600">Nom</th>
              <th className="p-4 font-semibold text-gray-600">Catégorie</th>
              <th className="p-4 font-semibold text-gray-600">Prix</th>
              <th className="p-4 font-semibold text-gray-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">1</td>
              <td className="p-4 font-medium">Oud Mystérieux</td>
              <td className="p-4">Mixte</td>
              <td className="p-4">35 €</td>
              <td className="p-4 text-right space-x-2">
                <button className="text-blue-500 hover:underline text-sm">Modifier</button>
                <button className="text-red-500 hover:underline text-sm">Supprimer</button>
              </td>
            </tr>
            {/* Lignes générées par Prisma viendront ici */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
