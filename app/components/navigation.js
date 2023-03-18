'use client';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = () => {
  const notify = () => toast("this was a test");

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href={'/'}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <span className="nav-link" style={{ cursor: "pointer" }} onClick={notify}>Toast</span>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <Link className="nav-link" href={'/about'}>About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ToastContainer/>
    </Navbar>
  );
};

export default Navigation;