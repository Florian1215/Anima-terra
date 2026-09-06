import { ContentShell } from '@/components/content-shell';

export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales, informations éditeur et protection des données pour Anima Terra.',
};

const sections = [
  {
    title: 'Éditeur',
    text: 'Anima Terra est une marque d’activité de Guillaume Lamic, guide spéléologue. L’activité est exercée en conformité avec les règles en vigueur et les certifications associées.',
  },
  {
    title: 'Hébergement',
    text: 'Le site est hébergé sur des infrastructures sécurisées et son exploitation est conforme aux meilleures pratiques du secteur. Les informations techniques de l’hébergement peuvent être mises à jour selon les services utilisés.',
  },
  {
    title: 'Propriété intellectuelle',
    text: 'Tous les contenus présents sur ce site, y compris les textes, photographies, graphiques et éléments de design, sont protégés par le droit de la propriété intellectuelle. Toute reproduction, même partielle, est soumise à autorisation préalable.',
  },
  {
    title: 'Responsabilité et liens externes',
    text: 'Anima Terra ne peut être tenu responsable des contenus de sites tiers liés au site via des liens externes ou des références. Les liens sont proposés à titre informatif et peuvent être modifiés sans préavis.',
  },
  {
    title: 'Protection des données personnelles',
    text: 'Les données collectées via le formulaire de contact ou lors des réservations sont destinées exclusivement à l’organisation et à l’accompagnement des sorties. Elles ne sont ni vendues ni partagées sans consentement explicite.',
  },
  {
    title: 'Conception et réalisation du site',
    text: 'Ce site a été conçu pour refléter les activités et la présentation de l’entreprise dans une approche moderne et accessible. Il respecte les principes d’ergonomie, d’accessibilité et de lisibilité sur l’ensemble des supports.',
  },
];

export default function MentionsLegalesPage() {
  return (
    <ContentShell title="Mentions légales" intro="Informations légales, responsabilités et informations utiles relatives à l’activité Anima Terra.">
      <div className="space-y-6">
        {sections.map((section) => (
          <section key={section.title} className="rounded-[18px] border border-[#e7d7ad] bg-[#f8f3ea] p-6 shadow-[0_10px_30px_rgba(58,42,31,0.08)]">
            <h2 className="text-2xl font-black tracking-[-0.05em] text-[#3d2a1e]">{section.title}</h2>
            <p className="mt-3 text-lg leading-8 text-[#56493f]">{section.text}</p>
          </section>
        ))}
      </div>
    </ContentShell>
  );
}
