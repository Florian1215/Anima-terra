import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata = {
  title: 'Baume à Bélard - Anima Terra Blog',
  description: 'Récit d\'une exploration mémorable dans la Baume à Bélard, une cavité emblématique des Hautes-Alpes.',
};

export default function BaumeABelard() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/70 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/beaume-belard.jpg"
            alt="Baume à Bélard"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-20 container mx-auto px-5 text-center">
          <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Exploration
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4">
            Baume à Bélard
          </h1>
          <p className="text-lg text-secondary/90">
            1 décembre 2024
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="container mx-auto px-5 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-accent hover:underline">Accueil</Link>
            <span className="mx-2 text-text/50">/</span>
            <Link href="/blog" className="text-accent hover:underline">Blog</Link>
            <span className="mx-2 text-text/50">/</span>
            <span className="text-text/70">Baume à Bélard</span>
          </nav>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="font-heading text-3xl text-primary mb-4">
                Une exploration hivernale mémorable
              </h2>
              <p className="text-text/80 mb-4">
                La Baume à Bélard est une cavité emblématique des Hautes-Alpes que je rêvais
                d'explorer depuis longtemps. Ce premier décembre, les conditions étaient parfaites :
                temps sec depuis plusieurs jours, températures fraîches mais clémentes, et un groupe
                de quatre passionnés motivés pour l'aventure.
              </p>
              <p className="text-text/80 mb-4">
                Située dans un cadre magnifique, cette grotte offre un parcours varié et technique
                qui ravit les spéléologues expérimentés. Dès l'entrée, le spectacle commence avec
                une galerie majestueuse aux parois sculptées par l'eau au fil des millénaires.
              </p>
            </div>

            <div className="bg-secondary/20 rounded-lg p-8 mb-8">
              <h3 className="font-heading text-2xl text-primary mb-4">Le parcours</h3>
              <p className="text-text/80 mb-4">
                L'exploration commence par une descente progressive dans un chaos rocheux impressionnant.
                Les blocs monumentaux créent un labyrinthe naturel où il faut faire preuve de vigilance
                et d'agilité. La progression se fait dans un silence presque religieux, seulement
                ponctué par le bruit de nos pas et l'écho de nos voix.
              </p>
              <p className="text-text/80 mb-4">
                Après une heure de progression, nous atteignons la salle principale. Quel spectacle !
                Une cathédrale souterraine s'ouvre devant nous, avec des dimensions qui donnent le vertige.
                Les faisceaux de nos lampes se perdent dans l'obscurité de cette immensité minérale.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="font-heading text-2xl text-primary mb-4">Les concrétions</h3>
              <p className="text-text/80 mb-4">
                La Baume à Bélard recèle des trésors de concrétions. Stalactites et stalagmites par
                milliers, certaines formant des colonnes impressionnantes, d'autres créant des draperies
                translucides d'une finesse extraordinaire. Chaque recoin révèle une nouvelle merveille
                géologique.
              </p>
              <p className="text-text/80 mb-4">
                Nous prenons le temps d'admirer, de photographier, d'observer les détails de ces
                formations qui se sont construites goutte après goutte pendant des dizaines de milliers
                d'années. C'est un moment de contemplation pure, un privilège rare dans notre monde
                moderne toujours pressé.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary/10 rounded-lg p-6">
                <h4 className="font-heading text-xl text-primary mb-3">Informations techniques</h4>
                <ul className="space-y-2 text-text/80">
                  <li><strong>Dénivelé :</strong> -120 mètres</li>
                  <li><strong>Développement :</strong> ~800 mètres</li>
                  <li><strong>Durée :</strong> 5 heures</li>
                  <li><strong>Difficulté :</strong> Sportive+</li>
                  <li><strong>Équipement :</strong> Casque, éclairage, combinaison</li>
                </ul>
              </div>
              <div className="bg-secondary/10 rounded-lg p-6">
                <h4 className="font-heading text-xl text-primary mb-3">Accès</h4>
                <p className="text-text/80 mb-2">
                  <strong>Localisation :</strong> Hautes-Alpes (05)
                </p>
                <p className="text-text/80 mb-2">
                  <strong>Marche d'approche :</strong> 30 minutes
                </p>
                <p className="text-text/80">
                  <strong>Meilleure saison :</strong> Automne et hiver (éviter le printemps)
                </p>
              </div>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6 mb-8">
              <h4 className="font-heading text-xl text-primary mb-3">⚠️ Recommandations</h4>
              <p className="text-text/80">
                Cette cavité nécessite une bonne expérience en spéléologie. La progression est
                technique et demande une bonne condition physique. Ne jamais explorer seul et
                toujours vérifier les conditions météorologiques avant de partir. Le respect
                de l'environnement souterrain est primordial : ne rien toucher, ne rien laisser.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="font-heading text-2xl text-primary mb-4">Conclusion</h3>
              <p className="text-text/80 mb-4">
                Cette exploration de la Baume à Bélard restera gravée dans ma mémoire. Au-delà de
                l'aspect sportif et technique, c'est une expérience humaine et contemplative qui
                nous reconnecte avec les forces de la nature et le temps long de la géologie.
              </p>
              <p className="text-text/80">
                Si vous avez l'expérience et l'envie de découvrir cette merveille souterraine,
                n'hésitez pas à me contacter pour organiser une sortie. Je serais ravi de partager
                avec vous la magie de ce lieu exceptionnel.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-primary text-secondary rounded-lg p-8 text-center">
              <h3 className="font-heading text-2xl mb-4">
                Envie d'explorer ?
              </h3>
              <p className="mb-6">
                Découvrez nos sorties sportives et d'envergure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/sportive" variant="primary">
                  Sorties sportives
                </Button>
                <Button href="/denvergure" variant="secondary">
                  Sorties d'envergure
                </Button>
              </div>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-12 text-center">
            <Link href="/blog" className="text-accent hover:underline inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour au blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
