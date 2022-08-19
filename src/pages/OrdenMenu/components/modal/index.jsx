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
  Table
} from "reactstrap";
import axios from "axios";
import Inputs from "./components/input/inputs";
import api from "../../api";
import Select from "./components/select";
function Createmodal({
  data, 
  state,
  setState,
  stateEdit,
  setstateEdit,
  stateDelete,
  setstateDelete,  
  setstateNutriente,
  
}) {
  const [aliasorden, setAliasorden] = useState('');
  const [dataselectC, setDataselectC] = useState([]);  
  const [norden, setNorden] = useState('');  
  const [licitacion, setLicitacion] = useState(-1);
 

  const resComp = async () => {
    const dataA = await api("http://localhost:3000/getLicitacionesCal");
    setDataselectC(dataA.data.res);
  };


  useEffect(() => {
    resComp();
    
     
  }, []);
 


  function handleChange(name,value) {
      if(name==='ordenmenu'){
        setAliasorden(value);       
      }
      if(name==='numeroorden'){
        setNorden(value);       
      }
      if(name==='licitacion'){
        setLicitacion(value);       
      }
      
  }
  function handleSubmit() {
    if (aliasorden !==''){
      let url = "http://localhost:3000/createordenMenus";
      let data={aliasorden,
        norden,
        licitacion};
    axios.post(url,data).then((res) => {
      if (res.data.error === 3) {
          setState(false);         
      } else {
          setState(false);        
      }
  
    });
    }
  }



  return (
    <>
      <Modal isOpen={stateDelete}>
        <ModalHeader>
          <div>
            <h3>Eliminar Orden Menu</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <Alert color="danger">
            Esta seguro que quiere eliminar la Orden Menu?
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
            <h3>Editar Orden Menu</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Alias Orden:</label>
            <Inputs className="form-control" attribute={{
            id:'ordenmenu',
            name:'ordenmenu',
            type:'text',
            placeholder:'Ingrese orden menu', 
            value:{data}                     
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
            <h3>Insertar Orden Menu</h3>
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
            <label>Alias Orden:</label>
            <Inputs className="form-control" attribute={{
            id:'ordenmenu',
            name:'ordenmenu',
            type:'text',
            placeholder:'Ingrese orden menu'                           
            }}
            
            handleChange = {handleChange}/>
           
          </FormGroup>  
          <FormGroup>
            <label>N Orden:</label>
            <Inputs className="form-control" attribute={{
            id:'numeroorden',
            name:'numeroorden',
            type:'text',
            placeholder:'Ingrese numero de orden', 
                              
            }}
            
            handleChange = {handleChange}/>
           
          </FormGroup>        
          <FormGroup>
            <label>Licitacion:</label>

            <Select
              className="form-control"
              attribute={{
                id: "licitacion",
                name: "licitacion",
                type: "select",
                data: dataselectC,
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
