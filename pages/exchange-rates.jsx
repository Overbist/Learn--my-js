import Head from "next/head";
import Layout from "../components/layout/Layout";
import Currency from "../components/Currency/Currency";

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
  );
}

export default ExchangeRates;
