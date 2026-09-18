export default function ContactPage() {
  return (
    <div className="py-8 max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-or mb-4">Contactez-nous</h1>
      <p className="text-center text-gray-400 mb-12">Une question ? Un conseil sur le choix de votre parfum ? N'hésitez pas à nous joindre.</p>
      
      <div className="grid gap-6">
        {/* WhatsApp */}
        <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-bleu-nuit rounded-xl border border-green-500/30 hover:border-green-500 transition shadow-lg group">
          <div className="bg-green-500 text-white p-4 rounded-full mr-6 group-hover:scale-110 transition transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/>
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-1">WhatsApp</h2>
            <p className="text-gray-300">Le moyen le plus rapide pour nous joindre. Commandes et conseils.</p>
            <p className="text-or mt-2 font-mono">06 00 00 00 00</p>
          </div>
        </a>

        {/* Instagram */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-bleu-nuit rounded-xl border border-pink-500/30 hover:border-pink-500 transition shadow-lg group">
          <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white p-4 rounded-full mr-6 group-hover:scale-110 transition transform">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Instagram</h2>
            <p className="text-gray-300">Suivez nos nouveautés et les avis de la communauté.</p>
            <p className="text-or mt-2 font-mono">@t_scents</p>
          </div>
        </a>
      </div>

      <section className="bg-noir-mat p-8 border border-gray-800 rounded-xl mt-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">Informations de Livraison</h2>
        <p className="text-gray-300">Nous livrons principalement en **France Métropolitaine**.</p>
        <p className="text-gray-300 mt-2">Pour une livraison internationale, merci de nous contacter directement sur WhatsApp afin de vous fournir un devis personnalisé.</p>
      </section>
    </div>
  )
}
