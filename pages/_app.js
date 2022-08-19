//import { useRouter } from "next/router";
//import { useEffect, useState } from "react";
//import { Preloader } from "@components/Preloader/Preloader";
import "../styles/style.scss";

function MyApp(appProps) {
  const { Component, pageProps } = appProps;

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
