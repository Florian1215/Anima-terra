import Head from 'next/head';
export default function Page(){
  return (
    <>
      <Head>
        <title>403 Forbidden</title>
        <link rel="canonical" href="/wp-content/plugins/jetpack/_inc/blocks/" />
      </Head>
      <main dangerouslySetInnerHTML={{ __html: `
<center><h1>403 Forbidden</h1></center>
<hr><center>nginx</center>
` }} />
    </>
  )
}