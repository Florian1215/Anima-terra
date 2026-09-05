import Head from 'next/head';
export default function Page(){
  return (
    <>
      <Head>
        <title>Page has moved</title>
        <link rel="canonical" href="/lisa-tourres-aven-du-rousti-10_09_20222/" />
      </Head>
      <main dangerouslySetInnerHTML={{ __html: `
<A HREF="../index.html"><h3>Click here...</h3></A>
` }} />
    </>
  )
}