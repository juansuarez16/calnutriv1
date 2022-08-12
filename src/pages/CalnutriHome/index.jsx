import React from "react";
import {
  FcFlowChart,
  FcDepartment,
  FcDocument,
  FcPodiumWithAudience,
  FcOrganization,
  FcTreeStructure,
  FcViewDetails,
  FcMindMap,
  FcSerialTasks,
  FcOrgUnit,
  FcShipped,
  FcSportsMode,
  FcReading
} from "react-icons/fc";
import {
  MdGroup,
  MdOutlineRestaurantMenu
} from "react-icons/md";
import {
  GoListOrdered,
  GoClippy
} from "react-icons/go";
import {
  MdChromeReaderMode
} from "react-icons/md";
import {
  FaHospitalUser
} from "react-icons/fa";



import { AiFillBank } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(180),
      height: theme.spacing(18),
    },
  },
}));

const CalnutriHome = () => {
  const classes = useStyles();

  return (
    <>
      <div className="card ">
        <div className="card-header text-center">Herramientas</div>
        <div className="card-content white-text">
          <div className="table-responsive">
            <ul className="collection with-header ">
              <div className="row">
              <div className="col s3 md3  text-center">
              <li className="collection-item  col s6 md3 ">
                <div> 
                  <span className="secondary-content">Alimentos</span>
                  <NavLink to={"/alimentos"}>
                    <FcDocument size="4rem" className="circle" />
                  </NavLink>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/preparaciones"}>
                    <FcPodiumWithAudience size="4rem" className="circle" />
                  </NavLink>
                  <span className="secondary-content">Preparaciones</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/categorias"}>
                    <FcFlowChart size="4rem" className="circle" />
                  </NavLink>
                  <span className="secondary-content">Categorias</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/departamentos"}>
                    <FcDepartment size="4rem" />
                  </NavLink>
                  <span className="secondary-content">Departamentos</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/ciudades"}>
                    <FcOrganization size="4rem" />
                  </NavLink>
                  <span className="secondary-content">Ciudades</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/componentes"}>
                    <FcTreeStructure size="4rem" />
                  </NavLink>
                  <span className="secondary-content">Componentes</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/fuentes"}>
                    <FcMindMap size="4rem" />
                  </NavLink>
                  <span className="secondary-content">Fuentes</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/nutrientes"}>
                    <FcSerialTasks size="4rem" />
                  </NavLink>
                  <span className="secondary-content">Nutrientes</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/gruposedades"}>
                    <MdGroup size="4rem" />
                  </NavLink>
                  <span className="secondary-content">Grupos Edades</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/gruposetnicos"}>
                    <FcOrgUnit size="4rem" />
                  </NavLink>
                  <span className="secondary-content">Grupos Etnicos</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/ordenmenus"}>
                    <GoListOrdered size="4rem" color={green} />
                  </NavLink>
                  <span className="secondary-content">Orden Menus</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/licitaciones"}>
                    <GoClippy size="4rem" />
                  </NavLink>
                  <span className="secondary-content">Licitaciones</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/modalidades"}>
                    <MdChromeReaderMode size="4rem" />
                  </NavLink>
                  <span className="secondary-content">Modalidades</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/operadores"}>
                    <FcShipped size="4rem" />
                  </NavLink>
                  <span className="secondary-content">Operadores</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/nutricionistas"}>
                    <FcSportsMode size="4rem" color="blue"/>
                  </NavLink>
                  <span className="secondary-content">Nutricionistas</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/recomendaciones"}>
                    <FcReading size="4rem" />
                  </NavLink>
                  <span className="secondary-content">Recomendaciones</span>
                </div>
              </li>
              <li className="collection-item col s6 md2 ">
                <div>
                  <NavLink to={"/menu"}>
                    <MdOutlineRestaurantMenu size="4rem" />
                  </NavLink>
                  <span className="secondary-content">Menu</span>
                </div>
              </li>
              </div> 
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalnutriHome;
