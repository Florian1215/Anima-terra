import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - Anima Terra',
  description: 'Actualités, récits d\'exploration et conseils en spéléologie.',
};

export default function Blog() {
  const articles = [
    {
      slug: '/2025/07/24/histoire-dun-logo',
      title: 'Histoire d\'un logo',
      date: '24 juillet 2025',
      image: '/images/logo-creation.jpg',
      excerpt: 'Découvrez les coulisses de la création du logo Anima Terra et sa signification profonde.',
      category: 'À propos',
    },
    {
      slug: '/2024/12/01/beaume-a-belard',
      title: 'Baume à Bélard',
      date: '1 décembre 2024',
      image: '/images/beaume-belard.jpg',
      excerpt: 'Récit d\'une exploration mémorable dans la Baume à Bélard, une cavité emblématique des Hautes-Alpes.',
      category: 'Exploration',
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-5 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-secondary mb-4">
            Blog
          </h1>
          <p className="text-xl text-secondary/90">
            Actualités et récits d'exploration
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Link href={article.slug}>
                  <div className="relative h-64">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-text/60 mb-2">{article.date}</div>
                    <h2 className="font-heading text-2xl text-primary mb-3 hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-text/80 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="text-accent font-semibold">
                      Lire la suite →
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Empty state message */}
          <div className="text-center mt-12 bg-secondary/20 rounded-lg p-8">
            <h3 className="font-heading text-2xl text-primary mb-3">
              Plus d'articles à venir !
            </h3>
            <p className="text-text/80">
              Nous publions régulièrement des récits d'exploration, des conseils techniques
              et des actualités sur la spéléologie dans les Hautes-Alpes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
