import Head from 'next/head'
import React from 'react'
import { Heading } from '../components/Heading/Heading'

const Home = () => {
  return (
    <>
      <Head>
        <title>Quargames</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Heading />
    </>
  )
}

export default Home
