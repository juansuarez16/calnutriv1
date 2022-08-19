import React, { useState } from "react";
import "./index.css";
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
function Createmodal({
  data, 
  state,
  setState,
  stateEdit,
  setstateEdit,
  stateDelete,
  setstateDelete,
}) {
  const [departamento, setDepartamento] = useState('');

    

  function handleChange(name,value) {
      if(name==='departamento'){
        setDepartamento(value);       
      }
  }
  function handleSubmit() {    


    
    let url = "http://localhost:3000/createDepartamentoCal";
        let data={departamento};
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
            <h3>Eliminar Departamento</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <Alert color="danger">
            Esta seguro que quiere eliminar la departamento?
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
            <h3>Editar Departamento</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Departamento:</label>
            <Inputs className="form-control" attribute={{
            id:'departamento',
            name:'departamento',
            type:'text',
            placeholder:'Ingrese departamento',                               
            }}
            
            handleChange = {handleChange}/>
           
          </FormGroup>
          <FormGroup>
            <label>Departamento:</label>
            <Inputs className="form-control" attribute={{
            id:'departamento',
            name:'departamento',
            type:'text',
            placeholder:'Ingrese departamento',                               
            }}
            
            handleChange = {handleChange}/>
           
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
            <h3>Ingresar Departamento</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input
              className="form-control"
              readOnly
              type="text"              
            />
          </FormGroup>

          <FormGroup>
            <label>Departamento:</label>

            <Inputs className="form-control" attribute={{
            id:'departamento',
            name:'departamento',
            type:'text',
            placeholder:'Ingrese departamento'
            }}  
            handleChange = {handleChange}/>
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
