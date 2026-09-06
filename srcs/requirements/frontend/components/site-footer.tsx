import Link from 'next/link';

const legalLinks = [
  { label: 'Partenaires', href: '/partenaires' },
  { label: 'CGV', href: '/conditions-generales-de-vente' },
  { label: 'Mentions Légales', href: '/mentions-legales' },
  { label: 'Contact', href: '/contact' },
];

export function SiteFooter() {
  return (
    <footer className="mt-8 bg-[#3a2a1f] text-[#efe6d7]">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d7b36f] bg-[#f3bf6d] text-[#4b382b] font-black text-xl">
            A
          </div>
          <div className="leading-[0.7] uppercase tracking-[-0.06em] text-[#f3eadb]">
            <div className="text-2xl font-black">Anima</div>
            <div className="text-2xl font-black">Terra</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm font-medium uppercase tracking-[0.08em] text-[#dfd1bf]">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#f8d892]">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
