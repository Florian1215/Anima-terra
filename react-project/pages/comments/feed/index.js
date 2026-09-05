import Head from 'next/head';
export default function Page(){
  return (
    <>
      <Head>
        <title>Commentaires pour Anima Terra : Spéléologie dans les Hautes-Alpes</title>
        <link rel="canonical" href="/comments/feed/" />
      </Head>
      <main dangerouslySetInnerHTML={{ __html: `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	
	>
<channel>
	<title>
	Commentaires pour Anima Terra : Spéléologie dans les Hautes-Alpes	</title>
	<atom:link href="https://anima-terra.com/comments/feed/" rel="self" type="application/rss+xml" />
	<link>https://anima-terra.com</link>
	<description>Dans les Hautes-Alpes, entre silence et obscurité, les grottes offrent un moment hors du temps. En famille, laissez-vous guider au cœur de la terre pour une aventure inoubliable.</description>
	<lastBuildDate>Thu, 03 Sep 2026 20:00:53 +0000</lastBuildDate>
	<sy:updatePeriod>
	hourly	</sy:updatePeriod>
	<sy:updateFrequency>
	1	</sy:updateFrequency>
	
</channel>
</rss>
` }} />
    </>
  )
}