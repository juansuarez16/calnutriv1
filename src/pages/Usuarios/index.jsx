import React, { useEffect, useState } from "react";
import api from "./api";
import Createmodal from "./components/modal";
import {
  Table,
  Button,
  Container,

  
} from "reactstrap";


const Preparaciones = () => {
  const [data, setData] = useState([]);
  const [stateModal,setstateModal]=useState(false);
  const [stateEdit,setstateEdit]=useState(false);
  const [stateDelete,setstateDelete]=useState(false);
  
  
  const res = async () => {
    const dataA = await api();
    setData(dataA.data.res);
  };
  useEffect(() => {
    res();    
  }, []);



 


  
  
  

  return (
    <>
      <Container>
        <Button variant="succes" onClick={() => setstateModal(!stateModal)}> ingresar preparacion</Button>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Preparaciones</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody> 

              {
                data.map(element => (
                    <tr>
                        <td>{element.idpreparacionesCal}</td>
                        <td>{element.preparacion}</td>
                        <td><Button color="warning" onClick={() => setstateEdit(!stateEdit)}>Edit</Button>{"  "}
                        <Button color="danger" onClick={() => setstateDelete(!stateDelete)}>Delete</Button></td>
                    </tr>
                ))
                  
              }             
           
          </tbody>
        </Table>
      </Container>

      <Createmodal data={data} state={stateModal} setState={setstateModal} stateEdit={stateEdit} setstateEdit={setstateEdit} 
    stateDelete={stateDelete}  setstateDelete={setstateDelete}
    />


     

    </>
  );
};

export default Preparaciones;
