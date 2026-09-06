import { ContentShell } from '@/components/content-shell';
import { galleryImages } from '@/lib/site-data';

export const metadata = {
  title: 'Galerie photo',
  description: 'Quelques images de sorties souterraines et d’aventures spéléologiques.',
};

export default function GalleryPage() {
  return (
    <ContentShell title="Galerie photo" intro="Retrouvez ici mes photos et celles de mes coéquipiers, souvenirs précieux de nos aventures.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="group overflow-hidden rounded-[14px] border border-[#e7d7ad] bg-[#f8f3ea] shadow-[0_8px_20px_rgba(58,42,31,0.08)]"
          >
            <img
              src={image}
              alt={`Image de sortie spéléo ${index + 1}`}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </ContentShell>
  );
}
