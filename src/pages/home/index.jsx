import React from "react";
import { Row, Col, Figure } from "react-bootstrap";
import { VscServer } from "react-icons/vsc";
import Image from "react-bootstrap/Image";
import nutri from "../../img/AdobeStock_482799290_Preview.svg";
import { NavLink } from "react-router-dom";
import Calnutri from "../Calnutri/Calnutri";
import imagen from "../../img/calnutri.webp";
import imagenf from "../../img/1-formulairio.png";
import imagenr from "../../img/OIP.jpg";
import { Paper, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const Home = () => {
  
  return (
    <>
    <div className="container" >
      <div className="row">
      <div className="col s12 m12 text-center">
        <div className="col s12 m4 text-center">
          <div className="card medium" >
            <div className="card-image">
              <NavLink to={"/homeClanutri"}>
                <img  src={imagen} />
              </NavLink>
              <span className="card-title">ESAN</span>
            </div>
            <div className="card-content">
              <span className="card-title">Calnutri</span>
            </div>
          </div>
          </div>
          <div className="col s12 m4 text-center">
          <div className="card medium">
            <div className="card-image">
              <NavLink to={"/homeForm"}>
                <img  src={imagenf} />
              </NavLink>
              <span className="card-title">ESAN</span>
            </div>
            <div className="card-content">
              <span className="card-title">Formularios</span>
            </div>
          </div>
        </div>
        <div className="col s12 m4 text-center">
          <div className="card medium">
            <div className="card-image">
              <NavLink to={"/homeForm"}>
                <img  src={imagenr} />
              </NavLink>
              <span className="card-title">ESAN</span>
            </div>
            <div className="card-content">
              <span className="card-title">Reportes</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Home;
