import { ContentShell } from '@/components/content-shell';
import { faq } from '@/lib/site-data';

export const metadata = {
  title: 'Questions fréquentes',
  description: 'Toutes les réponses aux questions les plus courantes sur les sorties Anima Terra.',
};

export default function FAQPage() {
  return (
    <ContentShell title="Questions fréquentes" intro="Normalement, toutes les informations dont vous avez besoin se trouvent ici. Si certaines questions restent sans réponse, n’hésitez pas à me joindre par téléphone ou via le formulaire de contact.">
      <div className="space-y-5">
        {faq.map((item) => (
          <div key={item.question} className="rounded-[18px] border border-[#e7d7ad] bg-[#f8f3ea] p-6 shadow-[0_10px_30px_rgba(58,42,31,0.08)]">
            <h2 className="text-2xl font-black tracking-[-0.05em] text-[#3d2a1e]">{item.question}</h2>
            <p className="mt-3 text-lg leading-8 text-[#56493f]">{item.answer}</p>
          </div>
        ))}
      </div>
    </ContentShell>
  );
}
