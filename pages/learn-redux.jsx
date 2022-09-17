import Head from "next/head"

import { Counter } from "@components/Counter/Counter"

import { Layout } from "@layout/Layout"

function LearnRedux() {
  return (
    <>
      <Head>
        <title>Learn Redux</title>
        <meta name="description" content="Learn Redux" />
      </Head>

      <Layout>
        <Counter />
      </Layout>
    </>
  )
}

export default LearnRedux
