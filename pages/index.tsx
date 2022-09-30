import type { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'
import {
  Mint,
  About,
  RoadMap,
  Rocket,
  Footer
} from '../components'

const Home: NextPage = () => {
  const [accounts, setAccounts] = useState([])

  return (
    <div className="relative flex flex-col w-11/12 md:w-1/3 md:float-right mx-4">
      <Head>
        <title>Foam Chunk Smudge</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Foam Chunk Smudge NFT Minting DApp" />
        <meta name="image" content="/screenShot.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<Rocket />*/}
      <Mint accounts={accounts} setAccounts={setAccounts} />
      <About />
      <RoadMap />
      <Footer />
    </div>
  )
}

export default Home
