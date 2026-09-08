import Image from 'next/image';

export const metadata = {
  title: 'Galerie Photo - Anima Terra',
  description: 'Découvrez nos plus belles photos de spéléologie dans les Hautes-Alpes.',
};

export default function GaleriePhoto() {
  const photos = [
    {
      src: '/images/gallery/cave-1.jpg',
      alt: 'Stalactites dans une grotte',
      title: 'Concrétions magnifiques',
    },
    {
      src: '/images/gallery/cave-2.jpg',
      alt: 'Spéléologue en descente',
      title: 'Descente en rappel',
    },
    {
      src: '/images/gallery/cave-3.jpg',
      alt: 'Rivière souterraine',
      title: 'Rivière souterraine',
    },
    {
      src: '/images/gallery/cave-4.jpg',
      alt: 'Grande salle',
      title: 'Salle cathédrale',
    },
    {
      src: '/images/gallery/cave-5.jpg',
      alt: 'Passage étroit',
      title: 'Méandre technique',
    },
    {
      src: '/images/gallery/cave-6.jpg',
      alt: 'Groupe de spéléologues',
      title: 'Exploration en groupe',
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-5 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-secondary mb-4">
            Galerie Photo
          </h1>
          <p className="text-xl text-secondary/90">
            Nos plus belles images du monde souterrain
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-6xl">
          <p className="text-center text-text/80 mb-12 max-w-2xl mx-auto">
            Plongez dans l'univers fascinant de la spéléologie à travers notre galerie photo.
            Ces images capturent la beauté et la majesté des grottes des Hautes-Alpes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-heading text-lg">{photo.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-16 text-center bg-white rounded-lg shadow-lg p-8">
            <h2 className="font-heading text-3xl text-primary mb-4">
              Suivez nos aventures
            </h2>
            <p className="text-text/80 mb-6">
              Retrouvez-nous sur Instagram pour découvrir nos dernières explorations et photos exclusives
            </p>
            <a
              href="https://instagram.com/animaterra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @animaterra
            </a>
          </div>

          {/* Photo Credits */}
          <div className="mt-8 text-center text-sm text-text/60">
            <p>Photos : Anima Terra - Tous droits réservés</p>
          </div>
        </div>
      </section>
    </div>
  );
}
