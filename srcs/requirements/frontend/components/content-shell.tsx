import type { ReactNode } from 'react';

import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

type ContentShellProps = {
  title: string;
  intro?: string;
  children: ReactNode;
};

export function ContentShell({ title, intro, children }: ContentShellProps) {
  return (
    <div className="min-h-screen bg-[#f3efe7] text-[#2d241c]">
      <SiteHeader />
      <main className="mx-auto max-w-[1200px] px-5 py-14 md:py-16">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black tracking-[-0.06em] text-[#3d2a1e] md:text-7xl">{title}</h1>
          {intro ? <p className="mx-auto mt-4 max-w-3xl text-lg text-[#5d4a3c] md:text-xl">{intro}</p> : null}
        </div>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
