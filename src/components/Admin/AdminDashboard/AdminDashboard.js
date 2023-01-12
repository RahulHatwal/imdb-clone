import React from "react";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
const AdminDashboard = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card
            className="bg-dark h-100 text-center"
            style={{ color: "whitesmoke" }}
          >
            <Card.Body>
              <h1>Welcome to your Dashboard!</h1>
              <p>
                This is where you can view and manage your movie
                collection.(Working on it..)
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={3}>
          <Nav
            justify={true}
            variant="pills"
            defaultActiveKey="/admin/addmovies"
            className="bg-dark flex-column flex-nowrap text-decoration-none"
          >
            <Nav.Item>
              <Link
                to="/admin/addmovies"
                className="btn btn-outline-primary w-100 p-2 mb-3"
              >
                <AiOutlineAppstoreAdd />
                &nbsp; Add Movies
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/movies"
                className="btn btn-outline-primary w-100 p-2 mb-3"
              >
                <MdLocalMovies />
                &nbsp; Movies
              </Link>
            </Nav.Item>
            <Nav.Item>
              <a
                href="/"
                className="btn btn-light w-100"
                onClick={() => localStorage.clear()}
              >
                Logout
              </a>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
