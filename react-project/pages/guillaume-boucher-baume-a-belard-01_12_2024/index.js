import Head from 'next/head';
export default function Page(){
  return (
    <>
      <Head>
        <title>Page has moved</title>
        <link rel="canonical" href="/guillaume-boucher-baume-a-belard-01_12_2024/" />
      </Head>
      <main dangerouslySetInnerHTML={{ __html: `
<A HREF="../index.html"><h3>Click here...</h3></A>
` }} />
    </>
  )
}