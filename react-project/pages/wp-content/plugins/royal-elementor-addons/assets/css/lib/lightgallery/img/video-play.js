import Head from 'next/head';
export default function Page(){
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <link rel="canonical" href="/wp-content/plugins/royal-elementor-addons/assets/css/lib/lightgallery/img/video-play" />
      </Head>
      <main dangerouslySetInnerHTML={{ __html: `
<center><h1>404 Not Found</h1></center>
<hr><center>nginx</center>
` }} />
    </>
  )
}