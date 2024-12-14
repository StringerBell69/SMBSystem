import React from 'react';

const CGU = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mt-10 mb-8">Conditions Générales d'Utilisation</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Objet</h2>
        <p className="mb-4">
          Les présentes CGU régissent l'utilisation du site web smbsystem.me et définissent
          les conditions d'accès et d'utilisation des services proposés par SMB System.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Services proposés</h2>
        <p className="mb-4">
          SMB System propose des services de développement web, notamment :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Création de sites web</li>
          <li>Développement d'applications</li>
          <li>Services de maintenance</li>
          <li>Conseil en solutions digitales</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Responsabilités</h2>
        <p className="mb-4">
          SMB System s'engage à fournir les services avec diligence et selon les règles de l'art,
          étant précisé qu'il pèse sur elle une obligation de moyens, à l'exclusion de toute
          obligation de résultat.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Propriété intellectuelle</h2>
        <p className="mb-4">
          Tous les éléments du site sont protégés par le droit de la propriété intellectuelle.
          Toute reproduction, représentation ou diffusion est interdite sauf autorisation expresse.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Modification des CGU</h2>
        <p className="mb-4">
          SMB System se réserve le droit de modifier les présentes CGU à tout moment.
          Les utilisateurs seront informés des modifications par tout moyen approprié.
        </p>
      </section>
    </div>
  );
};

export default CGU;