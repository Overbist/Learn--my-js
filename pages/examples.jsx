import Head from "next/head"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"

import { Layout } from "@components/layout/Layout"

function Examples() {
  return (
    <>
      <Head>
        <title>Examples</title>
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
            <Tab>Tasks</Tab>
          </TabList>

          <TabPanel>
            <pre className="prettyprint" id="js-code-import-1">
              Loading...
            </pre>
          </TabPanel>
          <TabPanel>
            <pre className="prettyprint" id="js-code-import-2">
              Loading...
            </pre>
          </TabPanel>
          <TabPanel>
            <pre className="prettyprint" id="js-code-import-3">
              Loading...
            </pre>
          </TabPanel>
          <TabPanel>
            <pre className="prettyprint" id="js-code-import-4">
              Loading...
            </pre>
          </TabPanel>
          <TabPanel>
            <pre className="prettyprint" id="js-code-import-5">
              Loading...
            </pre>
          </TabPanel>
          <TabPanel>
            <pre className="prettyprint" id="js-code-import-6">
              Loading...
            </pre>
          </TabPanel>
        </Tabs>
      </Layout>
    </>
  )
}

export default Examples
