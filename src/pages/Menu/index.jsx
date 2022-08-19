import React, { useEffect, useState } from "react";
import api from "./api";
import Createmodal from "./components/modal";
import { Table, Button, Container } from "reactstrap";
import useUser from "../../context/hook/useUser";
import CalculoMenu from "../CalculoMenu";
import { Outlet, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FcPlus, FcFinePrint } from "react-icons/fc";
import { FiEdit3, FiDelete } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { VscSymbolOperator } from "react-icons/vsc";

const Menus = () => {
  const [data, setData] = useState([]);
  const [stateModal, setstateModal] = useState(false);
  const [stateEdit, setstateEdit] = useState(false);
  const [stateDelete, setstateDelete] = useState(false);
  const [stateRmenuPre, setstateRmenuPre] = useState(false);
  const [stateMenuid, setstateMenuid] = useState(false);
  const [stateDetalleNut, setstateDetalleNut] = useState(false);
  const { isLogged } = useUser();

  const navigate = useNavigate();
  const res = async () => {
    const dataA = await api("http://localhost:3000/getMenuCal");
    setData(dataA.data.res);
  };
  useEffect(() => {
    res();
  }, [stateModal]);

 

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Ordenmenus</th>
            <th>Licitaciones</th>
            <th>Ciudades</th>
            <th>Operadores</th>
            <th>Fechacrea</th>
            <th>Fechaactua</th>
            <th>Nutricionistas</th>
            <th>Gruposetnicos</th>
            <th>Modalidades</th>
            <th>Observaciones</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr>
              <td>{element.id}</td>
              <td>{element.alias_orden}</td>
              <td>{element.nombreLicitacion}</td>
              <td>{element.ciudades}</td>
              <td>{element.ope_nombre}</td>
              <td>{element.fechadeCreacion}</td>
              <td>{element.fechaActualizacion}</td>
              <td>{element.nombreNutri}</td>
              <td>{element.gruposEtnicosCal}</td>
              <td>{element.mod_nombre}</td>
              <td>{element.observaciones}</td>
              <td>
                <FcPlus
                  color="success"
                  size={"2rem"}
                  onClick={() => {
                    setstateRmenuPre(!stateRmenuPre);
                    setstateMenuid(element.id);
                  }}
                />
                {"  "}

                <VscSymbolOperator
                  size={"2rem"}
                  color="blue"
                  onClick={() => {
                    navigate(`/calculo/${element.id}`);
                  }}
                />
                {"  "}
                <FiEdit3
                  size={"2rem"}
                  onClick={() => setstateEdit(!stateEdit)}
                />
                {"  "}
                <RiDeleteBin5Line
                  size={"2rem"}
                  color={"red"}
                  onClick={() => {
                    setstateDelete(!stateDelete)
                    setDatadelete()
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <AiOutlineAppstoreAdd
        variant="succes"
        size={"3rem"}
        color="blue"
        onClick={() => setstateModal(!stateModal)}
      />

      <Createmodal
        data={data}
        state={stateModal}
        setState={setstateModal}
        stateEdit={stateEdit}
        setstateEdit={setstateEdit}
        stateDelete={stateDelete}
        setstateDelete={setstateDelete}
        setstateRmenuPre={setstateRmenuPre}
        stateRmenuPre={stateRmenuPre}
        stateMenuid={stateMenuid}
      />
    </>
  );
};

export default Menus;
