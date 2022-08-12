import React, { useEffect, useState } from "react";
import api from "./api";
import Createmodal from "./components/modal";
import { Table, Button, Container } from "reactstrap";
import { FiEdit3, FiDelete } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const OrdenMenu = () => {
  const [data, setData] = useState(Array);
  const [stateModal, setstateModal] = useState(false);
  const [stateNutriente, setstateNutriente] = useState(false);
  const [stateDetalleNut, setstateDetalleNut] = useState(false);
  const [stateEdit, setstateEdit] = useState(false);
  const [stateDelete, setstateDelete] = useState(false);

  const res = async () => {
    const dataA = await api("http://localhost:3000/getordenMenus");
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
            <th>Orden</th>
            <th>N Orden</th>
            <th>Licitacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr>
              <td>{element.id}</td>
              <td>{element.nombre}</td>
              <td>{element.norden}</td>
              <td>{element.nombreLicitacion}</td>
              <td>
                <FiEdit3
                  size={"2rem"}
                  color="warning"
                  onClick={() => setstateEdit(!stateEdit)}
                />
                {"  "}
                <RiDeleteBin5Line
                  size={"2rem"}
                  color="red"
                  onClick={() => setstateDelete(!stateDelete)}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <Button variant="succes" onClick={() => setstateModal(!stateModal)}>
          {" "}
          ingresar menu
        </Button>
      </Table>
      <Createmodal
        data={data}
        state={stateModal}
        setState={setstateModal}
        stateEdit={stateEdit}
        setstateEdit={setstateEdit}
        stateDelete={stateDelete}
        setstateDelete={setstateDelete}
        stateNutriente={stateNutriente}
        setstateNutriente={setstateNutriente}
        stateDetalleNut={stateDetalleNut}
        setstateDetalleNut={setstateDetalleNut}
      />
    </>
  );
};

export default OrdenMenu;
