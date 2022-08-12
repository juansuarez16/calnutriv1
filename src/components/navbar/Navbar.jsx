import React from "react";
import { AiFillHome } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarMe = () => {
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
                  <Nav.Item>
                    <NavLink to={"/categorias"}>Categorias</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/departamentos"}>Departamentos</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/ciudades"}>Ciudades</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/componentes"}>Componentes</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/fuentes"}>Fuentes</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/nutrientes"}>Nutrientes</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/gruposedades"}>Grupoes Edades</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/gruposetnicos"}>Grupoes Etnicos</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/ordenmenus"}>Orden Menus</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/licitaciones"}>Licitaciones</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/modalidades"}>Modalidades</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/nutricionistas"}>Nutricionista</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/operadores"}>Operadores</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/recomendaciones"}>Recomendaciones</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/usuarios"}>Usuarios</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to={"/menu"}>Menu</NavLink>
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

export default NavbarMe;
