import React, { useEffect, useState } from "react";
import api from "./api";
import Createmodal from "./components/modal";
import {
  Table,
  Button,
  Container,

  
} from "reactstrap";
import { FiEdit3, FiDelete } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const Preparaciones = () => {
  const [data, setData] = useState(Array);
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



 

  console.log(data);
  
  
  

  return (
    <>
      
        
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
                        <td><FiEdit3  size={"2rem"} color="warning" onClick={() => setstateEdit(!stateEdit)}/>{"  "}
                        <RiDeleteBin5Line size={"2rem"} color="red" onClick={() => setstateDelete(!stateDelete)}/></td>
                    </tr>
                ))
                  
              }             
           
          </tbody>
        </Table>
        <Button variant="succes" onClick={() => setstateModal(!stateModal)}> ingresar preparacion</Button>

      <Createmodal data={data} state={stateModal} setState={setstateModal} stateEdit={stateEdit} setstateEdit={setstateEdit} 
    stateDelete={stateDelete}  setstateDelete={setstateDelete}
    />


     

    </>
  );
};

export default Preparaciones;
