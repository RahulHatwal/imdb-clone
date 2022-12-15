import React from "react";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                This is where you can view and manage your movie collection.
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
              <Link to="/admin/addmovies">Add Movies</Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/updatemovies">UpdateMovies Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/admin-settings">Admin Settings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
