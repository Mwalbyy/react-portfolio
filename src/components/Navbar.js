import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/styles/nav.css'


export default function NavbarFunc({ currentPage, handlePageChange }) {
  return (
   <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixedPos">
        <Container>
          <Navbar.Brand href="#home">
            <div className="glitch">
            MARCUS WALBY
            </div>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active navText" : "nav-link navText"
              } 
              
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link active navText" : "nav-link navText"
              }
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active navText" : "nav-link navText"
              }
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active navText" : "nav-link navText"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    
  );
}
