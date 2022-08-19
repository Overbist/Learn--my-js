import Head from "next/head"
import { v4 as uuid } from "uuid"

import { Layout } from "@components/layout/Layout"
import { Accordion } from "@components/ui/Accordion/Accordion"

import { faqData } from "@data/faqData"

function Faq() {
  function getCategory(data) {
    const categoryAll = data.map((item) => item.category)
    const categoryFiltered = categoryAll.filter((item, index) => {
      return categoryAll.indexOf(item) === index
    })

    return categoryFiltered
  }

  const categories = getCategory(faqData)

  return (
    <>
      <Head>
        <title>Faq</title>
        <meta name="description" content="Faq Page" />
      </Head>

      <Layout pageClassName="faq">
        <h1 className="faq__title title title--center">Вопросы на собеседовании</h1>

        {categories.map((category) => {
          return (
            <>
              <div className="faq__category">
                <h2 className="faq__catTitle">{category}</h2>
                {faqData.map((item, index) => {
                  if (item.category === category) {
                    return <Accordion item={item} index={index} key={uuid()} />
                  }
                })}
              </div>
            </>
          )
        })}

        {/* <h2 className="faq__category">TS</h2>
        {faqData.map((item, index) => {
          if (item.category === "ts") {
            return <Accordion item={item} index={index} key={uuid()} />
          }
        })} */}
      </Layout>
    </>
  )
}

export default Faq
