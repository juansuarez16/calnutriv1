import React, { useEffect, useState } from "react";
import "./index.css";

import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
  Alert
} from "reactstrap";
import Inputs from "./components/inputs";
import axios from "axios";
import Select from "./components/select";
import api from "../../api";
function Createmodal({
  data,
  state,
  setState,
  stateEdit,
  setstateEdit,
  stateDelete,
  setstateDelete,
}) {
    
  const [nombreLicitacion, getNombreLicitacion] = useState('');
  const [dataselect, setDataselect] = useState([]);
  const [vigencia, getVigencia] = useState('');
  const [observaciones, getObservaciones] = useState('');
  const [estado, setEstado] = useState(-1);
  

  const res = async () => {
    const dataA = await api("http://localhost:3000/getEstadoCal");
    setDataselect(dataA.data.res);
  };

  useEffect(() => {
    res();
  }, []);

function handleChange(name,value) {
    if(name==='nombrelicitacion'){
      getNombreLicitacion(value);       
    }
    if(name==='vigencia'){
      getVigencia(value);       
    }
    if(name==='observaciones'){
      getObservaciones(value);       
    }
    if(name==='estado'){
      setEstado(value);       
    }
}


function handleSubmit() {    


  
  let url = "http://localhost:3000/createLicitacionesCal";
      let data={nombreLicitacion,vigencia,observaciones,estado};
    axios.post(url,data).then((res) => {
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
            <h3>Eliminar Licitacion</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <Alert color="danger">
            Esta seguro que quiere eliminar la Licitacion?
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
            <h3>Editar Licitacion</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Nombre de la licitacion:</label>

            <Inputs className="form-control" attribute={{
            id:'nombrelicitacion',
            name:'nombrelicitacion',
            type:'text',
            placeholder:'Ingrese Nombre de la licitacion'
            }}  
            handleChange = {handleChange}/>
          </FormGroup>
          <FormGroup>
            <label>Vigencia:</label>

            <Inputs className="form-control" attribute={{
            id:'vigencia',
            name:'vigencia',
            type:'text',
            placeholder:'Ejemplo 2020,2021,Etc...'
            }}  
            handleChange = {handleChange}/>
          </FormGroup>
          <FormGroup>
            <label>Observaciones:</label>

            <Inputs className="form-control" attribute={{
            id:'observaciones',
            name:'observaciones',
            type:'text',
            placeholder:'observaciones'
            }}  
            handleChange = {handleChange}/>
          </FormGroup>
          <FormGroup>
            <label>Departamento:</label>

            <Select
              className="form-control"
              attribute={{
                id: "departamento",
                name: "departamento",
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
      <Modal  isOpen={state} >
        <ModalHeader>
          <div>
            <h3>Crear Licitacion</h3>
          </div>
        </ModalHeader>

        <ModalBody>
        <FormGroup>
            <label>Id:</label>

            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Nombre de la licitacion:</label>

            <Inputs className="form-control" attribute={{
            id:'nombrelicitacion',
            name:'nombrelicitacion',
            type:'text',
            placeholder:'Ingrese Nombre de la licitacion'
            }}  
            handleChange = {handleChange}/>
          </FormGroup>
          <FormGroup>
            <label>Vigencia:</label>

            <Inputs className="form-control" attribute={{
            id:'vigencia',
            name:'vigencia',
            type:'text',
            placeholder:'Ejemplo 2020,2021,Etc...'
            }}  
            handleChange = {handleChange}/>
          </FormGroup>
          <FormGroup>
            <label>Observaciones:</label>

            <Inputs className="form-control" attribute={{
            id:'observaciones',
            name:'observaciones',
            type:'text',
            placeholder:'observaciones'
            }}  
            handleChange = {handleChange}/>
          </FormGroup>
          <FormGroup>
            <label>Estado:</label>

            <Select
              className="form-control"
              attribute={{
                id: "estado",
                name: "estado",
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
          <Button
            className="btn btn-danger"
            onClick={() => setState(false)}
          >
            Cancelar
          </Button>
        </ModalFooter>
       
      </Modal>
    </>
  );
}

export default Createmodal;
