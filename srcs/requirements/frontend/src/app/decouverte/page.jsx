import Image from 'next/image';
import Button from '@/components/Button';

export const metadata = {
  title: 'Sortie Découverte - Anima Terra',
  description: 'Idéales pour une première approche du monde souterrain et adaptées aux plus jeunes. Découvrez la spéléologie en douceur.',
};

export default function Decouverte() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/80 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/decouverte-illustration.jpg"
            alt="Sortie Découverte"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-20 container mx-auto px-5 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-secondary mb-4">
            Sortie Découverte
          </h1>
          <p className="text-xl text-secondary/90">
            Première approche du monde souterrain
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="font-heading text-3xl text-primary mb-6">
              Une aventure accessible à tous
            </h2>
            <p className="text-text/80 text-lg mb-4">
              Les sorties découverte sont idéales pour une première approche du monde souterrain.
              Adaptées aux plus jeunes et aux débutants, elles permettent de découvrir les beautés
              naturelles des grottes des Hautes-Alpes dans un cadre sécurisé et convivial.
            </p>
            <p className="text-text/80 text-lg">
              Vous explorerez des galeries faciles d'accès, découvrirez les formations géologiques
              comme les stalactites et stalagmites, et apprendrez les bases de la spéléologie.
            </p>
          </div>

          {/* Informations pratiques */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-secondary/20 rounded-lg p-6">
              <h3 className="font-heading text-2xl text-primary mb-4">Informations</h3>
              <ul className="space-y-3 text-text">
                <li className="flex items-start">
                  <span className="text-accent mr-2">👥</span>
                  <span><strong>Âge minimum :</strong> 6 ans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">⏱️</span>
                  <span><strong>Durée :</strong> 2 à 3 heures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">📊</span>
                  <span><strong>Niveau :</strong> Facile, accessible à tous</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">👨‍👩‍👧‍👦</span>
                  <span><strong>Groupe :</strong> 4 à 8 personnes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">💰</span>
                  <span><strong>Tarif :</strong> À partir de 35€/personne</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/20 rounded-lg p-6">
              <h3 className="font-heading text-2xl text-primary mb-4">Inclus</h3>
              <ul className="space-y-3 text-text">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Équipement complet (casque, lampe, combinaison)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Encadrement par un guide diplômé d'État</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Assurance RC professionnelle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Briefing sécurité et technique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Photos de l'exploration (sur demande)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Programme */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="font-heading text-3xl text-primary mb-6">Programme de la sortie</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-heading">
                  1
                </div>
                <div>
                  <h4 className="font-heading text-xl text-primary mb-2">Accueil et préparation</h4>
                  <p className="text-text/80">
                    Rendez-vous au point de départ, présentation du matériel et consignes de sécurité.
                    Distribution de l'équipement adapté à chaque participant.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-heading">
                  2
                </div>
                <div>
                  <h4 className="font-heading text-xl text-primary mb-2">Approche de la grotte</h4>
                  <p className="text-text/80">
                    Courte marche d'approche (10-15 minutes) à travers un paysage magnifique des Hautes-Alpes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-heading">
                  3
                </div>
                <div>
                  <h4 className="font-heading text-xl text-primary mb-2">Exploration souterraine</h4>
                  <p className="text-text/80">
                    Découverte progressive du monde souterrain : galeries, concrétions, vie dans la grotte.
                    Le guide adapte le rythme au groupe et répond à toutes vos questions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-heading">
                  4
                </div>
                <div>
                  <h4 className="font-heading text-xl text-primary mb-2">Retour et débriefing</h4>
                  <p className="text-text/80">
                    Retour à l'air libre, partage des impressions et nettoyage du matériel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* À prévoir */}
          <div className="bg-secondary/20 rounded-lg p-8 mb-8">
            <h3 className="font-heading text-3xl text-primary mb-6">À prévoir</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-text">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Vêtements chauds (polaire, sous-vêtements techniques)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Chaussures de randonnée montantes</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Eau et petite collation</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Sac pour mettre ses affaires sales après</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="font-heading text-3xl text-primary mb-4">
              Prêt à découvrir le monde souterrain ?
            </h3>
            <p className="text-text/80 mb-6">
              Réservez dès maintenant votre sortie découverte
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
