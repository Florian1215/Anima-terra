import Head from 'next/head';
export default function Page(){
  return (
    <>
      <Head>
        <title>Page has moved</title>
        <link rel="canonical" href="/partenaires/label-famille-plus-2/" />
      </Head>
      <main dangerouslySetInnerHTML={{ __html: `
<A HREF="../index.html"><h3>Click here...</h3></A>
` }} />
    </>
  )
}