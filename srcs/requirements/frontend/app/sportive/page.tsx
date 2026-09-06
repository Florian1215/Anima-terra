import Link from 'next/link';

import { ContentShell } from '@/components/content-shell';

const activities = [
  {
    title: 'Baume de France',
    text:
      'Pour ceux qui recherchent une cavité accessible offrant une petite descente en rappel, la Baume de France est un excellent choix. Après un passage bas à l’entrée, il n’est plus nécessaire de se baisser jusqu’au fond. Il suffit de se laisser glisser sur les cordes pour atteindre une magnifique galerie aux belles dimensions.',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    meta: ['Ouvert', 'Sortie sportive', '2h', 'Rappel'],
  },
  {
    title: 'Traversée Gnocchi - Forcenés',
    text:
      'Une traversée complète et variée, avec une logique simple : entrer par le haut pour sortir 200 mètres plus bas. L’itinéraire relie le Chourum des Gnocchis à la Baume des Forcenés, avec une descente d’environ 200 mètres, en partie sur corde.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    meta: ['200 m', 'Technique', 'Multiples passages', 'Progression'],
  },
  {
    title: 'Chourum de la Parza',
    text:
      'Cette cavité propose une belle sortie verticale, marquée par un puits d’environ 70 mètres. L’entrée se fait donc en rappel, plein vide. Une fois en bas, nous posons le pied sur une épaisse couche de neige, puis nous admirons le puits que nous venons de descendre.',
    image:
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    meta: ['70 m', 'Vertical', 'Rappel', 'À l’ancienne'],
  },
  {
    title: 'Puits des Bans – Salle à manger',
    text:
      'Sportif et varié, le parcours qui mène à la “salle à manger” du Puits des Bans ravira aussi bien les grands que les petits sportifs. D’abord, il faudra traverser un petit lac souterrain en bateau. Ensuite, les descentes en rappel s’enchaînent jusqu’à atteindre, à 100 mètres sous terre, la grande salle.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    meta: ['100 m', 'Bateau', 'Rappels', 'Sensation'],
  },
];

export const metadata = {
  title: 'Sportive',
  description: 'Sorties sportives de spéléologie, avec rappels, traversées et salles impressionnantes.',
};

export default function SportivePage() {
  return (
    <ContentShell title="Sportive" intro="Des sorties plus techniques, plus verticales, mais toujours encadrées et adaptables à votre niveau.">
      <div className="grid gap-8">
        {activities.map((activity) => (
          <article key={activity.title} className="overflow-hidden rounded-[18px] border border-[#e5d4b0] bg-[#f8f3ea] shadow-[0_10px_30px_rgba(58,42,31,0.08)]">
            <div className="grid md:grid-cols-[1.1fr_1.3fr]">
              <img src={activity.image} alt={activity.title} className="h-full min-h-[260px] w-full object-cover" />
              <div className="p-6 md:p-8">
                <h2 className="text-3xl font-black tracking-[-0.05em] text-[#3d2a1e] md:text-4xl">{activity.title}</h2>
                <p className="mt-4 text-lg leading-8 text-[#56493f]">{activity.text}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {activity.meta.map((item) => (
                    <span key={item} className="rounded-full border border-[#d7b36f] bg-[#efe6d4] px-3 py-1 text-sm font-semibold text-[#3d2a1e]">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex rounded-full bg-[#4b382b] px-5 py-3 text-lg font-bold text-[#f7efe4] transition hover:bg-[#3d2d22]">
                    Réserver
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </ContentShell>
  );
}
