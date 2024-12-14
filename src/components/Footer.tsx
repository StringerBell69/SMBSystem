import React from 'react';
import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">SMB System</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Solutions innovantes de développement web et accompagnement digital pour
              entreprises en croissance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Accueil</Link></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#Tarification" className="text-gray-400 hover:text-white">Tarification</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="/mentions-legales" className="text-gray-400 hover:text-white">Mentions légales</Link></li>
              <li><Link to="/politique-confidentialite" className="text-gray-400 hover:text-white">Politique de confidentialité</Link></li>
              <li><Link to="/cgu" className="text-gray-400 hover:text-white">CGU</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Externes</h3>
            <ul className="space-y-2">
            <li><Link to="https://danilo-portfolio.netlify.app/" className="text-gray-400 hover:text-white">Portfolio</Link></li>

            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SMB System. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
