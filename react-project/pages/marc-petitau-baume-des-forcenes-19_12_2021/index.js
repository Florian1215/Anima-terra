import Head from 'next/head';
export default function Page(){
  return (
    <>
      <Head>
        <title>Page has moved</title>
        <link rel="canonical" href="/marc-petitau-baume-des-forcenes-19_12_2021/" />
      </Head>
      <main dangerouslySetInnerHTML={{ __html: `
<A HREF="../index.html"><h3>Click here...</h3></A>
` }} />
    </>
  )
}