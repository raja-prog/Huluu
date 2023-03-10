import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/request'
import React, {useEffect} from "react"



export default function Home( {results}) {
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>
     
     </div>
     {/* Header */}
     <Header  />
     {/* Nav */}
     <Nav />
     {/* Result */}
     <Results results={results} />
    </>
  )
}


export async function getServerSideProps(context){
  const genre=context.query.genre;
  
  const request= await fetch(
  `https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url
  }`
  ).then((res)=>res.json());
return {
  props:{
    results: request.results,
  }
};
}
// export async function getServerSideProps(context) {
//   const genre = context.query.genre;

//   const request = await fetch(
//     `https://api.themoviedb.org/3${
//       requests[genre]?.url || requests.fetchTrending.url
//     }`
//   ).then((res) => res.json());

//   return {
//     props: {
//       results: request.results,
//     },
//   };
// }


