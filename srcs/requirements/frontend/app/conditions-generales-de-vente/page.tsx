import { ContentShell } from '@/components/content-shell';

export const metadata = {
  title: 'Conditions Générales de Vente',
  description: 'Conditions générales de vente et modalités de réservation Anima Terra.',
};

const sections = [
  {
    title: 'Préambule',
    text: 'Les présentes conditions générales de vente régissent les prestations proposées par Anima Terra. Toute réservation implique l’acceptation sans réserve de ces conditions.',
  },
  {
    title: 'L’offre',
    text: 'Anima Terra propose des sorties de spéléologie adaptées à différents niveaux, du premier contact au parcours plus sportif. Les prestations sont détaillées sur le site et peuvent être adaptées selon les besoins.',
  },
  {
    title: 'Conditions de participation',
    text: 'Les participants doivent être en mesure de marcher et de suivre les consignes de sécurité. Pour certaines sorties, un âge minimum ou un niveau adapté est requis. Chaque personne est responsable de son état de santé et de sa condition physique.',
  },
  {
    title: 'Annulations & modifications',
    text: 'Toute modification ou annulation doit être signalée au plus tôt. En cas de météo défavorable ou de conditions de sécurité non satisfaisantes, Anima Terra se réserve le droit d’annuler ou de reporter la sortie avec remboursement intégral ou report.',
  },
  {
    title: 'Heures de rendez-vous et retard',
    text: 'Le rendez-vous est fixé au préalable par SMS ou téléphone. Il est important d’être à l’heure afin de respecter le planning et la sécurité du groupe. En cas de retard important, la sortie peut être raccourcie ou reportée.',
  },
  {
    title: 'Responsabilité & sécurité',
    text: 'Anima Terra met à disposition du matériel technique conforme et vérifié. La sécurité reste néanmoins l’affaire de chacun. Les règles de sécurité et les consignes du guide doivent être suivies strictement pendant toute la sortie.',
  },
  {
    title: 'Paiement',
    text: 'Le règlement se fait sur place, uniquement par chèque ou en espèces. Les paiements par carte bancaire ne sont pas acceptés. Un SMS récapitulatif est envoyé après réservation avec les informations administratives et techniques.',
  },
];

export default function CGVPage() {
  return (
    <ContentShell title="Conditions générales de vente" intro="Les dispositions ci-dessous encadrent la réservation et la participation aux sorties Anima Terra.">
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
