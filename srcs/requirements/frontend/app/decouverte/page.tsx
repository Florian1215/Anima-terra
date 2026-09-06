import Link from 'next/link';

import { ContentShell } from '@/components/content-shell';

const activities = [
  {
    title: 'Baume des Forcenés',
    text:
      'La Baume des Forcenés est l’une des entrées du plus vaste réseau du Dévoluy, avec plus de six kilomètres de galeries ! Après quelques mètres de ramping à l’entrée, plusieurs larges galeries s’offriront à nous. Le parcours pourra donc être adapté selon vos envies et votre niveau.',
    image:
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80',
    meta: ['Dévoluy', 'Demi-journée', '45 min', 'À partir de 8 ans'],
  },
  {
    title: 'Puits des Bans – Petite boucle',
    text:
      'Pour les plus jeunes et ceux qui préfèrent une sortie avec peu de marche d’approche, la petite boucle est une première aventure sous terre idéale. Après être passés par l’entrée, nous traverserons un lac d’une dizaine de mètres à bord d’un bateau gonflable.',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    meta: ['Céüse', 'Découverte', '1h', 'Accessible'],
  },
  {
    title: 'Via souterrata de la Tune',
    text:
      'La via souterraine de la Tune est une sortie sportive et ludique idéale pour les amateurs de sensations. Au programme : ponts de singe, escalade et descentes en rappel. De quoi se défouler tout en profitant de l’esthétique de cette cavité.',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    meta: ['Sportive', 'Boucle', '2h30', 'En groupe'],
  },
];

export const metadata = {
  title: 'Découverte',
  description: 'Sorties découverte de spéléologie en famille ou entre amis dans les Hautes-Alpes.',
};

export default function DecouvertePage() {
  return (
    <ContentShell title="Découverte" intro="Des parcours accessibles, variés et magnifiques pour découvrir la spéléologie en toute sérénité.">
      <div className="space-y-10">
        {activities.map((activity, index) => (
          <article
            key={activity.title}
            className="overflow-hidden rounded-[18px] border border-[#e7d7ad] bg-[#f8f3e9] shadow-[0_10px_30px_rgba(58,42,31,0.08)]"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-[300px] md:h-full">
                <img src={activity.image} alt={activity.title} className="h-full w-full object-cover" />
                {index === 0 ? <div className="absolute inset-0 bg-black/10" /> : null}
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <h2 className="text-3xl font-black tracking-[-0.05em] text-[#3c2a1e] md:text-4xl">{activity.title}</h2>
                <p className="mt-4 text-lg leading-8 text-[#57493f]">{activity.text}</p>
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
