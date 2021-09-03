import React from "react";
import Style from "./layout2.module.scss";
import Nav from "../../NavBar/Nav";
import Footer from "../../Footer/Footer";

export default function Layout2({children}) {
  return (
    <div className={Style.main}>
      <Nav layoutName={"LayOut2"}></Nav>
      {children}

      <Footer layoutName={"Layout2"}></Footer>
    </div>
  );
}
