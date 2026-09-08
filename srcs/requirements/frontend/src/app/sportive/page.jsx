import Image from 'next/image';
import Button from '@/components/Button';

export const metadata = {
  title: 'Sortie Sportive - Anima Terra',
  description: 'Pour les aventuriers en quête de sensations fortes et de défis techniques. Spéléologie sportive dans les Hautes-Alpes.',
};

export default function Sportive() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/80 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/sportive-illustration.jpg"
            alt="Sortie Sportive"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-20 container mx-auto px-5 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-secondary mb-4">
            Sortie Sportive
          </h1>
          <p className="text-xl text-secondary/90">
            Sensations fortes et défis techniques
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="font-heading text-3xl text-primary mb-6">
              L'aventure s'intensifie
            </h2>
            <p className="text-text/80 text-lg mb-4">
              Les sorties sportives s'adressent aux aventuriers en quête de sensations fortes et
              de défis techniques. Progression en verticale, passages étroits, traversées de rivières
              souterraines... Une expérience intense dans des grottes plus techniques.
            </p>
            <p className="text-text/80 text-lg">
              Une bonne condition physique est requise, mais aucune expérience préalable n'est nécessaire.
              Le guide s'adapte au niveau du groupe et assure votre sécurité à chaque instant.
            </p>
          </div>

          {/* Informations pratiques */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-secondary/20 rounded-lg p-6">
              <h3 className="font-heading text-2xl text-primary mb-4">Informations</h3>
              <ul className="space-y-3 text-text">
                <li className="flex items-start">
                  <span className="text-accent mr-2">👥</span>
                  <span><strong>Âge minimum :</strong> 12 ans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">⏱️</span>
                  <span><strong>Durée :</strong> 4 à 6 heures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">📊</span>
                  <span><strong>Niveau :</strong> Intermédiaire, bonne condition physique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">👨‍👩‍👧‍👦</span>
                  <span><strong>Groupe :</strong> 3 à 6 personnes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">💰</span>
                  <span><strong>Tarif :</strong> À partir de 60€/personne</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/20 rounded-lg p-6">
              <h3 className="font-heading text-2xl text-primary mb-4">Inclus</h3>
              <ul className="space-y-3 text-text">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Équipement complet (casque, lampe, combinaison, baudrier)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Matériel technique (cordes, mousquetons, descendeur)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Encadrement par un guide diplômé d'État</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Formation aux techniques de progression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Assurance RC professionnelle</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Techniques abordées */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="font-heading text-3xl text-primary mb-6">Techniques abordées</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading text-xl text-primary mb-3">Progression verticale</h4>
                <p className="text-text/80">
                  Descente et remontée sur corde avec baudrier et descendeur. Apprentissage des
                  techniques de sécurité en milieu vertical.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-xl text-primary mb-3">Passages étroits</h4>
                <p className="text-text/80">
                  Franchissement de méandres et de passages étroits nécessitant des techniques
                  de reptation et de contorsion.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-xl text-primary mb-3">Traversées aquatiques</h4>
                <p className="text-text/80">
                  Franchissement de rivières souterraines, progression dans l'eau avec
                  équipement adapté.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-xl text-primary mb-3">Orientation</h4>
                <p className="text-text/80">
                  Lecture de topographie souterraine, repérage dans un réseau complexe,
                  utilisation d'instruments de mesure.
                </p>
              </div>
            </div>
          </div>

          {/* Grottes proposées */}
          <div className="bg-secondary/20 rounded-lg p-8 mb-8">
            <h3 className="font-heading text-3xl text-primary mb-6">Exemples de grottes</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-heading text-xl text-primary mb-2">Grotte du Trou de Sigaud</h4>
                <p className="text-text/80">
                  Un classique des Hautes-Alpes avec un beau puits d'entrée de 30m et un réseau
                  horizontal varié. Idéale pour découvrir la verticalité.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-xl text-primary mb-2">Aven du Rousti</h4>
                <p className="text-text/80">
                  Magnifique aven avec plusieurs puits successifs et de belles concrétions.
                  Un parcours technique et esthétique.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-xl text-primary mb-2">Grotte de la Forêne</h4>
                <p className="text-text/80">
                  Réseau aquatique avec passages en immersion et magnifiques galeries sculptées
                  par l'eau. Une expérience unique.
                </p>
              </div>
            </div>
          </div>

          {/* À prévoir */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="font-heading text-3xl text-primary mb-6">À prévoir</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-text">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Vêtements chauds et techniques (polaire, sous-vêtements)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Chaussures de randonnée montantes en bon état</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Eau (1,5L minimum) et en-cas énergétiques</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Vêtements de rechange et serviette</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Sac étanche pour les affaires sensibles</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Certificat médical (pour mineurs)</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="font-heading text-3xl text-primary mb-4">
              Prêt pour l'aventure sportive ?
            </h3>
            <p className="text-text/80 mb-6">
              Contactez-nous pour réserver votre sortie sportive
            </p>
            <Button href="/contact" variant="primary">
              Réserver cette sortie
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
