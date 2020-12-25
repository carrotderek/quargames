import { Divider, Grid, Spacer, Text, useTheme } from '@geist-ui/react'
import Head from 'next/head'
import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Format } from '../components/Format/Format'
import { Games } from '../components/Games/Games'
import { Heading } from '../components/Heading/Heading'
import { Teams } from '../components/Teams/Teams'

const Home = () => {
  const theme = useTheme()
  return (
    <>
      <Head>
        <title>Quargames</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Heading />
      <Format />
      <Games />
      <Teams />
      <Footer />
    </>
  )
}

export default Home
