import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  //destructuration des propriétés + fonction fléchée
  return (
    <div>
      <Header />
      <div className="layout-container">
        <SideBar />
        <div className="layout-navbar-and-main-sections">
          <NavBar />
          {children ?? <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
