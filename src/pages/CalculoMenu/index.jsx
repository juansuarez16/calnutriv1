import React, { useEffect, useState,useCallback} from "react";
import { Outlet } from "react-router-dom";
import api from "./api";

import CalculoAporte from "../CalculoAporte";
import {
  Card,
  Grid,
  ListGroup,
  ListGroupItem,
  Button,
  FormControl,
  CardGroup,
} from "react-bootstrap";
import { Title } from "@material-ui/icons";
import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Row } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";
import { FcPlus, FcFinePrint,FcPrint } from "react-icons/fc";
import { FiEdit3, FiDelete } from "react-icons/fi";
import { AiFillFileAdd } from "react-icons/ai";
import TotalCalculo from "../TotalCalculo";
let valorbase = 0;
const CalculoMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [, setCalculo] = useState([]);
  const [status, setStatus] = useState(false);
  const [grupo, setGrupos] = useState([]);
  const [datai, setDatai] = useState([]);
  const [dataRe, setDataRe] = useState([]);
  const [calcugrupos, setCalcugrupos] = useState([]);

  const res = async () => {
    const dataA = await api(`http://localhost:3000/getRPAC?id=${id}`);
    setData(dataA.data.datauni);
  };

  const resmenu = async () => {
    const dataA = await api(`http://localhost:3000/getMenuCalid?id=${id}`);
    setDatai(dataA.data.res);
  };
  const [grupoEdades, setGrupoEdades] = useState([]);
  const resReco = async () => {
    const dataA = await api(`http://localhost:3000/getRecoNutriRela`);
    setDataRe(dataA.data.res);
    setGrupoEdades(dataA.data.res2);
  };
  useEffect(() => {
    res();
    resmenu();
    resReco();
  }, [id]);

  let complemento = [];
  for (let indexB = 0; indexB < datai.length; indexB++) {
    for (let index = 0; index < dataRe.length; index++) {
      if (datai[indexB].mod_nombre === dataRe[index].mod_nombre) {
        complemento.push(dataRe[index]);
      }
    }
  }
  let grupoEdadesTarget = [];
  for (let index = 0; index < complemento.length; index++) {
    if (complemento[index].mod_nombre === datai[0].mod_nombre) {
      grupoEdadesTarget.push(complemento[index].recomendaciones);
    }
  }
  let resultGrupo = grupoEdadesTarget.filter((item, index) => {
    return grupoEdadesTarget.indexOf(item) === index;
  });
  let objresultgrup = [];
  for (let index = 0; index < resultGrupo.length; index++) {
    objresultgrup.push({ grupo: resultGrupo[index] });
  }

  
  let indiceCal=0;
  
  function handleCalculo(e, props, prepa) {
    let calcugruposarr = [];
    let dif = false;
   
    // if (calcugrupos.length > 0) {       
    //   let aux = [...calcugrupos];      
    //   console.log(calcugruposarr.length);
      
    //   aux.map((element,index) =>{
    //       if (element.alimento === props.alimento && element.grupo === e.target.name && element.preparacion === prepa) {
    //         console.log('borro');
    //         console.log(index);
    //         aux.slice(index);             
    //       }
    //   })
    //   console.log(aux);
    //   setCalcugrupos(aux);
    // }
    
    function llenargrupos(data) {
      data.map((elementprepa) => {
        elementprepa.alimento.map((elementali) => {
          if (elementali.alimento === props.alimento) {
            elementali.nutriente.map((elementnutri) => {
              elementnutri.grupos && elementnutri.grupos.map((elementgrupo) => {
                if (elementgrupo.grupo === e.target.name) {
                  let calculo = e.target.value * Number(elementnutri.aporte);
                  let auxArr = {
                    id: Number(e.target.id),
                    alimento: elementali.alimento,
                    grupo: e.target.name,
                    calculo: calculo,
                    preparacion: elementprepa.preparacion,
                    nutriente: elementnutri.nutriente,
                    aporte:elementnutri.aporte
                  }
                  calcugruposarr.push(auxArr); 
                }
              });
            });
          }
        });
      });
      return calcugruposarr;
    }   
    if (calcugrupos.length === 0) {        
      setCalcugrupos(llenargrupos(data));
    } else if(calcugrupos.length > 0){ 
      let auxarr = [...calcugrupos];
      let info = false;    
      auxarr.map((grupoCal)=>{
       
        if (grupoCal.grupo === e.target.name && grupoCal.preparacion === prepa && grupoCal.alimento === props.alimento) {
          let calculo = grupoCal.aporte * e.target.value;
          grupoCal.calculo = calculo;
          info =false
        }else{
          info= true
        }
      })      
      if (info ) {
        let result = llenargrupos(data);
          result.map((elem) =>{
            auxarr.push(elem);
          })
      }
      setCalcugrupos(auxarr);  
    }
   
  }
  
  function handletotal(data) {
    setStatus(true);
  }

  
 
  data.forEach((elementprepa) => {
    elementprepa.alimento.forEach((elementali) => {
      elementali.nutriente.forEach((elementnutri) => {
        elementnutri.grupos = objresultgrup;
      });
    });
  });  
 
  return (
    <>
   
      <div className="card-header text-center">Menu {id ? id : ""}</div>
      <div></div>
      {data.map((elementPre) => (
        <div className="col s12 m3 text-center">
          <div className="card">
            <h4 className="card-title text-center">
              Praparacion:{" "}
              {elementPre ? elementPre.preparacion : "No hay datos"}
            </h4>
            {elementPre.alimento.map((elementAli) => (
              <div className="col s12 m12 text-center">
                <div className="card-content">
                  <h5 className="card-subtitle text-center">
                    {elementPre ? elementAli.alimento : "No hay datos"}
                  </h5>
                  <br />
                  <div className="row">
                    {elementAli.nutriente.map((elementNutri) => (
                      <div className="col s12 m12 text-center">
                        <div className="row">
                          <ListGroup
                            id={`${elementAli.id}`}
                            className="list-group-flush"
                          
                          >                      
                            <ListGroupItem>
                              {elementNutri.nutriente
                                ? elementNutri.nutriente
                                : "No hay datos"}
                            </ListGroupItem>
                            <div className="col s12 m12 text-center">
                            <div className="row">
                            
                              {calcugrupos.length > 0
                                ? calcugrupos.map((element) =>(
                               
                                      elementNutri.nutriente ===
                                      element.nutriente &&
                                      elementAli.alimento ===
                                      element.alimento
                                        ? element.grupo
                                        : ""
                                 
                                ))
                                : "no hay alimentos"}
                            
                            
                              {calcugrupos.length > 0
                                ? calcugrupos.map((element) =>
                                   
                                      elementNutri.nutriente ===
                                      element.nutriente &&
                                      elementAli.alimento === element.alimento
                                        ? element.calculo
                                        : ""
                                   
                                  )
                                : "no hay alimentos"}
                            
                            </div>
                            </div>
                          </ListGroup>
                        </div>
                      </div>
                    ))}
                  </div>
                  {resultGrupo.map((elementGru) => (
                    <input
                      placeholder={`Cantidad ${elementGru}`}
                      id={`${elementAli.id}`}
                      name={`${elementGru}`}
                      onChange={(e) =>
                        handleCalculo(e, elementAli, elementPre.preparacion)
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Button
        variant="primary"
        onClick={() => {
          handletotal(data);
        }}
      >
        Calcular
      </Button>

      <Outlet params={"datos"} />
      {status && (
        <TotalCalculo
          paramas={data}
          calculo={calcugrupos}
          id={id}
          status={status}
          grupoCal={grupo}
          setGrupos={setGrupos}
        />
      )}
    </>
  );
};

export default CalculoMenu;
