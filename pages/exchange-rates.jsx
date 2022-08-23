import Head from "next/head"

import { Currency } from "@components/Currency/Currency"
import { Layout } from "@components/layout/Layout"

function ExchangeRates() {
  return (
    <>
      <Head>
        <title>Exchange Rates</title>
        <meta name="description" content="Exchange Rates Page" />
      </Head>

      <Layout>
        <h2>Курсы валют</h2>
        <Currency />
      </Layout>
    </>
  )
}

export default ExchangeRates
