import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Footer from "../components/Footer/Footer";

export const Admin = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
