import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Navigationbar extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <Navbar sticky="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            TaskItAll
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/taskmanager">
              Task manager
            </Nav.Link>
            <Nav.Link as={Link} to="/info">
              Info
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Navigationbar;
