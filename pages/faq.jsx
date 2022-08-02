import Head from "next/head";
import Layout from "../components/layout/Layout";
import { AccordionTab } from "../components/ui/Accordion";

const Faq = () => {
  return (
    <>
      <Head>
        <title>Faq</title>
        <meta name="description" content="Faq Page" />
      </Head>

      <Layout>{/* <AccordionTab></AccordionTab> */}</Layout>
    </>
  );
};

export default Faq;
