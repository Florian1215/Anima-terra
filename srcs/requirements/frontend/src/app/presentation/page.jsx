import Image from 'next/image';
import Button from '@/components/Button';

export const metadata = {
  title: 'Présentation - Anima Terra',
  description: 'Découvrez Anima Terra et son guide passionné de spéléologie dans les Hautes-Alpes.',
};

export default function Presentation() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-5 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-secondary mb-4">
            Présentation
          </h1>
          <p className="text-xl text-secondary/90">
            Qui sommes-nous ?
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="font-heading text-3xl text-primary mb-6">
              Anima Terra - L'âme de la terre
            </h2>
            <p className="text-text/80 text-lg mb-4">
              Anima Terra est née d'une passion pour le monde souterrain et d'une volonté de partager
              les merveilles cachées des Hautes-Alpes. Notre mission est de vous faire découvrir la
              spéléologie dans les meilleures conditions de sécurité et de convivialité.
            </p>
            <p className="text-text/80 text-lg">
              Que vous soyez débutant ou spéléologue confirmé, nous adaptons nos sorties à votre
              niveau et à vos envies pour vous offrir une expérience inoubliable.
            </p>
          </div>

          {/* Votre guide */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/guide-profile.jpg"
                  alt="Votre guide"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl text-primary mb-4">Votre guide</h2>
              <p className="text-text/80 mb-4">
                Guide diplômé d'État, je pratique la spéléologie depuis plus de 15 ans. Passionné
                par le monde souterrain, j'ai exploré des centaines de grottes à travers la France
                et l'Europe.
              </p>
              <p className="text-text/80 mb-4">
                Ma connaissance approfondie des cavités des Hautes-Alpes me permet de vous proposer
                des sorties variées et adaptées à tous les niveaux, dans un cadre sécurisé.
              </p>
              <div className="space-y-2 text-text">
                <p>✓ Diplôme d'État - Accompagnateur en Moyenne Montagne</p>
                <p>✓ Brevet d'État d'Éducateur Sportif - Spéléologie</p>
                <p>✓ Formation premiers secours PSE2</p>
                <p>✓ Plus de 15 ans d'expérience</p>
              </div>
            </div>
          </div>

          {/* Notre philosophie */}
          <div className="bg-secondary/20 rounded-lg p-8 mb-8">
            <h3 className="font-heading text-3xl text-primary mb-6">Notre philosophie</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading text-xl text-primary mb-3">🌿 Respect de l'environnement</h4>
                <p className="text-text/80">
                  Les grottes sont des milieux fragiles. Nous respectons la faune et la flore
                  souterraines et sensibilisons nos participants à la préservation de ces écosystèmes.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-xl text-primary mb-3">🛡️ Sécurité avant tout</h4>
                <p className="text-text/80">
                  Matériel professionnel certifié, briefings détaillés, groupes limités :
                  votre sécurité est notre priorité absolue.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-xl text-primary mb-3">👥 Groupes restreints</h4>
                <p className="text-text/80">
                  Nous limitons la taille des groupes pour garantir une expérience de qualité,
                  un encadrement personnalisé et le respect des cavités.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-xl text-primary mb-3">📚 Pédagogie</h4>
                <p className="text-text/80">
                  Au-delà de l'aventure, nous partageons nos connaissances sur la géologie,
                  l'hydrologie et la biologie souterraine.
                </p>
              </div>
            </div>
          </div>

          {/* Zone d'intervention */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="font-heading text-3xl text-primary mb-6">Zone d'intervention</h3>
            <p className="text-text/80 mb-4">
              Nous opérons principalement dans les Hautes-Alpes, un territoire riche en cavités
              remarquables :
            </p>
            <ul className="space-y-2 text-text/80">
              <li>• Massif du Dévoluy</li>
              <li>• Parc National des Écrins</li>
              <li>• Massif des Cerces</li>
              <li>• Vercors et Diois</li>
              <li>• Chartreuse (sur demande)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="font-heading text-3xl text-primary mb-4">
              Prêt à explorer avec nous ?
            </h3>
            <p className="text-text/80 mb-6">
              Contactez-nous pour organiser votre sortie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Nous contacter
              </Button>
              <Button href="/decouverte" variant="secondary">
                Voir nos sorties
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
