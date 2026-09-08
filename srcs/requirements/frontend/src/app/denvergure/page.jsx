import Image from 'next/image';
import Button from '@/components/Button';

export const metadata = {
  title: 'Sortie D\'envergure - Anima Terra',
  description: 'Des explorations exceptionnelles pour les spéléologues expérimentés. Grandes cavités et réseaux complexes des Hautes-Alpes.',
};

export default function Denvergure() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/80 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/denvergure-illustration.jpg"
            alt="Sortie D'envergure"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-20 container mx-auto px-5 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-secondary mb-4">
            Sortie D'envergure
          </h1>
          <p className="text-xl text-secondary/90">
            Explorations exceptionnelles
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="font-heading text-3xl text-primary mb-6">
              Pour spéléologues expérimentés
            </h2>
            <p className="text-text/80 text-lg mb-4">
              Les sorties d'envergure sont réservées aux spéléologues expérimentés et aux personnes
              ayant une excellente condition physique. Ces explorations vous mènent dans les plus
              belles et grandes cavités des Hautes-Alpes.
            </p>
            <p className="text-text/80 text-lg">
              Grandes verticales, longs réseaux, traversées intégrales... Ces sorties demandent une
              préparation physique et mentale importante. L'engagement est réel et les récompenses
              à la hauteur : paysages souterrains grandioses et sensations inoubliables.
            </p>
          </div>

          {/* Informations pratiques */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-secondary/20 rounded-lg p-6">
              <h3 className="font-heading text-2xl text-primary mb-4">Informations</h3>
              <ul className="space-y-3 text-text">
                <li className="flex items-start">
                  <span className="text-accent mr-2">👥</span>
                  <span><strong>Prérequis :</strong> Expérience en spéléologie requise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">⏱️</span>
                  <span><strong>Durée :</strong> Journée complète (6 à 10 heures)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">📊</span>
                  <span><strong>Niveau :</strong> Avancé, excellente condition physique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">👨‍👩‍👧‍👦</span>
                  <span><strong>Groupe :</strong> 2 à 4 personnes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">💰</span>
                  <span><strong>Tarif :</strong> Sur devis (à partir de 100€)</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/20 rounded-lg p-6">
              <h3 className="font-heading text-2xl text-primary mb-4">Inclus</h3>
              <ul className="space-y-3 text-text">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Équipement complet haut de gamme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Matériel technique professionnel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Guide expérimenté connaissant parfaitement la cavité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Briefing détaillé et topographie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Assurances et sécurité renforcée</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Grandes cavités */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="font-heading text-3xl text-primary mb-6">Grandes cavités</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-heading text-xl text-primary mb-2">Gouffre Berger</h4>
                <p className="text-text/80 mb-2">
                  L'un des gouffres les plus célèbres au monde. Descente à -1000m dans un réseau
                  exceptionnel. Traversée intégrale sur 2-3 jours pour les plus motivés.
                </p>
                <div className="text-sm text-text/60">
                  Dénivelé : -1000m | Durée : 2-3 jours | Difficulté : Très difficile
                </div>
              </div>

              <div>
                <h4 className="font-heading text-xl text-primary mb-2">Réseau de la Pierre Saint-Martin</h4>
                <p className="text-text/80 mb-2">
                  Un des plus grands réseaux souterrains d'Europe. Exploration de salles gigantesques
                  et de galeries majestueuses.
                </p>
                <div className="text-sm text-text/60">
                  Développement : 90km | Dénivelé : -1400m | Difficulté : Très difficile
                </div>
              </div>

              <div>
                <h4 className="font-heading text-xl text-primary mb-2">Système du Chaudron</h4>
                <p className="text-text/80 mb-2">
                  Magnifique réseau local avec de belles verticales et des galeries variées.
                  Idéal pour une première sortie d'envergure.
                </p>
                <div className="text-sm text-text/60">
                  Dénivelé : -450m | Durée : 1 jour | Difficulté : Difficile
                </div>
              </div>
            </div>
          </div>

          {/* Conditions requises */}
          <div className="bg-secondary/20 rounded-lg p-8 mb-8">
            <h3 className="font-heading text-3xl text-primary mb-6">Conditions requises</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading text-xl text-primary mb-3">Expérience technique</h4>
                <ul className="space-y-2 text-text/80">
                  <li>• Maîtrise de la progression sur corde</li>
                  <li>• Autonomie en spéléologie</li>
                  <li>• Connaissance des manœuvres de sécurité</li>
                  <li>• Expérience de sorties longues</li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-xl text-primary mb-3">Condition physique</h4>
                <ul className="space-y-2 text-text/80">
                  <li>• Excellente forme cardiovasculaire</li>
                  <li>• Endurance pour 6-10h d'effort</li>
                  <li>• Résistance au froid et à l'humidité</li>
                  <li>• Capacité à gérer le stress</li>
                </ul>
              </div>
            </div>
          </div>

          {/* À prévoir */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="font-heading text-3xl text-primary mb-6">À prévoir</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-text">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Sous-vêtements techniques thermiques</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Chaussures de spéléo ou rando montantes</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Eau (2-3L) et nourriture énergétique</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Matériel personnel si souhaité (éclairage, baudrier)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Pharmacie personnelle</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Certificat médical de non contre-indication</span>
              </li>
            </ul>
          </div>

          {/* Avertissement */}
          <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6 mb-8">
            <h3 className="font-heading text-xl text-primary mb-3">⚠️ Important</h3>
            <p className="text-text/80">
              Les sorties d'envergure nécessitent une préparation physique et technique importante.
              Un entretien préalable avec le guide est obligatoire pour évaluer votre niveau et
              adapter la sortie. Les conditions météo et hydrologiques peuvent entraîner l'annulation
              ou le report de la sortie pour des raisons de sécurité.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="font-heading text-3xl text-primary mb-4">
              Prêt pour l'exploration ultime ?
            </h3>
            <p className="text-text/80 mb-6">
              Contactez-nous pour discuter de votre projet d'exploration
            </p>
            <Button href="/contact" variant="primary">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
