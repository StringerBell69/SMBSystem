import React from 'react';

const PolitiqueConfidentialite = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mt-10 mb-8">Politique de Confidentialité</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Collecte des données</h2>
        <p className="mb-4">
          Nous collectons les informations que vous nous fournissez directement, notamment :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>Messages envoyés via le formulaire de contact</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Utilisation des données</h2>
        <p className="mb-4">
          Les données collectées sont utilisées pour :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Répondre à vos demandes de contact</li>
          <li>Vous envoyer des informations relatives à nos services</li>
          <li>Améliorer notre site web et nos services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Protection des données</h2>
        <p className="mb-4">
          Conformément au RGPD, nous mettons en œuvre des mesures de sécurité appropriées
          pour protéger vos données personnelles contre tout accès, modification,
          divulgation ou destruction non autorisée.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Vos droits</h2>
        <p className="mb-4">
          Vous disposez des droits suivants concernant vos données personnelles :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Droit d'accès</li>
          <li>Droit de rectification</li>
          <li>Droit à l'effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité</li>
          <li>Droit d'opposition</li>
        </ul>
      </section>
    </div>
  );
};

export default PolitiqueConfidentialite;