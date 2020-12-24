import Head from 'next/head'
import React from 'react'
import { Format } from '../components/Format/Format'
import { Heading } from '../components/Heading/Heading'
import { Teams } from '../components/Teams/Teams'

const Home = () => {
  return (
    <>
      <Head>
        <title>Quargames</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Heading />
      <Format />
      <Teams />
    </>
  )
}

export default Home
