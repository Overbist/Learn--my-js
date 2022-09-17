import Head from "next/head"
import { v4 as uuid } from "uuid"

import { Accordion } from "@components/ui/Accordion/Accordion"

import { Layout } from "@layout/Layout"

import { faqData } from "@data/faqData"

function Faq() {
  const categories = getCategory(faqData)

  function getCategory(data) {
    const categoryAll = data.map((item) => item.category)
    const categoryFiltered = categoryAll.filter((item, index) => {
      return categoryAll.indexOf(item) === index
    })

    return categoryFiltered
  }

  return (
    <>
      <Head>
        <title>Faq</title>
        <meta name="description" content="Faq Page" />
      </Head>

      <Layout pageClassName="faq">
        <h1 className="faq__title title title--center">Вопросы на собеседовании</h1>

        {categories.map((category) => (
          <div className="faq__category" key={uuid()}>
            <h2 className="faq__catTitle">{category}</h2>
            {faqData.map((item) => {
              if (item.category === category) {
                return <Accordion item={item} key={uuid()} />
              }
            })}
          </div>
        ))}
      </Layout>
    </>
  )
}

export default Faq
