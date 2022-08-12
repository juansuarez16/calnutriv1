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
  stateRmenuPre,
  setstateRmenuPre,
  stateMenuid
  
}) {  
  const [dataselectC, setDataselectC] = useState(Array);
  const [dataselectM, setDataselectM] = useState(Array);
  const [dataselectL, setDataselectL] = useState(Array);
  const [dataselectO, setDataselectO] = useState(Array);
  const [dataselectNutri, setDataselectNutri] = useState(Array);
  const [dataselectPrepa, setDataselectPrepa] = useState(Array);
  const [dataselectG, setDataselectG] = useState(Array);
  const [dataselectMod, setDataselectMod] = useState(Array);
  const [ciudad, setCiudad] = useState(-1);
  const [ordenmenu, setOrdenmenu] = useState(-1);
  const [observaciones, setObservaciones] = useState('');
  const [licitacion, setLicitacion] = useState(-1);
  const [dataprepa, setDataprepa] = useState(-1);
  const [operador, setOperador] = useState(-1);
  const [nutricionista, setNutricionista] = useState(-1);
  const [gruposet, setGruposet] = useState(-1);
  const [modalidades, setModalidades] = useState(-1);

  

  const resOrdenMenu = async () => {
    const dataA = await api("http://localhost:3000/getordenMenus");
    setDataselectM(dataA.data.res);
  };
  const resLicitaciones = async () => {
    const dataA = await api("http://localhost:3000/getLicitacionesCal");
    setDataselectL(dataA.data.res);
  };
  const resCiudades= async () => {
    const dataA = await api("http://localhost:3000/getCiudadesCal");
    setDataselectC(dataA.data.res);
  };
  const resOpreadores = async () => {
    const dataA = await api("http://localhost:3000/getOperadorCal");
    setDataselectO(dataA.data.res);
  };
  const resNutricionista = async () => {
    const dataA = await api("http://localhost:3000/getNutricionistaCal");
    setDataselectNutri(dataA.data.res);
  };
  const resGrupoEtnico= async () => {
    const dataA = await api("http://localhost:3000/getGrupoEtnico");
    setDataselectG(dataA.data.res);
  };
  const resModalidad= async () => {
    const dataA = await api("http://localhost:3000/getModalidadesCal");
    setDataselectMod(dataA.data.res);
  };
  const resPrepa= async () => {
    const dataA = await api("http://localhost:3000/getPreparaciones");
    setDataselectPrepa(dataA.data.res);
  };

  useEffect(() => {
    resOrdenMenu();
    resLicitaciones();
    resCiudades();
    resOpreadores();
    resNutricionista();
    resGrupoEtnico();
    resModalidad();
         
  }, [state]);
  useEffect(() => {
    resPrepa();    
  }, [stateRmenuPre]);
 


  function handleChange(name,value) {
      if(name==='observaciones'){
        setObservaciones(value);       
      }
      if(name==='ordenmenu'){
        setOrdenmenu(value);       
      }
      if(name==='licitacion'){
        setLicitacion(value);       
      }
      
      if(name==='ciudad'){
        setCiudad(value);       
      }
      if(name==='operador'){
        setOperador(value);       
      }
      if(name==='nutricionista'){
        setNutricionista(value);       
      }
      if(name==='gruposet'){
        setGruposet(value);       
      }
      if(name==='modalidad'){
        setModalidades(value);       
      }
      if(name==='rprepamenu'){       
        setDataprepa(value);       
      }
  }
  function handlePreparacion() {   
      let url = "http://localhost:3000/CreateRPM";
      let data={stateMenuid,
        dataprepa};
    axios.post(url,data).then((res) => {
      if (res.data.error === 3) {
        setstateRmenuPre(false);
        
      } else {
        setstateRmenuPre(false);
        
      }
      console.log(res);
    });
  
    
    
  }
  function handleCreateMenu() {
    let url = "http://localhost:3000/createMenuCal";
      let data={ciudad,
        ordenmenu,
        observaciones,
        licitacion,
        operador,
        nutricionista,
        gruposet,
        modalidades};
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
            <h3>Eliminar Alimento</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <Alert color="danger">
            Esta seguro que quiere eliminar el alimento?
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
            <h3>Editar Alimentos</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Alimento:</label>
            <Inputs className="form-control" attribute={{
            id:'alimento',
            name:'alimento',
            type:'text',
            placeholder:'Ingrese alimento', 
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
            <h3>Insertar Menu</h3>
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
            <label>Orden menus:</label>

            <Select
              className="form-control"
              attribute={{
                id: "ordenmenu",
                name: "ordenmenu",
                type: "select",
                data: dataselectM,
              }}
              handleChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Licitaciones:</label>

            <Select
              className="form-control"
              attribute={{
                id: "licitacion",
                name: "licitacion",
                type: "select",
                data: dataselectL,
              }}
              handleChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Ciudad:</label>

            <Select
              className="form-control"
              attribute={{
                id: "ciudad",
                name: "ciudad",
                type: "select",
                data: dataselectC,
              }}
              handleChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Operador:</label>

            <Select
              className="form-control"
              attribute={{
                id: "operador",
                name: "operador",
                type: "select",
                data: dataselectO,
              }}
              handleChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Nutricionista:</label>

            <Select
              className="form-control"
              attribute={{
                id: "nutricionista",
                name: "nutricionista",
                type: "select",
                data: dataselectNutri,
              }}
              handleChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Grupos Etnicos:</label>

            <Select
              className="form-control"
              attribute={{
                id: "gruposet",
                name: "gruposet",
                type: "select",
                data:dataselectG,
              }}
              handleChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Modalidades:</label>
            <Select
              className="form-control"
              attribute={{
                id: "modalidad",
                name: "modalidad",
                type: "select",
                data:dataselectMod,
              }}
              handleChange={handleChange}
            />
            
          </FormGroup>
          <FormGroup>
            <label>Observaciones:</label>

            <Inputs className="form-control" attribute={{
            id:'observaciones',
            name:'observaciones',
            type:'textarea',
            placeholder:'Ingrese observaciones'
            }}  handleChange = {handleChange}/>
          </FormGroup> 
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleCreateMenu}>
            Insertar
          </Button>
          <Button className="btn btn-danger" onClick={() => setState(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={stateRmenuPre}>
        <ModalHeader>
          <div>
            <h3>Agregar Preparacion</h3>
          </div>
        </ModalHeader>

        <ModalBody>     
          <FormGroup>
            <label>Praparacion:</label>
            <Select
              className="form-control"
              attribute={{
                id: "rprepamenu",
                name: "rprepamenu",
                type: "select",
                data:dataselectPrepa,
              }}
              handleChange={handleChange}
            />
          </FormGroup>
          
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handlePreparacion}>
            Insertar
          </Button>
          <Button className="btn btn-danger" onClick={() => setstateRmenuPre(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

    </>
  );
}

export default Createmodal;
