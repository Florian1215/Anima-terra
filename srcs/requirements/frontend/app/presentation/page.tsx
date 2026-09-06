import { ContentShell } from '@/components/content-shell';

export const metadata = {
  title: 'Présentation',
  description: 'Découvrez Anima Terra, la passion de Guillaume pour la spéléologie et la transmission du monde souterrain.',
};

export default function PresentationPage() {
  return (
    <ContentShell title="Derrière Anima Terra...">
      <div className="overflow-hidden rounded-[18px] border border-[#e7d7ad] bg-[#efe6d4] shadow-[0_10px_30px_rgba(58,42,31,0.08)]">
        <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
          <img
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80"
            alt="Guillaume sous terre"
            className="h-full min-h-[360px] w-full object-cover"
          />
          <div className="p-6 md:p-10">
            <p className="text-lg leading-8 text-[#4d3b2f] md:text-2xl md:leading-[1.8]">
              Je m’appelle Guillaume et j’ai 23 ans. Passionné de spéléologie depuis mon plus jeune âge, c’est mon grand-père qui m’a fait découvrir mes premières grottes dans le département du Lot. Sans lui, j’ai du mal à imaginer ce qui aurait bien pu me pousser à troquer la lumière du jour contre la boue, le froid et les passages étroits.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#4d3b2f] md:text-2xl md:leading-[1.8]">
              Si c’est bien mon grand-père qui m’a transmis sa passion du monde souterrain, c’est le Spéléo Club Alpin de Gap qui m’a vu faire mes premières descentes en rappel. C’est avec leur soutien que j’ai obtenu mon diplôme d’initiateur fédéral en 2024.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#4d3b2f] md:text-2xl md:leading-[1.8]">
              La suite a été l’obtention de mon diplôme d’État de spéléologie, qui me permet aujourd’hui de vous emmener avec moi découvrir cet univers méconnu et de vous partager mes histoires, connaissances et autres anecdotes.
            </p>
          </div>
        </div>
      </div>
    </ContentShell>
  );
}
