import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavigationBar from "../Navbar/NavigationBar";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
