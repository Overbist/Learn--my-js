import Head from "next/head"

import { Layout } from "@layout/Layout"

function Home() {
  return (
    <>
      <Head>
        <title>Frontend Toolkit</title>
        <meta name="description" content="Frontend Developer Toolkit" />
      </Head>

      <Layout>
        <h1 className="title">Frontend Toolkit</h1>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eius, repellat fugiat
          obcaecati hic ipsum nam quasi? Aliquid, porro commodi laboriosam molestiae veniam, numquam
          sapiente laudantium natus placeat eius veritatis.Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </Layout>
    </>
  )
}

export default Home
