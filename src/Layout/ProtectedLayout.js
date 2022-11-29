import { Navigate, Outlet, Link } from "react-router-dom";
import { Header } from "../components";
import { useAuth } from "../hooks/AuthProvider";

export const ProtectedLayout = () => {
  // const { user } = useAuth();

  // // if (!user) {
  // //   return <Navigate to="/" />;
  // // }

  return (
    <div>
      {/* <nav>
        <Link to="/">Settings</Link>
        <Link to="/profile">Profile</Link>
      </nav> */}
      <Header />
      <Outlet />
    </div>
  );
};
