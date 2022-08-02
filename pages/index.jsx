import Head from "next/head";
import Layout from "../components/layout/Layout";

function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <h1 className="title">Best of the best</h1>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eius,
          repellat fugiat obcaecati hic ipsum nam quasi? Aliquid, porro commodi
          laboriosam molestiae veniam, numquam sapiente laudantium natus placeat
          eius veritatis.Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
      </Layout>
    </>
  );
}

export default Home;
