import Head from 'next/head'

export default function Home(){
  return (
    <>
      <Head>
        <title>Page d'accueil - Anima Terra : Spéléologie dans les Hautes-Alpes</title>
        <meta name="description" content="Idéales pour une première approche du monde souterrain et adaptées aux plus jeunes." />
        <link rel="canonical" href="/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anima Terra : Spéléologie dans les Hautes-Alpes" />
        <meta property="og:description" content="Idéales pour une première approche du monde souterrain et adaptées aux plus jeunes." />
      </Head>

      <header className="site-header">
        <div className="container flex items-center justify-between">
          <div className="logo">
            <a href="/" aria-label="Anima Terra">
              <img src="/logo.png" alt="Anima Terra" className="h-10" />
            </a>
          </div>
          <nav className="site-nav" aria-label="Principal">
            <a href="/" className="text-sm">Accueil</a>
            <a href="/activites" className="text-sm">Activités</a>
            <a href="/contact" className="text-sm">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="main-hero">
          <div className="container">
            <h1>Découvrir la spéléologie dans les Hautes-Alpes</h1>
            <p className="article-meta">Idéales pour une première approche du monde souterrain et adaptées aux plus jeunes.</p>

            <div className="mt-6">
              <a href="/activites" className="btn-primary">Voir nos activités</a>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <h2>Nos sorties</h2>
            <p>Exemples de sorties encadrées par des professionnels diplômés. Contenu optimisé avec balises sémantiques pour le SEO.</p>

            <article className="mt-6">
              <h3>Découverte</h3>
              <p>Sorties accessibles aux familles et aux débutants.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-gray-50">
        <div className="container">
          <p className="text-sm text-gray-600">© Anima Terra — Tous droits réservés</p>
        </div>
      </footer>
    </>
  )
}
