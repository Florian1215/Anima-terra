import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata = {
  title: 'Histoire d\'un logo - Anima Terra Blog',
  description: 'Découvrez les coulisses de la création du logo Anima Terra et sa signification profonde.',
};

export default function HistoireDunLogo() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/80 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/logo-creation.jpg"
            alt="Histoire du logo Anima Terra"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-20 container mx-auto px-5 text-center">
          <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            À propos
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4">
            Histoire d'un logo
          </h1>
          <p className="text-lg text-secondary/90">
            24 juillet 2025
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
            <span className="text-text/70">Histoire d'un logo</span>
          </nav>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="font-heading text-3xl text-primary mb-4">
                Anima Terra : L'âme de la terre
              </h2>
              <p className="text-text/80 mb-4">
                Quand j'ai décidé de créer ma structure d'accompagnement en spéléologie, le choix
                du nom s'est imposé naturellement : <strong>Anima Terra</strong>, qui signifie en
                latin "l'âme de la terre". Ce nom résume parfaitement ma philosophie et ma vision
                de la spéléologie.
              </p>
              <p className="text-text/80 mb-4">
                Mais un nom ne suffit pas à créer une identité. Il fallait un logo, une image qui
                incarnerait visuellement cette connexion profonde avec le monde souterrain. C'est
                ainsi qu'a commencé l'aventure de la création du logo Anima Terra.
              </p>
            </div>

            <div className="bg-secondary/20 rounded-lg p-8 mb-8">
              <h3 className="font-heading text-2xl text-primary mb-4">Le concept</h3>
              <p className="text-text/80 mb-4">
                Je voulais un logo qui évoque immédiatement le monde souterrain tout en restant
                élégant et moderne. Après de nombreux croquis et réflexions, plusieurs éléments
                clés se sont imposés :
              </p>
              <ul className="space-y-3 text-text/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>
                    <strong>La stalactite :</strong> Symbole iconique du monde souterrain, elle
                    représente le temps long, la patience, la beauté naturelle.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>
                    <strong>La montagne :</strong> Référence directe aux Hautes-Alpes, notre
                    terrain de jeu, et lien entre le monde de surface et le monde souterrain.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>
                    <strong>La simplicité :</strong> Un design épuré, facilement reconnaissable,
                    qui fonctionne en noir et blanc comme en couleur.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="font-heading text-2xl text-primary mb-4">Les couleurs</h3>
              <p className="text-text/80 mb-4">
                Le choix des couleurs a fait l'objet d'une attention particulière. Chaque teinte
                a été choisie pour son symbolisme et sa capacité à évoquer le monde souterrain :
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#443627] flex-shrink-0"></div>
                  <div>
                    <h4 className="font-heading text-lg text-primary mb-2">Brun terre (#443627)</h4>
                    <p className="text-text/80 text-sm">
                      Couleur principale, elle évoque la terre, la roche, le minéral. C'est une
                      couleur chaude et profonde qui inspire la confiance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#FCEFCB] flex-shrink-0 border border-primary/20"></div>
                  <div>
                    <h4 className="font-heading text-lg text-primary mb-2">Beige clair (#FCEFCB)</h4>
                    <p className="text-text/80 text-sm">
                      Couleur secondaire rappelant la calcite, les concrétions, la lumière de
                      nos lampes dans l'obscurité.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#E9A319] flex-shrink-0"></div>
                  <div>
                    <h4 className="font-heading text-lg text-primary mb-2">Orange doré (#E9A319)</h4>
                    <p className="text-text/80 text-sm">
                      Couleur d'accent qui apporte dynamisme et énergie. Elle évoque aussi
                      l'or, symbole de ce qui est précieux - comme ces moments sous terre.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#F8F6F2] flex-shrink-0 border border-primary/20"></div>
                  <div>
                    <h4 className="font-heading text-lg text-primary mb-2">Blanc cassé (#F8F6F2)</h4>
                    <p className="text-text/80 text-sm">
                      Couleur de fond douce et naturelle qui n'agresse pas l'œil et crée
                      une atmosphère sereine.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 rounded-lg p-8 mb-8">
              <h3 className="font-heading text-2xl text-primary mb-4">La typographie</h3>
              <p className="text-text/80 mb-4">
                Pour le nom "Anima Terra", j'ai choisi la police <strong>Francois One</strong>, une
                typographie sans serif avec du caractère. Elle est à la fois moderne et intemporelle,
                robuste comme la montagne, mais avec des courbes qui rappellent les formes organiques
                des grottes.
              </p>
              <p className="text-text/80">
                Pour les textes courants, <strong>Poppins</strong> offre une excellente lisibilité
                tout en restant élégante et contemporaine.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="font-heading text-2xl text-primary mb-4">Le processus de création</h3>
              <p className="text-text/80 mb-4">
                La création du logo a pris plusieurs mois, entre les premiers croquis sur papier,
                les essais numériques, les ajustements de proportions et de couleurs. J'ai travaillé
                avec une graphiste talentueuse qui a su traduire ma vision en un design professionnel.
              </p>
              <p className="text-text/80 mb-4">
                Nous avons testé de nombreuses variantes : avec et sans texte, en couleur et en
                noir et blanc, en différentes tailles. Chaque version a été évaluée pour sa
                lisibilité, son impact visuel, sa mémorabilité.
              </p>
              <p className="text-text/80">
                Le résultat final est un logo dont je suis très fier. Il représente fidèlement
                l'esprit d'Anima Terra : l'exploration respectueuse du monde souterrain, la
                connexion avec la nature, le partage de passion.
              </p>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6 mb-8">
              <h4 className="font-heading text-xl text-primary mb-3">💡 Le saviez-vous ?</h4>
              <p className="text-text/80">
                Le logo Anima Terra existe en deux versions : une version "claire" pour les fonds
                foncés et une version "sombre" pour les fonds clairs. Cette flexibilité permet de
                l'utiliser dans tous les contextes tout en préservant sa lisibilité et son impact.
              </p>
            </div>

            <div className="bg-primary text-secondary rounded-lg p-8 mb-8">
              <h3 className="font-heading text-2xl mb-4">
                Ce que représente ce logo pour moi
              </h3>
              <p className="mb-4">
                Plus qu'une simple image, ce logo est le symbole de tout ce que représente
                Anima Terra : une invitation à explorer, à découvrir, à s'émerveiller. Il incarne
                ma passion pour la spéléologie et mon engagement à partager cette passion avec
                respect et authenticité.
              </p>
              <p>
                Chaque fois que je le vois sur mes cartes de visite, mon site web ou mes
                équipements, je ressens une fierté particulière. Ce logo, c'est l'identité
                visuelle de ma mission : vous faire découvrir l'âme de la terre.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="font-heading text-2xl text-primary mb-4">
                Découvrez Anima Terra
              </h3>
              <p className="text-text/80 mb-6">
                Maintenant que vous connaissez l'histoire de notre logo, découvrez nos sorties
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/presentation" variant="secondary">
                  En savoir plus
                </Button>
                <Button href="/decouverte" variant="primary">
                  Réserver une sortie
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
