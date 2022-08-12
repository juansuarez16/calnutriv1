import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import NavbarMe from "../../components/navbar/Navbar";

function Calnutri() {
  return (
    <>
      <NavbarMe/>
      <Container>          
          <Outlet/>
      </Container>
      
    </>
  );
}

export default Calnutri;
