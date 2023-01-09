import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CgProfile } from "react-icons/cg";
import { MdMonitor, MdStars, MdPeople } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import Navlink from "./Navlink";
import "./Header.css";
import {
  appName,
  logoUrl,
  login,
  signup,
  logout,
} from "../../helpers/constants.js";

const Header = (props) => {
  console.log(props);
  const logoutHandle = () => {
    localStorage.clear();
  };

  return (
    <Navbar collapseOnSelect expand="false" variant="dark">
      <Container>
        <Navbar.Brand className=" d-flex align-content-center">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ marginRight: "25px" }}
          />
          <Link className="text-decoration-none" to="/">
            <img
              width={"65px"}
              src={logoUrl}
              alt="IMDB Logo"
              onClick={props.onLogoClick}
            />
            <span
              className=" mx-2 text-uppercase text-primary align-bottom fs-4 p-1 rounded-3 "
              style={{ backgroundColor: "black" }}
            >
              {appName}
            </span>
          </Link>
        </Navbar.Brand>

        <Navbar.Offcanvas
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          className=" bg-dark"
        >
          <Offcanvas.Header
            closeButton
            style={{ backgroundColor: "#121212" }}
            closeVariant="white"
            className=""
          >
            <Offcanvas.Title className=" text-primary text-uppercase  ">
              <img
                width={"65px"}
                src={logoUrl}
                alt="IMDB Logo"
                onClick={props.onLogoClick}
              />
              <span
                className=" mx-2 text-uppercase text-primary align-bottom fs-4 p-1 rounded-3 "
                style={{ backgroundColor: "black" }}
              >
                {appName}
              </span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className=" mt-3">
            <Nav>
              <Navlink />
              {localStorage.getItem("role") === "admin" ? (
                <Nav.Link
                  href="/admin/dashboard"
                  className=" text-uppercase text-light fw-light"
                >
                  <BsCollectionPlay size={22} color="#8e8e8e" />
                  &nbsp;&nbsp; Admin Dashboard
                </Nav.Link>
              ) : null}
              <Nav.Link
                href="/movies"
                className=" text-uppercase text-light fw-light"
              >
                <BsCollectionPlay size={22} color="#8e8e8e" />
                &nbsp;&nbsp; Movies
              </Nav.Link>
              <Nav.Link
                href="/topmovies"
                className=" text-uppercase text-light fw-light"
              >
                <MdStars size={23} color="#8e8e8e" />
                &nbsp;&nbsp; Top Movies List(Working On It)
              </Nav.Link>
              <Nav.Link
                href="#"
                className=" text-uppercase text-light fw-light"
              >
                <MdMonitor size={23} color="#8e8e8e" />
                &nbsp;&nbsp; TV Shows(Coming Soon)
              </Nav.Link>

              <Nav.Link
                href="#"
                className=" text-uppercase text-light fw-light"
              >
                <MdPeople size={23} color="#8e8e8e" />
                &nbsp;&nbsp; Celebs(Coming Soon)
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <Navlink className="justify-content-end flex-grow-1 pe-3 fs-5 " />
      </Container>
    </Navbar>
  );
};

export default Header;
