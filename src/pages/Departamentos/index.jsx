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

const Departamentos = () => {
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
  }, [stateModal]);

 
  
  return (
    <>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Departamento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody> 
              {data.map(element => (
                    <tr>
                        <td>{element.iddepartamentos}</td>
                        <td>{element.departamentoscol}</td>
                        <td><FiEdit3 size={"2rem"} color="warning" onClick={() => setstateEdit(!stateEdit)} onChange={() =>setData(element)} />{"  "}
                        <RiDeleteBin5Line size={"2rem"} color="red" onClick={() => setstateDelete(!stateDelete)}/></td>
                    </tr>
                ))  
              }
          </tbody>
          <Button variant="succes" onClick={() => setstateModal(!stateModal)}> ingresar departamento</Button>
        </Table>

     

    <Createmodal data={data} state={stateModal} setState={setstateModal} stateEdit={stateEdit} setstateEdit={setstateEdit} 
    stateDelete={stateDelete}  setstateDelete={setstateDelete}
    />


     

    </>
  );
};

export default Departamentos;
