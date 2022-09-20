// Приложение для определения скорости печати. Очень крутая практика. Можно расширить функционал и сделать разного рода тесты. Например, за сколько вы напечатаете первый абзац n-книги и сколько ошибок допустите, с выводом нужно текста на экран + напечатанный текст
import Head from "next/head"

import { Layout } from "@layout/Layout"

function PrintTest() {
  return (
    <>
      <Head>
        <title>Print Test</title>
        <meta name="description" content="Print Test" />
      </Head>

      <Layout>Print Test</Layout>
    </>
  )
}

export default PrintTest
