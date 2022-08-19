import React from 'react'
import Pdfformat from './Pdfformat'
import {
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter
    
  } from "reactstrap";
 const ModalCalculo = ({resultadoTotal,statePrint,setstatePrint}) => {
    console.log(resultadoTotal);
  return (
    <div>
    <Modal isOpen={statePrint} fullscreen={'xxl-down'}>
        <ModalHeader>
          <div>
            <h3>Vista Previa</h3>
          </div>
        </ModalHeader>

        
        <Pdfformat/>
        

        <ModalFooter>
          <Button color="primary" onClick={()=> setstatePrint(false)}>Imprimir</Button>
          <Button color="danger" onClick={() => setstatePrint(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalCalculo;
