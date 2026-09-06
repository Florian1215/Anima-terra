import { ContentShell } from '@/components/content-shell';
import { partners } from '@/lib/site-data';

export const metadata = {
  title: 'Partenaires',
  description: 'Les partenaires et bonnes adresses de l’univers Anima Terra.',
};

export default function PartenairesPage() {
  return (
    <ContentShell title="Partenaires" intro="Mes partenaires touristiques, professionnels locaux et bonnes adresses du coin.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {partners.map((partner) => (
          <div key={partner} className="rounded-[18px] border border-[#e7d7ad] bg-[#f8f3ea] p-6 text-center text-xl font-black tracking-[-0.05em] text-[#3d2a1e] shadow-[0_10px_30px_rgba(58,42,31,0.08)]">
            {partner}
          </div>
        ))}
      </div>
    </ContentShell>
  );
}
