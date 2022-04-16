import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavbarFunc({ currentPage, handlePageChange }) {
  return (
   
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Marcus Walby</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
  );
}
