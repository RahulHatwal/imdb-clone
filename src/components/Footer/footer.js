import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <div className=" d-flex justify-content-between mt-1 align-items-center">
          <div className="">
            <p
              className="copyright-text fw-lighter"
              style={{ fontSize: "12px" }}
            >
              Copyright &copy; {currentYear} Rahul Hatwal
            </p>
          </div>
          <div>
            <ul className="list-inline social-icons">
              <li className="list-inline-item">
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaTwitter />
                </a>
              </li>

              <li className="list-inline-item">
                <a href="https://github.com/RahulHatwal">
                  <FaGithub />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/rahulhatwal/">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
