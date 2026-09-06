'use client';

import Link from 'next/link';
import { useState } from 'react';

const mainNav = [
  {
    label: 'Les sorties',
    href: '/decouverte',
    children: [
      { label: 'Découverte', href: '/decouverte' },
      { label: 'Sportive', href: '/sportive' },
      { label: 'D’envergure', href: '/denvergure' },
    ],
  },
  {
    label: 'Plus',
    href: '/presentation',
    children: [
      { label: 'Présentation', href: '/presentation' },
      { label: 'Questions fréquentes', href: '/questions-frequentes' },
      { label: 'Bon cadeau', href: '/bon-cadeau' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  { label: 'Galerie photo', href: '/galerie-photo' },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="bg-[#4b382b] text-[#f5efe6] shadow-[0_2px_0_rgba(0,0,0,0.15)]">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Anima Terra accueil">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d7b36f] bg-[#f3bf6d] text-[#4b382b] shadow-inner md:h-14 md:w-14">
            <span className="text-2xl font-black">A</span>
          </div>
          <div className="leading-[0.74] text-left uppercase tracking-[-0.06em] text-[#f7f0e8]">
            <span className="block text-[1.7rem] font-black md:text-[2.3rem]">Anima</span>
            <span className="block text-[1.7rem] font-black md:text-[2.3rem]">Terra</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Navigation principale">
          {mainNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                className="flex items-center gap-2 text-lg font-medium text-[#f3eadb] transition hover:text-[#d7b36f]"
                onClick={() => setOpenMenu((current) => (current === item.label ? null : item.label))}
              >
                <span>{item.label}</span>
                {item.children ? <span className="text-xs">▾</span> : null}
              </button>
              {item.children && openMenu === item.label ? (
                <div className="absolute left-0 top-full mt-4 min-w-[220px] rounded-xl border border-[#d7b36f]/40 bg-[#4b382b] p-2 shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-base text-[#f5efe6] transition hover:bg-[#5f4837] hover:text-[#f7d58e]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full border border-[#f6ead7] bg-[#f6ead7] px-6 py-2.5 text-lg font-semibold text-[#3a2d23] transition hover:bg-[#e9dfcf] md:inline-flex"
        >
          <span aria-hidden="true">☎</span>
          <span>Réserver</span>
        </Link>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f0e8d8] text-xl md:hidden"
          onClick={() => setMobileOpen((current) => !current)}
        >
          ☰
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[#ffffff1a] bg-[#4b382b] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {mainNav.map((item) => (
              <div key={item.label} className="rounded-md border border-transparent bg-[#5d4535] p-2">
                {item.children ? (
                  <div>
                    <Link href={item.href} className="block px-2 py-1 text-lg font-medium text-[#f5efe6]">
                      {item.label}
                    </Link>
                    <div className="mt-2 ml-3 space-y-1 border-l border-[#f6ead7]/30 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-1 text-base text-[#f4e8d0]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} className="block px-2 py-1 text-lg font-medium text-[#f5efe6]" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-[#f6ead7] bg-[#f6ead7] px-4 py-2.5 text-base font-semibold text-[#3a2d23]"
              onClick={() => setMobileOpen(false)}
            >
              Réserver
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
