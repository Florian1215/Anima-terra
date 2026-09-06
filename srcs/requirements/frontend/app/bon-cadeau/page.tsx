import Link from 'next/link';

import { ContentShell } from '@/components/content-shell';

export const metadata = {
  title: 'Bon cadeau',
  description: 'Offrez une aventure spéléo au cœur des Hautes-Alpes avec un bon cadeau Anima Terra.',
};

export default function BonCadeauPage() {
  return (
    <ContentShell title="Offrez l’inoubliable : une aventure spéléo au cœur des Hautes-Alpes" intro="Pour un anniversaire, Noël ou simplement pour faire plaisir, offrez un bon cadeau pour une sortie spéléo, que ce soit pour une première découverte ou pour quelqu’un déjà à l’aise sous terre.">
      <div className="rounded-[18px] border border-[#e7d7ad] bg-[#f8f3ea] p-8 shadow-[0_10px_30px_rgba(58,42,31,0.08)]">
        <p className="text-lg leading-8 text-[#56493f] md:text-2xl md:leading-[1.8]">
          De la demi-journée à la journée complète, en solo ou en petit groupe, le bon cadeau s’adapte à toutes vos envies. Une façon simple d’offrir la découverte d’un milieu à part et une expérience hors du temps.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[14px] bg-[#efe6d4] p-6">
            <h2 className="text-2xl font-black tracking-[-0.05em] text-[#3d2a1e]">Vous souhaitez commander un bon cadeau ?</h2>
            <p className="mt-3 text-lg leading-8 text-[#53473d]">Je vous conseille la sortie la plus adaptée selon votre budget, votre niveau et l’expérience recherchée.</p>
          </div>
          <div className="rounded-[14px] bg-[#efe6d4] p-6">
            <h2 className="text-2xl font-black tracking-[-0.05em] text-[#3d2a1e]">Des questions à propos du bon cadeau ?</h2>
            <p className="mt-3 text-lg leading-8 text-[#53473d]">Rendez-vous sur la page Q&amp;R à la rubrique &quot;Bon cadeau&quot; ou contactez-moi directement.</p>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <Link href="/contact" className="inline-flex rounded-full bg-[#4b382b] px-5 py-3 text-lg font-bold text-[#f7efe4] transition hover:bg-[#3d2d22]">
            Commander
          </Link>
          <Link href="/questions-frequentes" className="inline-flex rounded-full border border-[#4b382b] px-5 py-3 text-lg font-bold text-[#4b382b] transition hover:bg-[#efe6d4]">
            Questions fréquentes
          </Link>
        </div>
      </div>
    </ContentShell>
  );
}
