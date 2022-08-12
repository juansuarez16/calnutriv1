import React from "react";
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
function Createmodal({
  data,
  state,
  setState,
  stateEdit,
  setstateEdit,
  stateDelete,
  setstateDelete,
}) {
    


  return (
    <>  
    <Modal isOpen={stateDelete}>
        <ModalHeader>
          <div>
            <h3>Eliminar Preparacion</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <Alert color="danger">
            Esta seguro que quiere eliminar la Preparacion?
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

            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input className="form-control" name="personaje" type="text" />
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
            <h3>Crear Preparacion</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input
              className="form-control"
              readOnly
              type="text"
              value={data.idalimentosCal}
            />
          </FormGroup>

          <FormGroup>
            <label>Alimento:</label>
            <input
              className="form-control"
              name="alimento"
              type="text"
             
            />
          </FormGroup>
         
        </ModalBody>

        <ModalFooter>
          <Button color="primary" >
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
