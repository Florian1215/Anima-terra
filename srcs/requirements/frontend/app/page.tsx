import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { sorties } from '@/lib/site-data';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f2efe9] text-[#2f231b]">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(27,20,18,0.45), rgba(27,20,18,0.48)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="relative mx-auto flex min-h-[720px] max-w-[1600px] items-center justify-center px-6 py-10">
          <h1 className="max-w-[1300px] text-center text-[clamp(2.8rem,6vw,8rem)] font-black uppercase tracking-[-0.08em] text-[#f3efe9] drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            Une aventure inoubliable vous attend sous les montagnes des Hautes-Alpes
          </h1>
        </div>
      </section>

      <main className="mx-auto max-w-[1200px] px-5 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {sorties.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-[14px] border border-[#e5d4b0] bg-[#f5f0e3] shadow-[0_10px_30px_rgba(58,42,31,0.08)] transition hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h2 className="text-3xl font-black tracking-[-0.05em] text-[#3d2a1e]">{item.title}</h2>
                <p className="mt-3 text-lg leading-7 text-[#59493c]">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 rounded-[18px] bg-[#efe6d4] p-8 text-center shadow-[0_8px_24px_rgba(58,42,31,0.08)] md:p-12">
          <h2 className="text-4xl font-black tracking-[-0.06em] text-[#3d2a1e] md:text-6xl">Réservation &amp; renseignement par téléphone :</h2>
          <p className="mt-6 text-[clamp(2.2rem,5vw,6rem)] font-black tracking-[-0.08em] text-[#3d2a1e]">06 50 11 87 25</p>
        </div>

        <div className="mt-8 overflow-hidden rounded-[18px] bg-[#4b382b] p-6 text-center text-[#f7efe4] shadow-[0_8px_24px_rgba(58,42,31,0.15)] md:p-9">
          <Link href="/contact" className="inline-block text-4xl font-black tracking-[-0.05em] text-[#f7efe4] md:text-5xl">
            Formulaire de contact
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
