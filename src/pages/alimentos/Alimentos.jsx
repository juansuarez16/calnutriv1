import React, { useEffect, useState } from "react";
import api from "./api";
import Createmodal from "./components/modal";
import "./Alimentos.css";
import M from "materialize-css";
import { Table } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { FcPlus, FcFinePrint } from "react-icons/fc";
import { FiEdit3, FiDelete } from "react-icons/fi";
import { AiFillFileAdd } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(50),
      height: theme.spacing(30),
    },
  },
}));

const Alimentos = () => {
  const [data, setData] = useState([]);
  const [stateModal, setstateModal] = useState(false);
  const [dateEditPre, setDateEditPre] = useState({});
  const [addnutri, setAddNutri] = useState({});
  const [stateNutriente, setstateNutriente] = useState(false);
  const [stateDetalleNut, setstateDetalleNut] = useState(false);
  const [stateEdit, setstateEdit] = useState(false);
  const [stateDelete, setstateDelete] = useState(false);
  const [dateDeletePre, setDateDeletePre] = useState({});

  const res = async () => {
    const dataA = await api("http://localhost:3000/getAlimentos");
    setData(dataA.data.res);
  };
  useEffect(() => {
    res();
  }, []);
  useEffect(() => {
    res();
  }, [stateModal, stateEdit, stateDelete]);

  useEffect(() => {
    let elems = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(elems, {
      toolbarEnabled: true,
    });
  }, []);

  const classes = useStyles();

  return (
    <>
      <div className="fixed-action-btn white">
        <AiFillFileAdd
          className="click"
          size="3rem"
          color="blue"
          onClick={() => setstateModal(!stateModal)}
        />
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Componente</th>
            <th>Fuente</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr>
              <td>{element.id}</td>
              <td>{element.nombre}</td>
              <td>{element.ComponentesCal}</td>
              <td>{element.fuentesCal}</td>

              <td>
                <FcPlus
                  size="2rem"
                  onClick={() => {
                    setstateNutriente(!stateNutriente);
                    setAddNutri({
                      dataId: element.id,
                      dataNombre: element.nombre,
                    });
                  }}
                />
                {"  "}
                <FcFinePrint
                  size="2rem"
                  className="click"
                  onClick={() => {
                    setstateDetalleNut(!stateDetalleNut);
                    setAddNutri({
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
                    setDateDeletePre({
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
        dateEditPre={dateEditPre}
        dateDeletePre={dateDeletePre}
        setDateDeletePre={setDateDeletePre}
        addnutri={addnutri}
      />
    </>
  );
};

export default Alimentos;
