import React from "react";
import { AiFillHome } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  Dropdown,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarForm = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/home">
              <AiFillHome />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Calnutri
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Item>
                    <NavLink to={"/home"}>
                      <AiFillHome />
                      Home
                    </NavLink>
                  </Nav.Item>

                  <Nav.Item>
                    <NavLink to={"/alimentos"}>Alimentos</NavLink>
                  </Nav.Item>

                  <Nav.Item>
                    <NavLink to={"/preparaciones"}>Preparaciones</NavLink>
                  </Nav.Item>                  
                </Nav>
              </Offcanvas.Body>
              <Nav.Item>
                <NavLink to={"/logout"}>LogOut</NavLink>
              </Nav.Item>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavbarForm;
