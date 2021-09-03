//this is the home page 

import Head from "next/head";
import Image from "next/image";
import Style from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={Style.container}>
      {/*if you want ,  you have to write the html head section inside the div */}

      <Head>
        {/* meta is used for different reasons like 
        for SEO , for some info. like author name for viewport , zoom etc 
        watch w3school for more info. */}
        <meta
          name="keywords"
          content="html scss react javaScript nodeJs nextJs"
        />
        <meta name="author" content="Enamul Haque" />
        <meta name="description" content="Testing Out the Next Js"></meta>

        <title>Next js Next Level</title>
      </Head>

      <div className={Style.meta}>
        <span>Hello Welcome Home</span>
      </div>
    </div>
  );
}
