import Head from "next/head"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"

import { CodeHighlighter } from "@components/CodeHighlighter/CodeHighlighter"
import { Layout } from "@components/layout/Layout"

import { jsHintsData } from "@data/jsHintsData"

function JSHints() {
  return (
    <>
      <Head>
        <title>JavaScript</title>
        <meta name="description" content="Examples Page" />
      </Head>

      <Layout>
        <Tabs>
          <TabList>
            <Tab>Basic</Tab>
            <Tab>Methods</Tab>
            <Tab>Property</Tab>
            <Tab>Fundamental</Tab>
            <Tab>React</Tab>
          </TabList>

          <TabPanel>
            <CodeHighlighter>{jsHintsData.tabBasicInfo}</CodeHighlighter>
          </TabPanel>
          <TabPanel>
            <CodeHighlighter>{jsHintsData.tabMethods}</CodeHighlighter>
          </TabPanel>
          <TabPanel>
            <CodeHighlighter>{jsHintsData.tabProperty}</CodeHighlighter>
          </TabPanel>
          <TabPanel>
            <CodeHighlighter>{jsHintsData.tabFundamental}</CodeHighlighter>
          </TabPanel>
          <TabPanel>
            <CodeHighlighter>{jsHintsData.tabReactExample}</CodeHighlighter>
          </TabPanel>
        </Tabs>
      </Layout>
    </>
  )
}

export default JSHints
