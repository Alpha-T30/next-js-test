// i will use 2 different layout for different pages with this method
// or i can use indivisual layout for each page like react i can
// add navbar , footer in every page

import Layout1 from "../Componenets/LayOut/LayOut1/Layout1";

import "../styles/global.scss";
import Layout2 from "../Componenets/LayOut/LayOut2/Layout2";

export default function MyApp({ Component, pageProps, router }) {
  // for per page layout
  const getLayout = Component.getLayout || ((page) => page); // end

  if (router.pathname.startsWith("/try/")) {
    return (
      <Layout2>
        <Component {...pageProps} />
      </Layout2>
    );
  } else if (router.pathname.startsWith("/")) {
    return (
      <Layout1>
        <Component {...pageProps} />
      </Layout1>
    );
  } else {
    return getLayout(<Component {...pageProps} />);
  }
}

// there is another technique but if you want to add the same layout
// in two pages it will not work so i think this is the best one
// so it's called per page layout
// you have to add it in every page like react
