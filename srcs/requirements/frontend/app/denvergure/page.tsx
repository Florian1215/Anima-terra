import Link from 'next/link';

import { ContentShell } from '@/components/content-shell';

const tours = [
  'Puits des Bans – Siphon numéro 1',
  'Chourum du Chaudron – Puits de 30 mètres',
  'Chourum du Chaudron – Salle de l’air libre',
  'Trou de Sigaud (temporairement indisponible)',
  'Chourum de la Combe des Buissons',
  'Chourum Clot',
];

export const metadata = {
  title: 'D’envergure',
  description: 'Les plus grandes aventures souterraines et les parcours les plus exigeants.',
};

export default function DenvergurePage() {
  return (
    <ContentShell title="D’envergure" intro="Des parcours plus longs, plus exigeants et plus spectaculaires pour les plus sportifs d’entre vous.">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-[18px] border border-[#e7d7ad] bg-[#f8f3e9] shadow-[0_10px_30px_rgba(58,42,31,0.08)]">
          <img
            src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=80"
            alt="Cavité en profondeur"
            className="h-[420px] w-full object-cover"
          />
        </div>

        <div className="space-y-4 rounded-[18px] border border-[#e7d7ad] bg-[#f8f3e9] p-6 shadow-[0_10px_30px_rgba(58,42,31,0.08)]">
          <h2 className="text-3xl font-black tracking-[-0.05em] text-[#3d2a1e]">Parcours emblématiques</h2>
          <ul className="space-y-3 text-lg text-[#57493f]">
            {tours.map((tour) => (
              <li key={tour} className="rounded-lg bg-[#efe6d4] px-4 py-3">
                {tour}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-[18px] bg-[#efe6d4] p-8 text-lg leading-8 text-[#52453d] shadow-[0_10px_30px_rgba(58,42,31,0.08)]">
        Les parcours d’envergure sont pensés pour les profils les plus sportifs, avec de plus longues traversées, des puits verticaux, des dénivelés marqués et des paysages souterrains d’exception. Chaque sortie est préparée en fonction du niveau du groupe pour garantir une expérience intense, sûre et mémorable.
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/contact" className="inline-flex rounded-full bg-[#4b382b] px-6 py-3 text-lg font-bold text-[#f7efe4] transition hover:bg-[#3d2d22]">
          Nous contacter
        </Link>
      </div>
    </ContentShell>
  );
}
