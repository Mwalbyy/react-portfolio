import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


export default function Footer() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/Mwalbyy" target={"_blank"}><i class="fa-brands fa-github fa-2xl"></i></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/marcus-walby-488149181/" target={"_blank"}><i class="fa-brands fa-linkedin fa-2xl"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
