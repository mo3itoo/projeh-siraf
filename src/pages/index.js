import Head from 'next/head';
import Layoute from '../components/layout/Layoute';
import Loading from '../components/loading';
import Slider from '../components/Slider';
import Album1 from '../components/Album1';
import Invitation from '../components/Invitation';
import Album2 from '../components/Album2';
import Description from '../components/Description';
import Album3 from '../components/Album3';
import Suggestion from '../components/Suggestion';
import { useEffect } from 'react';

export default function Home({ datas }) {
  return (
    <>
      <Head>
        <title>خانه</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>
          <Slider />
          <Album1 />
          <Invitation />
          <Album2 />
          <Description />
          <Album3 />
          <Suggestion />
        </>
      </main>
    </>
  );
}

// export async function getStaticProps(context){

//   const res = await fetch("https://nativecontent.sirafgroup.com/api/v1/tag/contentByTag/")
//   const data = await res.json(res)
//   console.log(data);

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return{
//     props: {

//     }
//   }

// }
