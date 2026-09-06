import Link from 'next/link';

import { ContentShell } from '@/components/content-shell';

export const metadata = {
  title: 'Contact',
  description: 'Contactez Anima Terra pour réserver une sortie ou obtenir des informations.',
};

export default function ContactPage() {
  return (
    <ContentShell title="Contact" intro="Dans la mesure du possible, merci de privilégier le contact par téléphone.">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[18px] border border-[#e7d7ad] bg-[#efe6d4] p-8 shadow-[0_10px_30px_rgba(58,42,31,0.08)]">
          <h2 className="text-3xl font-black tracking-[-0.05em] text-[#3d2a1e]">Réservation &amp; renseignement</h2>
          <p className="mt-6 text-4xl font-black tracking-[-0.08em] text-[#3d2a1e]">06 50 11 87 25</p>
          <div className="mt-8 space-y-3 text-lg text-[#56493f]">
            <p>Disponible pour des sorties en famille, en duo ou en petit groupe.</p>
            <p>Réservation rapide et conseils personnalisés selon votre niveau.</p>
          </div>
          <div className="mt-8">
            <Link href="/questions-frequentes" className="inline-flex rounded-full bg-[#4b382b] px-5 py-3 text-lg font-bold text-[#f7efe4] transition hover:bg-[#3d2d22]">
              Questions fréquentes
            </Link>
          </div>
        </div>

        <div className="rounded-[18px] border border-[#e7d7ad] bg-[#f8f3ea] p-8 shadow-[0_10px_30px_rgba(58,42,31,0.08)]">
          <h2 className="text-3xl font-black tracking-[-0.05em] text-[#3d2a1e]">Formulaire de contact</h2>
          <form className="mt-6 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-lg font-medium text-[#3d2a1e]">
                Nom
                <input className="mt-2 w-full rounded-xl border border-[#d8c8a4] bg-white px-4 py-3 text-base outline-none focus:border-[#b68f47]" placeholder="Votre nom" />
              </label>
              <label className="block text-lg font-medium text-[#3d2a1e]">
                Email
                <input type="email" className="mt-2 w-full rounded-xl border border-[#d8c8a4] bg-white px-4 py-3 text-base outline-none focus:border-[#b68f47]" placeholder="votre@email.com" />
              </label>
            </div>

            <label className="block text-lg font-medium text-[#3d2a1e]">
              Sujet
              <input className="mt-2 w-full rounded-xl border border-[#d8c8a4] bg-white px-4 py-3 text-base outline-none focus:border-[#b68f47]" placeholder="Réservation, bon cadeau, question..." />
            </label>

            <label className="block text-lg font-medium text-[#3d2a1e]">
              Message
              <textarea rows={6} className="mt-2 w-full rounded-xl border border-[#d8c8a4] bg-white px-4 py-3 text-base outline-none focus:border-[#b68f47]" placeholder="Décrivez votre demande" />
            </label>

            <button type="button" className="inline-flex rounded-full bg-[#4b382b] px-6 py-3 text-lg font-bold text-[#f7efe4] transition hover:bg-[#3d2d22]">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </ContentShell>
  );
}
