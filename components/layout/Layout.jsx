import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container inner">
        <section className="box bg">{children}</section>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
