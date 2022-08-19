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
import Inputs from "./components/inputs";
import Select from "./components/select";
import axios from "axios";
import api from "../../api";

function Createmodal({
  data, 
  state,
  setState,
  stateEdit,
  setstateEdit,
  stateDelete,
  setstateDelete,
  dateEditPre,
  stateAlimento,
  setstateAlimento,
  setstateDetalleAlime,
  stateDetalleAlime,
  dateDetalle
}) {
  const [preparacion, setpreparacion] = useState('');
  const [dataRPA, setDataRPA] = useState([]);
  const [dataRPreA, setDataRPreA] = useState([]);
  const [dataselectC, setDataselectC] = useState([]);
  const [dataselectCa, setDataselectCa] = useState([]);
  const [categoria, setCategoria] = useState(-1); 
  
  const [dateEditPreAl,setDateEditPreAl]=useState({});
  const resComp = async () => {
    const dataA = await api("http://localhost:3000/getComponentesCal");
    setDataselectC(dataA.data.res);
  };
  const rescategoria = async () => {
    const dataA = await api("http://localhost:3000/getCategoriasCal");
    setDataselectCa(dataA.data.res);
  };
  const resAlimento = async () => {
    const dataA = await api("http://localhost:3000/getAlimentos");
    setDataRPA(dataA.data.res);
  };
  const resPrepAli = async () => {
    const dataA = await api(`http://localhost:3000/getPreAliRela?id=${dateDetalle.dataId}`);
    setDataRPreA(dataA.data.res);
    
  };

useEffect(() => {
  resPrepAli();
}, [stateDetalleAlime]);
useEffect(() => {
  resComp();  
  rescategoria();
  setpreparacion(''); 
  
}, [state]);
useEffect(() => {
  resAlimento();
}, [stateAlimento]);

function handleChange(name,value) {
  if(name==='preparacion'){
    setpreparacion(value);       
  }
  if(name==='categoria'){
    setCategoria(value);       
  }
}



function handleSubmit() { 
  if (preparacion!=='' && categoria > 0) {
    let url = "http://localhost:3000/createPreparaciones";
      let data={preparacion,categoria};
    axios.post(url,data).then((res) => {
      if (res.data.error === 3) {
          setState(false);
         
      } else {
          setState(false);
        
      }
      
    });
  }
 
}
function handlePreparacion(aliid,preid) {
  let url = "http://localhost:3000/createPreAliRela";
  let data={aliid,preid};
axios.post(url,data).then((res) => {
  if (res.data.error === 3) {
    setstateAlimento(false);
      
  } else {
    setstateAlimento(false);
    
  }

});
}

  return (
    <>
    <Modal isOpen={stateDelete}>
      <ModalHeader>
        <div>
          <h3>Eliminar Preparacion</h3>
        </div>
      </ModalHeader>

      <ModalBody>
      <FormGroup>
          <label>Id:</label>

          <input className="form-control" readOnly type="text" value={dateEditPre.dataId}/>
        </FormGroup>
        <Alert color="danger">
          Esta seguro que quiere eliminar la preparacion {dateEditPre.dataNombre}?
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
          <h3>Editar Preparacion</h3>
        </div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>Id:</label>

          <input className="form-control" readOnly type="text" value={dateEditPre.dataId}/>
        </FormGroup>

        <FormGroup>
          <label>Preparacion:</label>
          <Inputs className="form-control"
          attribute={{
          id:'preparacion',
          name:'preparacion',
          type:'text',
          placeholder:'Ingrese preparacion',
          value:dateEditPre.dataNombre                           
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
          <h3>Ingresar preparacion</h3>
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
          <label>Preparacion:</label>

          <Inputs className="form-control" attribute={{
          id:'preparacion',
          name:'preparacion',
          type:'text',
          placeholder:'Ingrese preparacion'
          }}  
          handleChange = {handleChange}/>
        </FormGroup>
        <FormGroup>
            <label>Categoria:</label>

            <Select
              className="form-control"
              attribute={{
                id: "categoria",
                name: "categoria",
                type: "select",
                data: dataselectCa,
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
    <Modal isOpen={stateAlimento}>
      <ModalHeader>
        <div>
          <h3>Ingresar alimento</h3>
        </div>
      </ModalHeader>

      <ModalBody>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Alimento</th>
              <th>Componente</th>          
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody> 

              {
                dataRPA.map(element => (
                    <tr>
                        <td>{element.id}</td>
                        <td>{element.nombre}</td>
                        <td>{element.ComponentesCal}</td>                       
                        <td>
                        <Button color="success" onClick={async () =>  {                          
                          await handlePreparacion(element.id,dateEditPre.dataId) ;                        
                          }}  >Seleccionar</Button>
                        </td>
                    </tr>
                ))
                  
              }             
           
          </tbody>
        </Table>
      </Container>
      </ModalBody>
      <ModalFooter>       
        <Button className="btn btn-danger" onClick={() => setstateAlimento(false)}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
    <Modal isOpen={stateDetalleAlime}>
      <ModalHeader>
        <div>
          <h3>Detalle Alimento</h3>
        </div>
      </ModalHeader>

      <ModalBody>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Preparacion</th>   
              <th>Alimento</th>                      
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody> 
              {dataRPreA?dataRPreA.map(element => (
                    <tr>
                        <td>{element.id}</td>
                        <td>{element.nombre}</td>
                        <td>{element.alimento}</td>                       
                        <td>
                        <Button color="warning" onClick={() => {
                          setstateEdit(!stateEdit);
                          setDateEditPreAl({
                            dataId:element.id,
                            dataNombre:element.nombre
                               })
                          }} >Edit</Button>{"  "}
                        <Button color="danger" onClick={() => {
                          setstateDelete(!stateDelete);
                          setDateEditPreAl({
                            dataId:element.id,
                            dataNombre:element.nombre
                               })}
                        
                        }>Delete</Button>
                        </td>
                    </tr>
                )):""
                  
              }             
           
          </tbody>
        </Table>
      </Container>
      </ModalBody>

      <ModalFooter>        
        <Button className="btn btn-danger" onClick={() => setstateDetalleAlime(false)}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  </>
  );
}

export default Createmodal;
