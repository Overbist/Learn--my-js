import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"

export function Layout({ children, pageClassName }) {
  return (
    <>
      <Header />
      <main className="container">
        <section className={`${pageClassName} box bg`}>{children}</section>
      </main>
      {/* <Footer /> */}
    </>
  )
}
