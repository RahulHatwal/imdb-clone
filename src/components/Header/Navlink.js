import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { login, logout } from "../../helpers/constants.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navlink = (props) => {
  const user = useSelector((state) => state.auth);
  const Navigate = useNavigate();
  console.log("firstname", user.firstName);
  const { className } = props;

  return (
    <div>
      <Nav className={className}>
        {localStorage.getItem("token") ? (
          <Nav.Link href="/" className="text-decoration-none mb-2">
            <CgProfile size={24} color="#8e8e8e" />
            &nbsp;&nbsp;
            <span
              className=" text-uppercase text-light fw-light align-baseline"
              onClick={() => {
                localStorage.clear();
              }}
            >
              {user.isAuthenticated
                ? `${user.firstName} (${user.role})`
                : logout}
            </span>
          </Nav.Link>
        ) : (
          <Link to="/user/login" className="  text-decoration-none mb-2">
            <CgProfile size={24} color="#8e8e8e" />
            &nbsp;&nbsp;
            <span className=" text-uppercase text-light fw-light">{login}</span>
          </Link>
        )}
      </Nav>
    </div>
  );
};

export default Navlink;
