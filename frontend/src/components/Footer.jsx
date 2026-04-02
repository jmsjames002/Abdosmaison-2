import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Colonne 1 : À Propos */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">À Propos d'AbdosMaison</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Bienvenue sur AbdosMaison ! Je suis un passionné de fitness convaincu que la transformation physique 
              ne doit pas dépendre d'un abonnement coûteux. Ce site partage des méthodes concrètes pour se bâtir 
              une sangle abdominale solide depuis chez soi avec les objets du quotidien.
            </p>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">Liens</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#systeme-d" className="hover:text-white transition-colors">Matériel Maison</a></li>
              <li><a href="#workout" className="hover:text-white transition-colors">Programme</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Légal & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">Informations Légales</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {/* Le lien pointe vers la question de confidentialité dans la FAQ pour éviter une page vide */}
              <li><a href="#faq" className="hover:text-white transition-colors">Politique de Confidentialité</a></li>
              <li className="italic text-xs mt-4">Contact : contact@abdosmaison.fit</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} AbdosMaison. Tous droits réservés.</p>
        </div>
