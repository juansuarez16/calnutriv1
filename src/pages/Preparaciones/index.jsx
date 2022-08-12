import React, { useEffect, useState } from "react";
import api from "./api";
import Createmodal from "./components/modal";
import { Table, Button, Container } from "reactstrap";
import {
  Card,
  ListGroup,
  ListGroupItem,
  CardGroup,
  Row,
  Col,
} from "react-bootstrap";
import { FcPlus, FcFinePrint } from "react-icons/fc";
import { FiEdit3, FiDelete } from "react-icons/fi";

const Preparaciones = () => {
  const [data, setData] = useState(Array);
  const [stateModal, setstateModal] = useState(false);
  const [dateEditPre, setDateEditPre] = useState({});
  const [stateAlimento, setstateAlimento] = useState(false);
  const [stateDetalleAlime, setstateDetalleAlime] = useState(false);
  const [stateEdit, setstateEdit] = useState(false);
  const [stateDelete, setstateDelete] = useState(false);
  const [dateDetalle, setDateDetalle] = useState({});

  const res = async () => {
    const dataA = await api("http://localhost:3000/getPreparaciones");
    setData(dataA.data.res);
  };
  useEffect(() => {
    res();
  }, [stateModal]);
  useEffect(() => {
    if (!setDateEditPre) {
      setDateEditPre({});
    }
  }, [stateEdit, stateDelete]);

  console.log(data);

  return (
    <>
      <div className="row">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Categorias</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr>
              <td>{element.id}</td>
              <td>{element.nombre}</td>
              <td>{element.categoriasCal}</td>
              <td>
              <FcPlus
                    size="2rem"
                    onClick={() => {
                      setstateAlimento(!stateAlimento);
                      setDateEditPre({
                        dataId: element.id,
                        dataNombre: element.nombre,
                      });
                    }}
                  />
                {"  "}
                <FcFinePrint
                    size="2rem"
                    className="click"
                    onClick={() => {setstateDetalleAlime(!stateDetalleAlime);
                      setDateDetalle({
                        dataId: element.id,
                        dataNombre: element.nombre,
                      });
                    }}
                  />
                {"  "}
                <FiEdit3
                    className="click"
                    size="2rem"
                    color="F3F396"
                    onClick={() => {
                      setstateEdit(!stateEdit);
                      setDateEditPre({
                        dataId: element.id,
                        dataNombre: element.nombre,
                      });
                    }}
                  />
                {"  "}
                <FiDelete
                    className="click"
                    size="2rem"
                    color="red"
                    onClick={() => {
                      setstateDelete(!stateDelete);
                      setDateEditPre({
                        dataId: element.id,
                        dataNombre: element.nombre,
                      });
                    }}
                  />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
         <Button variant="succes" onClick={() => setstateModal(!stateModal)}>
          {" "}
          ingresar preparacion
        </Button>
      </div>
      
      <Createmodal
        data={data}
        state={stateModal}
        setState={setstateModal}
        stateEdit={stateEdit}
        setstateEdit={setstateEdit}
        stateDelete={stateDelete}
        setstateDelete={setstateDelete}
        dateEditPre={dateEditPre}
        stateAlimento={stateAlimento}
        setstateAlimento={setstateAlimento}
        setstateDetalleAlime={setstateDetalleAlime}
        stateDetalleAlime={stateDetalleAlime}
        dateDetalle={dateDetalle}
      />
    </>
  );
};

export default Preparaciones;
