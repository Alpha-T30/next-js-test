import Footer from "../../Footer/Footer";

import Style from "./layout1.module.scss";
import Nav from "../../NavBar/Nav";

export default function Layout1({ children, perpage }) {
  return (
    <div className={Style.main}>
      <Nav layoutName={perpage ? perpage : "layout 1"}></Nav>
      {children}

      <Footer layoutName={perpage ? perpage : "layout1"}></Footer>
    </div>
  );
}
