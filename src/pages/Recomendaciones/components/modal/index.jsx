import React, { useState, useEffect } from "react";
import "./index.css";
import api from "../../api";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
  Alert,
  Container,
  Table,
} from "reactstrap";
import axios from "axios";
import Inputs from "./components/input/inputs";
import Select from "./components/select";

const Createmodal = ({
  data,
  state,
  setState,
  stateEdit,
  setstateEdit,
  deletedata,
  setDeleteData,
  stateDelete,
  setstateDelete,
  stateNutriente,
  stateDetalleNut,
  setstateNutriente,
  setstateDetalleNut,
  addnutri,
  dataRe,
})  =>{
  const [nombre, setNombre] = useState("");
  const [dataselect, setDataselect] = useState([]);
  const [dataselectM, setDataselectM] = useState([]);
  const [modalidad, setModalidad] = useState(-1);
  const [grupoedad, setGrupoEdad] = useState(-1);
  const [norma, setNorma] = useState(-1);
  const [dataselectN, setDataselectN] = useState([]);
  const [nutriente, setNutriente] = useState(-1);
  const [valueAporte, setValueAporte] = useState("");
  const [dataReNutri, setDataReNutri] = useState([]);
  const [stateMEditNutriente, setstateMEditNutriente] = useState(false);
  const [stateDeleteNutri, setstateDeleteNutri] = useState(false);
  const [stateDEditNutriente, setstateDEditNutriente] = useState({});
  const [stateDdeleteNutriente, setstateDdeleteNutriente] = useState({});  
  const [dataeditNutri, setDataeditNutri] = useState("");
  const res = async () => {
    const dataA = await api("http://localhost:3000/getModalidadesCal");
    setDataselect(dataA.data.res);
  };
  const resGrupoE = async () => {
    const dataA = await api("http://localhost:3000/getGrupoEdades");
    setDataselectM(dataA.data.res);
  };
  const resNutirente = async () => {
    const dataA = await api("http://localhost:3000/getNutrientesCal");
    setDataselectN(dataA.data.res);
  };
  const resReco = async () => {
    const dataA = await api(
      `http://localhost:3000/getDetalleRecoNutriRela?id=${addnutri.dataId}`
    );
    setDataReNutri(dataA.data.res);
  };
 
  
  useEffect(() => {
    res();
    resGrupoE();
    resNutirente();
  }, [])

  useEffect(() => {
    resReco();
  }, [addnutri])
  
  

  function handleChange(name, value) {
    
    if (name === "nombre") {
      setNombre(value);
    }
    if (name === "modalidad") {
      setModalidad(value);
    }
    if (name === "grupoedad") {
      setGrupoEdad(value);
    }
    if (name === "norma") {
      setNorma(value);
    }
    if (name === "nutriente") {
      setNutriente(value);
    }
    if (name === "aporte") {
      setValueAporte(value);
    }
  }

  function handleSubmit() {
    if (grupoedad > 0 && modalidad > 0 && nombre !== "") {
      let url = "http://localhost:3000/createRecomendacionesCal";
      let data = { nombre, modalidad, grupoedad, norma };
      axios.post(url, data).then((res) => {
        if (res.data.error === 3) {
          setState(false);
        } else {
          setState(false);
        }
        
      });
    }
  }

  function handleCreateNutriRelacion(params) {
    let url = "http://localhost:3000/createRecoNutriRela";
    let data = {
      nutriente,
      valueAporte,
      dataRe: dataRe.id,
    };
    
    axios.post(url, data).then((res) => {
      if (res.data.error === 3) {
        setstateNutriente(false);
      } else {
        setstateNutriente(false);
      }
    
    });
  }

  function handleDeletenutriReco(params) {
   
  }
  const handleDeleteReco = (params) =>{
 
    let url = "ubi";
    let data = { id: params.id };
    axios.post(url, data).then((res) => {
      if (res.data.error === 3) {
        setstateDelete(true);
      } else {
        setstateDelete(true);
      }
    });
  }

  return (
    <>
      <Modal isOpen={stateDelete}>
        <ModalHeader>
          <div>
            <h3>Eliminar Recomendacion</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <Alert color="danger">
            Esta seguro que quiere eliminar la Recomendacion {deletedata.nombre}
            ?
          </Alert>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleDeleteReco(deletedata)}>
            Eliminar
          </Button>
          <Button color="danger" onClick={() => setstateDelete(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={stateDeleteNutri}>
        <ModalHeader>
          <div>
            <h3>Eliminar Nutriente</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <Alert color="danger">
            <p> Esta seguro que quiere eliminar el nutriente {stateDdeleteNutriente.dataNutriente} para la
            recomendacion ?</p>
          </Alert>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleDeletenutriReco(stateDdeleteNutriente)}>
            Eliminar
          </Button>
          <Button color="danger" onClick={() => setstateDeleteNutri(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={stateEdit}>
        <ModalHeader>
          <div>
            <h3>Editar Categoria</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Categoria:</label>
            <Inputs
              className="form-control"
              attribute={{
                id: "categoria",
                name: "categoria",
                type: "text", 
                placeholder: "Ingrese categoria",
              }}
              handleChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Modalidades:</label>

            <Select
              className="form-control"
              attribute={{
                id: "modalidad",
                name: "modalidad",
                type: "select",
                data: dataselect,
              }}
              handleChange={handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary">Editar</Button>
          <Button color="danger" onClick={() => setstateEdit(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={state}>
        <ModalHeader>
          <div>
            <h3>Ingresar Recomendacion</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Nombre:</label>

            <Inputs
              className="form-control"
              attribute={{
                id: "nombre",
                name: "nombre",
                type: "text",
                placeholder: "Ingrese nombre",
              }}
              handleChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Modalidades:</label>

            <Select
              className="form-control"
              attribute={{
                id: "modalidad",
                name: "modalidad",
                type: "select",
                data: dataselect,
              }}
              handleChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Grupo Edades:</label>

            <Select
              className="form-control"
              attribute={{
                id: "grupoedad",
                name: "grupoedad",
                type: "select",
                data: dataselectM,
              }}
              handleChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Norma:</label>

            <Inputs
              className="form-control"
              attribute={{
                id: "norma",
                name: "norma",
                type: "text",
                placeholder: "Ingrese norma",
              }}
              handleChange={handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Insertar
          </Button>
          <Button className="btn btn-danger" onClick={() => setState(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={stateNutriente}>
        <ModalHeader>
          <div>
            <h3>Agregar Nutrientes</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>{dataRe.nombre}</label>
          </FormGroup>

          <FormGroup>
            <label>Nutriente:</label>

            <Select
              className="form-control"
              attribute={{
                id: "nutriente",
                name: "nutriente",
                type: "select",
                data: dataselectN,
              }}
              handleChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Aporte:</label>

            <Inputs
              className="form-control"
              attribute={{
                id: "aporte",
                name: "aporte",
                type: "number",
                placeholder: "Ingrese aporte",
              }}
              handleChange={handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleCreateNutriRelacion}>
            Insertar
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => setstateNutriente(false)}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={stateDetalleNut} size="lg">
        <ModalHeader>
          <div>
            <h3>Detalle Nutriente</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <Container>
            <Table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nutriente</th>
                  <th>Valor</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {dataReNutri.map((element) => (
                  <tr>
                    <td>{element.id}</td>
                    <td>{element.nutrientesCal}</td>
                    <td>{element.valor}</td>
                    <td>
                      <Button
                        color="warning"
                        onClick={() => {
                          setstateMEditNutriente(!stateMEditNutriente);
                          setstateDEditNutriente({
                            dataId: element.id,
                            dataNutriente: element.nutrientesCal,
                            dataValue: element.valor,
                          });
                        }}
                      >
                        Edit
                      </Button>
                      {"  "}
                      <Button
                        color="danger"
                        onClick={() => {
                          setstateDeleteNutri(!stateDelete);
                          setstateDdeleteNutriente({
                            dataId: element.id,
                            dataNutriente: element.nutrientesCal,
                            dataValue: element.valor,
                          });
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn btn-danger"
            onClick={() => setstateDetalleNut(false)}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={stateMEditNutriente}>
        <ModalHeader>
          <div>
            <h3>Editar Nutriente</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Nutriente:</label>
            {stateDEditNutriente.dataNutriente}
          </FormGroup>
          <FormGroup>
            <label>Valor:</label>
            <Inputs
              className="form-control"
              attribute={{
                id: "aportenutri",
                name: "aportenutri",
                type: "number",
                placeholder: "Ingrese el valor que aporta este nutriente",
                value: dataeditNutri,
              }}
              handleChange={handleChange}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Actualizar
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => setstateMEditNutriente(false)}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Createmodal;
