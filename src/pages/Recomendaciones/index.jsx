import React, { useEffect, useState } from "react";
import api from "./api";
import Createmodal from "./components/modal";
import { Table, Button, Container } from "reactstrap";
import { FcPlus, FcFinePrint } from "react-icons/fc";
import { FiEdit3, FiDelete } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const Recomendaciones = () => {
  const [data, setData] = useState([]);
  const [deletedata, setDeleteData] = useState([]);
  const [stateModal, setstateModal] = useState(false);
  const [stateNutriente, setstateNutriente] = useState(false);
  const [stateEdit, setstateEdit] = useState(false);
  const [stateDelete, setstateDelete] = useState(false);
  const [dataRe, setDataRe] = useState("");
  const [stateDetalleNut, setstateDetalleNut] = useState(false);
  const [addnutri, setAddNutri] = useState({});

  const res = async () => {
    const dataA = await api("http://localhost:3000/getRecomendacionesCal");
    setData(dataA.data.res);
  };
  useEffect(() => {
    res();
  }, []);

  

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Recomendaciones</th>
            <th>Modalidades</th>
            <th>Gruposedades</th>
            <th>Norma</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr>
              <td>{element.id}</td>
              <td>{element.nombre}</td>
              <td>{element.mod_nombre}</td>
              <td>{element.gruposEdades}</td>
              <td>{element.Norma}</td>
              <td>
                <FcPlus
                style={{cursor:'pointer'}}
                  size={"2rem"}
                  onClick={() => {
                    setstateNutriente(!stateNutriente);
                    setDataRe(element);
                  }}
                />
                {"  "}
                <FcFinePrint
                   style={{cursor:'pointer'}}
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
                style={{cursor:'pointer'}}
                  color="purple"
                  size={"2rem"}
                  onClick={() => setstateEdit(!stateEdit)}
                  onChange={() => setData(element)}
                />
                {"  "}
                <RiDeleteBin5Line
                style={{cursor:'pointer'}}
                  size={"2rem"}
                  color="red"
                  onClick={() => {setstateDelete(!stateDelete);
                              setDeleteData(element)
                }}
                />
              </td>
            </tr>
          ))}
        </tbody>
        
      </Table>
      <AiOutlineAppstoreAdd
          size={"2rem"}
          color={"blue"}
          variant="succes"
          onClick={() => setstateModal(!stateModal)}
        />
      <Createmodal
        data={data}
        state={stateModal}
        deletedata={deletedata}
        setDeleteData={setDeleteData}
        setState={setstateModal}
        stateEdit={stateEdit}
        setstateEdit={setstateEdit}
        stateDelete={stateDelete}
        setstateDelete={setstateDelete}
        stateNutriente={stateNutriente}
        setstateNutriente={setstateNutriente}
        dataRe={dataRe}
        stateDetalleNut={stateDetalleNut}
        setstateDetalleNut={setstateDetalleNut}
        addnutri={addnutri}
      />
    </>
  );
};
export default Recomendaciones;
