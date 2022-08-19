import React from "react";
import Pdfformat from "./Pdfformat";
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
const ModalCalculo = ({ resultadoTotal, statePrint, setstatePrint }) => {

    const doc = new jsPDF();

      const jsPdfGenerator = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          
          doc.addImage(imgData, 'JPEG', 0, 0, 200, 300);
          doc.save('test.pdf');
        });
      };  
  return (
    <div>
      <Modal isOpen={statePrint} fullscreen={"xxl-down"}>
        <ModalHeader>
          <div>
            <h3>Vista Previa</h3>
          </div>
        </ModalHeader>

        <Pdfformat />

        <ModalFooter>
          <Button color="primary" onClick={jsPdfGenerator}>
            Imprimir
          </Button>
          <Button color="danger" onClick={() => setstatePrint(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCalculo;
