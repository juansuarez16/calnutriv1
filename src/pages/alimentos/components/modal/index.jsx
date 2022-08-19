import React, { useEffect, useState } from "react";
import "./index.css";
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
import api from "../../api";
import Select from "./components/select";

const  Createmodal=({
  data,
  state,
  setState,
  stateEdit,
  setstateEdit,
  stateDelete,
  setstateDelete,
  stateNutriente,
  setstateNutriente,
  stateDetalleNut,
  setstateDetalleNut,
  dateEditPre,
  addnutri,
  dateDeletePre,
  setDateDeletePre
})=> {
  const [alimento, setAlimento] = useState("");
  const [dataselectC, setDataselectC] = useState([]);
  const [dataselectF, setDataselectF] = useState([]);
  const [dataselectN, setDataselectN] = useState([]);
  const [dataselecA, setDataselectA] = useState([]);
  const [dataRNA, setDataRNA] = useState([]);
  const [componentes, setComponentes] = useState(-1);
  const [fuente, setFuentes] = useState(-1);
  const [alimentoSelect, setAlimentoSelect] = useState("");
  const [nutriente, setNutriente] = useState(-1);
  const [valor, setValor] = useState("");
  const [stateMEditNutriente, setstateMEditNutriente] = useState(false);
  const [stateDEditNutriente, setstateDEditNutriente] = useState({});
 
  const resComp = async () => {
    const dataA = await api("http://localhost:3000/getComponentesCal");
    setDataselectC(dataA.data.res);
  };
  const resFuente = async () => {
    const dataA = await api("http://localhost:3000/getFuentesCal");
    setDataselectF(dataA.data.res);
  };
  const resAlimento = async () => {
    const dataA = await api("http://localhost:3000/getAlimentos");
    setDataselectA(dataA.data.res);
  };
  const resNutirente = async () => {
    const dataA = await api("http://localhost:3000/getNutrientesCal");
    setDataselectN(dataA.data.res);
  };
  const resRnutirenteAli = async () => {
    const dataA = await api(
      `http://localhost:3000/getNutriAliRela?id=${addnutri.dataId}`
    );
    setDataRNA(dataA.data.res);
  };
  const [dataedit, setDataedit] = useState("");
  const [dataeditNutri, setDataeditNutri] = useState("");
  const [deletenutri, setDeletenutri] = useState(false);
  useEffect(() => {
    resComp();
    resFuente();    
  }, []); 
  useEffect(() => {
    setDataedit(dateEditPre.dataNombre);
    resAlimento();
  }, [stateEdit]);
  useEffect(() => {
    resAlimento();
    resNutirente();
    setDataeditNutri("");
  }, [stateNutriente]);
  useEffect(() => {
    resRnutirenteAli();
  }, [stateDetalleNut]);
  useEffect(() => {
    setDataedit("");
    resRnutirenteAli();
    setNutriente(-1)
  }, [stateMEditNutriente]);
 
  
  function handleChange(name, value) {   
    if (name === "alimento") {
      setAlimento(value);
    }
    if (name === "componente") {
      setComponentes(value);
    }
    if (name === "fuente") {
      setFuentes(value);
    }
    if (name === "nutriente") {
      setNutriente(value);
    }
    if (name === "valor") {
      setAlimentoSelect(addnutri.dataId);
      setValor(value);
    }
    if (name === "alimentoEdit") {
      setAlimentoSelect(dateEditPre.dataId);
      setDataedit(value);
    }
    if (name === "aportenutri") {      
      setDataeditNutri(value);
    }
  }
  function handleSubmit() {
    if (alimento !== "") {
      let url = "http://localhost:3000/createAlimentos";
      let data = { alimento, componentes, fuente };
      axios.post(url, data).then((res) => {
        if (res.data.error === 3) {
          setState(false);
          
        } else {
          setState(false);
          
        }        
      });
    }  else if (dataedit !== "" && alimentoSelect !== "") {
      let url = "http://localhost:3000/updateAlimentos";
      let data = { dataedit, alimentoSelect };
      axios.post(url, data).then((res) => {
        if (res.data.error === 3) {
          setstateEdit(false);
         
        } else {
          setstateEdit(false);
          
        }
      });
    }
  }
  function handleDelete(params) {    
    if(Object.entries(params).length != 0){
      let url = "http://localhost:3000/deleteAlimentos";
    let data =  {data:params.dataId};
    axios.post(url, data).then((res) => {
      if (res.data.error === 3) {
        setstateDelete(false);
        
      } else {
        setstateDelete(false);       
      }
    });
    }
    
  }
  function handleNutriente() {
   
      let url = "http://localhost:3000/createNutrientesAlim";
      let data = { alimentoSelect, nutriente, valor };
      axios.post(url, data).then((res) => {
        if (res.data.error === 3) {
          setstateNutriente(false);
          
        } else {
          setstateNutriente(false);         
        }
      });
    }
    function handleUpdateNutriente() {
    
        let url = "http://localhost:3000/updateNutrientesCal";
        let data = { dataeditNutri ,nutrienteid:stateDEditNutriente.dataId};
        axios.post(url, data).then((res) => {
          if (res.data.error === 3) {
            setstateMEditNutriente(false);
           
          } else {
            setstateMEditNutriente(false);
            
          }
        });
     
    }
    function handleDeleteNutriente(dataDelete) {  
     
      if (Object.entries(dataDelete).length != 0) {
       
      let url = "http://localhost:3000/deleteNutrientesAlimen";
      let data = { id:dataDelete.dataId };
      axios.post(url, data).then((res) => {
        if (res.data.error === 3) {
          setDeletenutri(false);
         
        } else {
          setDeletenutri(false);
          
        }
      });
      }
      
    
    }
  
const [dropdown, setDropdown] = useState(false)
const abrirCerrarDropdown=()=>{
  setDropdown(!dropdown);
}
  return (
    <>
      <Modal isOpen={stateDelete}>
        <ModalHeader>
          <div>
            <h3>Eliminar Alimento</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <Alert color="danger">
            Esta seguro que quiere eliminar el alimento {dateDeletePre.dataNombre} ? 
          </Alert>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={()=> handleDelete(dateDeletePre)}>Eliminar</Button>
          <Button color="danger" onClick={() => setstateDelete(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={deletenutri}>
        <ModalHeader>
          <div>
            <h3>Eliminar Nutriente</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <Alert color="danger">
            Esta seguro que quiere eliminar el nutriente {stateDEditNutriente.dataNutriente} ? 
          </Alert>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={()=>handleDeleteNutriente(stateDEditNutriente)}>Eliminar</Button>
          <Button color="danger" onClick={() => setDeletenutri(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={stateEdit}>
        <ModalHeader>
          <div>
            <h3>Editar Alimentos</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Alimento:</label>
            <Inputs
              className="form-control"
              attribute={{
                id: "alimentoEdit",
                name: "alimentoEdit",
                type: "text",
                placeholder: "Editar Alimento",
                value: dataedit,
              }}
              handleChange={handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={()=> handleSubmit}>
            Actualizar
          </Button>
          <Button color="danger" onClick={() => setstateEdit(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={state}>
        <ModalHeader>
          <div>
            <h3>Insertar Alimento</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          
          <FormGroup>
            <label>Alimento:</label>
            <Inputs
              className="form-control"
              attribute={{
                id: "alimento",
                name: "alimento",
                type: "text",
                placeholder: "Ingrese alimento",
              }}
              handleChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Componentes:</label>
            <Select              
              attribute={{
                id: "componente",
                name: "componente",
                type: "select",
                data: dataselectC,
              }}
              handleChange={handleChange}
            />          
          </FormGroup>
          <FormGroup>
            <label>Fuentes:</label>
            <Select              
              attribute={{
                id: "fuente",
                name: "fuente",
                type: "select",
                data: dataselectF,
              }}
              handleChange={handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          
           
          <Button color="primary" onClick={()=>handleSubmit}>
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
            <h3>Insertar Nutriente</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Alimento:</label>
            {addnutri.dataNombre}
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
            <label>Valor:</label>

            <Inputs
              className="form-control"
              attribute={{
                id: "valor",
                name: "valor",
                type: "number",
                placeholder: "Ingrese el valor que aporta este Nutriente",
              }}
              handleChange={handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleNutriente}>
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
                  <th>Alimento</th>
                  <th>Nutriente</th>
                  <th>Valor</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {dataRNA.map((element) => (
                  <tr>
                    <td>{element.id}</td>
                    <td>{element.NombreAlimento}</td>
                    <td>{element.Nutriente}</td>
                    <td>{element.valor}</td>
                    <td>
                      <Button
                        color="warning"
                        onClick={() => {
                          setstateMEditNutriente(!stateMEditNutriente);
                          setstateDEditNutriente({
                            dataId: element.id,
                            dataNutriente: element.Nutriente,
                            dataValue: element.valor,
                          });
                        }}
                      >
                        Edit
                      </Button>
                      {"  "}
                      <Button
                        color="danger"
                        onClick={() =>{ setDeletenutri(!deletenutri)
                          setstateDEditNutriente({
                            dataId: element.id,
                            dataNutriente: element.Nutriente,
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
                value: stateDEditNutriente.dataValue
              }}
              handleChange={handleChange}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdateNutriente}>
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
