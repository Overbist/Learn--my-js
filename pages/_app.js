//import { useRouter } from "next/router";
//import { useEffect, useState } from "react";
//import { Preloader } from "@components/Preloader/Preloader";
import { Provider } from "react-redux"

import { store } from "../store/store"
import "../styles/style.scss"

function MyApp({ Component, pageProps }) {
  //const { Component, pageProps } = appProps

  // const [loading, setLoading] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   router.events.on("routeChangeStart", () => {
  //     setLoading(true);
  //   });

  //   router.events.on("routeChangeComplete", () => {
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <>
      {/* {loading && <Preloader />} */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
