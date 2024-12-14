import React from 'react';

const MentionsLegales = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mt-10 mb-8">Mentions Légales</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Informations légales</h2>
        <p className="mb-4">
          Le site web smbsystem.me est édité par :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>SMB System</li>
          <li>Entrepreneur individuel</li>
          {/* <li>Siège social : [Adresse]</li> */}
          <li>Email : daniel@smbsystem.me</li>
          {/* <li>Téléphone : [Numéro]</li>
          <li>SIRET : [Numéro SIRET]</li> */}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Hébergement</h2>
        <p>
          Le site est hébergé par Netlify, Inc.<br />
          44 Montgomery Street, Suite 300<br />
          San Francisco, California 94104<br />
          United States
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Propriété intellectuelle</h2>
        <p className="mb-4">
          L'ensemble du contenu de ce site (textes, images, logos, etc.) est protégé par le droit d'auteur.
          Toute reproduction ou représentation, totale ou partielle, est interdite sans autorisation préalable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Protection des données personnelles</h2>
        <p className="mb-4">
          Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d'un droit d'accès,
          de rectification, de suppression et d'opposition aux données vous concernant.
        </p>
      </section>
    </div>
  );
};

export default MentionsLegales;