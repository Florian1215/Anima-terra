import Link from 'next/link';

import { ContentShell } from '@/components/content-shell';
import { blogPosts } from '@/lib/site-data';

export const metadata = {
  title: 'Blog',
  description: 'Des récits, anecdotes et découvertes autour de la spéléologie en Haute-Provence.',
};

export default function BlogPage() {
  return (
    <ContentShell title="Le blog" intro="Retrouvez ici les coulisses, les anecdotes et les belles histoires de la spéléologie.">
      <div className="grid gap-8 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.title} className="rounded-[18px] border border-[#e7d7ad] bg-[#f8f3ea] p-6 shadow-[0_10px_30px_rgba(58,42,31,0.08)]">
            <h2 className="text-3xl font-black tracking-[-0.05em] text-[#3d2a1e]">{post.title}</h2>
            <p className="mt-4 text-lg leading-8 text-[#56493f]">{post.excerpt}</p>
            <div className="mt-6">
              <Link href={post.href} className="inline-flex rounded-full bg-[#4b382b] px-5 py-3 text-lg font-bold text-[#f7efe4] transition hover:bg-[#3d2d22]">
                Lire la suite
              </Link>
            </div>
          </article>
        ))}
      </div>
    </ContentShell>
  );
}
