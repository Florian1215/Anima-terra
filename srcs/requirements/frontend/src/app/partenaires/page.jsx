import Image from 'next/image';

export const metadata = {
  title: 'Partenaires - Anima Terra',
  description: 'Nos partenaires et collaborations.',
};

export default function Partenaires() {
  const partners = [
    {
      name: 'Office de Tourisme des Hautes-Alpes',
      logo: '/images/partners/ot-hautes-alpes.png',
      description: 'Partenaire officiel pour la promotion du tourisme dans les Hautes-Alpes.',
      website: 'https://www.hautes-alpes.net',
    },
    {
      name: 'Fédération Française de Spéléologie',
      logo: '/images/partners/ffs.png',
      description: 'Membre actif de la FFS, nous participons à la promotion et au développement de la spéléologie en France.',
      website: 'https://www.ffspeleo.fr',
    },
    {
      name: 'Parc National des Écrins',
      logo: '/images/partners/pne.png',
      description: 'Collaboration pour des sorties respectueuses de l\'environnement dans le Parc National.',
      website: 'https://www.ecrins-parcnational.fr',
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-5 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-secondary mb-4">
            Nos Partenaires
          </h1>
          <p className="text-xl text-secondary/90">
            Ensemble pour promouvoir la spéléologie
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-5xl">
          <p className="text-center text-text/80 mb-12 max-w-2xl mx-auto">
            Anima Terra collabore avec plusieurs organisations et institutions pour promouvoir
            la spéléologie dans les Hautes-Alpes et garantir des pratiques respectueuses de
            l'environnement.
          </p>

          <div className="space-y-8 mb-16">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="flex items-center justify-center bg-secondary/10 rounded-lg p-6">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-4xl">🏔️</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-center">
                    <h2 className="font-heading text-2xl text-primary mb-3">
                      {partner.name}
                    </h2>
                    <p className="text-text/80 mb-4">
                      {partner.description}
                    </p>
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline inline-flex items-center gap-2"
                      >
                        Visiter le site web
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Devenir partenaire */}
          <div className="bg-accent/10 rounded-lg p-8 text-center">
            <h2 className="font-heading text-3xl text-primary mb-4">
              Devenir partenaire
            </h2>
            <p className="text-text/80 mb-6 max-w-2xl mx-auto">
              Vous êtes une organisation, une institution ou une entreprise et vous souhaitez
              collaborer avec Anima Terra ? N'hésitez pas à nous contacter pour discuter
              d'un partenariat.
            </p>
            <a
              href="/contact?objet=Partenariat"
              className="inline-block bg-accent text-primary px-8 py-3 rounded-full font-semibold hover:bg-[#d49215] hover:shadow-lg transition-all duration-200"
            >
              Nous contacter
            </a>
          </div>

          {/* Engagements */}
          <div className="mt-16">
            <h2 className="font-heading text-3xl text-primary text-center mb-8">
              Nos engagements
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="font-heading text-xl text-primary mb-3">Environnement</h3>
                <p className="text-text/80">
                  Respect des milieux souterrains et sensibilisation à la protection de la nature.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="font-heading text-xl text-primary mb-3">Formation</h3>
                <p className="text-text/80">
                  Formation continue et partage des connaissances avec la communauté spéléo.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="font-heading text-xl text-primary mb-3">Collaboration</h3>
                <p className="text-text/80">
                  Travail en réseau avec les acteurs locaux pour un tourisme responsable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
