export default function AboutPage() {
  return (
    <div className="py-8 max-w-2xl mx-auto space-y-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-or mb-8">Notre Histoire</h1>
      
      <section className="bg-bleu-nuit p-8 rounded-xl border border-or/20 space-y-6 shadow-xl">
        <h2 className="text-2xl font-bold">L'art de la parfumerie</h2>
        <p className="text-gray-300 leading-relaxed">
          Chez T_Scents, nous croyons que le parfum est bien plus qu'une simple odeur. C'est une signature, une extension de votre personnalité, un souvenir gravé dans l'air.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Née d'une passion pour les matières premières nobles, notre maison s'attache à sélectionner les meilleures essences à travers le monde : l'Oud profond d'Orient, la Rose délicate, la Vanille gourmande...
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-or border-b border-or/20 pb-2">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-noir-mat p-6 border border-gray-800 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Qualité Sans Compromis</h3>
            <p className="text-sm text-gray-400">Nous utilisons uniquement des huiles de la plus haute qualité pour garantir une tenue exceptionnelle tout au long de la journée.</p>
          </div>
          <div className="bg-noir-mat p-6 border border-gray-800 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Accessibilité</h3>
            <p className="text-sm text-gray-400">Le luxe ne devrait pas être hors de prix. Nous limitons les intermédiaires pour vous offrir l'excellence à un prix juste.</p>
          </div>
          <div className="bg-noir-mat p-6 border border-gray-800 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Simplicité</h3>
            <p className="text-sm text-gray-400">Pas de processus d'achat complexe. Vous aimez un parfum ? Vous le commandez en un clic sur WhatsApp.</p>
          </div>
          <div className="bg-noir-mat p-6 border border-gray-800 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Service Client Dédié</h3>
            <p className="text-sm text-gray-400">Nous sommes joignables directement pour vous conseiller et vous accompagner dans le choix de votre signature olfactive.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
