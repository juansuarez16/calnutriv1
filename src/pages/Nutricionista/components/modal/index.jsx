import React, { useEffect, useState } from "react";
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
} from "reactstrap";
import axios from "axios";
import Inputs from "./components/input/inputs";
import Select from "./components/select";
function Createmodal({
  data,
  state,
  setState,
  stateEdit,
  setstateEdit,
  stateDelete,
  setstateDelete,
}) {
  const [cargo, setCargos] = useState("");
  const [dataselect, setDataselect] = useState([]);
  const [usuario, setUsuario] = useState(-1);

  const res = async () => {
    const dataA = await api("http://localhost:3000/getUsuariosCal");
    setDataselect(dataA.data.res);
  };

  useEffect(() => {
    res();
  }, []);

  function handleChange(name, value) {
    if (name === "cargo") {
      setCargos(value);
    }
    if (name === "usuario") {
      setUsuario(value);
    }
  }
  function handleSubmit() {
    let url = "http://localhost:3000/createNutriCal";
    let data = { cargo, usuario };
    axios.post(url, data).then((res) => {
      if (res.data.error === 3) {
        setState(false);
      } else {
        setState(false);
       
      }
      
    });
  }

  return (
    <>
      <Modal isOpen={stateDelete}>
        <ModalHeader>
          <div>
            <h3>Eliminar Ciudad</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <Alert color="danger">
            Esta seguro que quiere eliminar la ciudad?
          </Alert>
        </ModalBody>

        <ModalFooter>
          <Button color="primary">Eliminar</Button>
          <Button color="danger" onClick={() => setstateDelete(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={stateEdit}>
        <ModalHeader>
          <div>
            <h3>Editar Ciudad</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Ciudad:</label>
            <Inputs
              className="form-control"
              attribute={{
                id: "ciudades",
                name: "ciudades",
                type: "text",
                placeholder: "Ingrese ciudad",
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
            <h3>Ingresar Ciudad</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Cargo:</label>

            <Inputs
              className="form-control"
              attribute={{
                id: "cargo",
                name: "cargo",
                type: "text",
                placeholder: "Ingrese ciudades",
              }}
              handleChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Usuario:</label>

            <Select
              className="form-control"
              attribute={{
                id: "usuario",
                name: "usuario",
                type: "select",
                data: dataselect,
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
    </>
  );
}

export default Createmodal;
