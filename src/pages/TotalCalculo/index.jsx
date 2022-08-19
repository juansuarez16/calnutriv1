import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import  ReactDOMServer  from 'react-dom/server';
import { FcPrint } from "react-icons/fc";
import api from "./api";
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import Pdfformat from './Pdfformat';
import  ModalCalculo  from './Modal';

const TotalCalculo = (params) => {
    const {data} = useParams();
  console.log(params);
    const [datai, setDatai] = useState([]);
    const [dataRe, setDataRe] = useState([]);
    const [statePrint, setstatePrint] = useState(false);
    const [dataquery, setDataquery] = useState('');    
    let menssage='';
    let calculototal=[];
    let sum=0;
    const [datakey, setDatakey] = useState([]);
    const [datamodalidad, setDatamodalidad] = useState([]);
    const [grupo, setGrupo] = useState([])
    const [grupoEdades, setGrupoEdades] = useState([])
    const res = async (id) => {
      const dataA = await api(`http://localhost:3000/getMenuCalid?id=${id}`);
      setDatai(dataA.data.res);
    };
    const resReco = async () => {
      const dataA = await api(`http://localhost:3000/getRecoNutriRela`);
      setDataRe(dataA.data.res);
      setGrupoEdades(dataA.data.res2)
    };
   
    useEffect(() => {
      if (params.status) {
        resReco();
        res(params.id);
      }
    }, [params.status])
   let nutrientesAporteCl =[];
   let nutrientereco =[];
   let nutrientevalue=[];
   let complemento=[];
   let completeExist= false;
   for (let indexB = 0; indexB < datai.length; indexB++) {
    for (let index = 0; index < dataRe.length; index++) {      
    if (datai[indexB].mod_nombre===dataRe[index].mod_nombre) {    
      complemento.push(dataRe[index]);   
      completeExist=true;  
      }
     }
   }   
   if (!completeExist) {
    menssage='no existe recomendaciones para este menu o no tiene relacionado ningun nutriente';
   }
     
  let nutriValor=[];
  for (let indexP = 0; indexP < params.paramas.length; indexP++) {
    for (let indexC = 0; indexC < params.paramas[indexP].alimento.length; indexC++) {
      for (let index = 0; index < complemento.length; index++) {       
      for (let indexD = 0; indexD < params.paramas[indexP].alimento[indexC].nutriente.length; indexD++) {  
        if (complemento[index].nutrientesCal===params.paramas[indexP].alimento[indexC].nutriente[indexD].nutriente){         
          nutrientereco.push(params.paramas[indexP].alimento[indexC].nutriente[indexD].nutriente);
          
        }else{
          nutrientevalue.push(params.paramas[indexP].alimento[indexC].nutriente[indexD].nutriente);
        }
      }   
    }    
  }
    
  }    

    let resultreco =  nutrientereco.filter((item,index)=>{     
       return nutrientereco.indexOf(item) === index;
     }) 
     let resultvalue =  nutrientevalue.filter((item,index)=>{     
      return nutrientevalue.indexOf(item) === index;
    }) 
     let resultAporte=[];
     console.log(resultvalue);
     console.log(dataRe);
     let indexB=1;
if (resultvalue.length>0) {      
  for (let index = 0; index < resultvalue.length; index++) {
    let indexB=1;
    sum=0;
    for (let indexP = 0; indexP < params.calculo.length; indexP++) {
      if (resultvalue[index]===params.calculo[indexP].nutriente ) {
        console.log(params.calculo[indexP].nutriente);
        sum += params.calculo[indexP].calculo ? params.calculo[indexP].calculo : Number(params.calculo[indexP].aporte)
      }
    }
    nutrientesAporteCl.push({nutriente:resultvalue[index],totalAport:sum});   
   }  
}

console.log(nutrientesAporteCl);
let recomendaciones=[];
let totalCalculo=[];
for (let index = 0; index < complemento.length; index++) {
  for (let indexB = 0; indexB < grupoEdades.length; indexB++) {
    if (complemento[index].mod_nombre===datai[0].mod_nombre) {
      recomendaciones.push(grupoEdades[indexB].recomendaciones)
     }    
  }   
}


let grupoEdadesTarget=[];
console.log(complemento);
for (let index = 0; index < complemento.length; index++) {  
  if (complemento[index].mod_nombre===datai[0].mod_nombre) {    
    grupoEdadesTarget.push(complemento[index].recomendaciones);
    for (let indexB = 0; indexB < nutrientesAporteCl.length; indexB++) {
      if (complemento[index].nutrientesCal===nutrientesAporteCl[indexB].nutriente) { 
        let por = nutrientesAporteCl[indexB].totalAport/complemento[index].valor
        totalCalculo.push({nutri:nutrientesAporteCl[indexB].nutriente,valorPor:por*100,grupo:complemento[index].recomendaciones,total:nutrientesAporteCl[indexB].totalAport,comple:datai[0].mod_nombre})
      }      
    }
  }  
}

let resultGrupo =  grupoEdadesTarget.filter((item,index)=>{     
  return grupoEdadesTarget.indexOf(item) === index;
}); 

console.log(resultGrupo);


let valorpornutri=[];
let resultadoTotal=[];
for (let index = 0; index < resultGrupo.length; index++) {
  valorpornutri=[];
  for (let indexB = 0; indexB < totalCalculo.length; indexB++) {
    if (resultGrupo[index]===totalCalculo[indexB].grupo) {
      valorpornutri.push({nutri:totalCalculo[indexB].nutri,por:totalCalculo[indexB].valorPor,comple:totalCalculo[indexB].comple})
    }    
  }  
  resultadoTotal.push({grupo:resultGrupo[index],nutriente:valorpornutri})
}
params.grupoCal.push(resultadoTotal);
           
      
      
      const doc = new jsPDF();

      const jsPdfGenerator = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          
          doc.addImage(imgData, 'JPEG', 0, 0, 200, 300);
          doc.save('test.pdf');
        });
      };      
      
      let totalNutricionGrupos = [];

      const removeRepeatElementsById = (arr = []) => {
        const uniqueIds = new Set();
        return arr.filter((element) => {
          const isDuplicateId = uniqueIds.has(element.id);
          uniqueIds.add(element.id);
          if (!isDuplicateId) return true;
          return false;
        });
      };
      
      const filterGroups = (arreglo = [], grupos = []) => {
        let groups = [];
        arreglo.filter((arr) => {
          grupos.map((grupo) => {
            arr.grupo === grupo && groups.push(arr);
          });
        });
        return groups;
      };
      
      const reduceTotalGroups = (arrGroup = []) => {
        let nObj = {};
        arrGroup.map(({ id, grupo, nutrientes }) => {
          if (!nObj.hasOwnProperty(grupo)) {
            nObj[grupo] = {
              id,
              grupo,
              nutrientes: []
            };
          }
      
          nObj[grupo].nutrientes.push(...nutrientes);
        });
        return nObj;
      };
      
      const objToArray = (obj = {}) => {
        let array = Object.keys(obj).map(function (key) {
          return obj[key];
        });
        return array;
      };
      
      const calcularSumatoria = (arreglo = [], grupos = [], nutrientes = []) => {
        let arrGroup = [];
        let groupsFiltereds = [];
        let nArrGroup = [];
        let totalGroups = [];
      
        groupsFiltereds = filterGroups(arreglo, grupos);
      
        groupsFiltereds.map(({ grupo, nutriente }) => {
          nutrientes.map((n2) => {
            if (nutriente === n2) {
              let value = 0;
              let nutrientes = [];
              value = groupsFiltereds
                .filter((el) => el.nutriente === n2 && el.grupo === grupo)
                .reduce((sum, obj) => {
                  return sum + obj.calculo;
                }, 0);
              let objTem = { [`${n2}`]: value };
              nutrientes.push(objTem);
              arrGroup.push({ id: grupo + " " + n2, grupo, nutrientes });
            }
          });
        });
        nArrGroup = removeRepeatElementsById(arrGroup);
        totalGroups = reduceTotalGroups(nArrGroup);
        return objToArray(totalGroups);
      };      
 
      totalNutricionGrupos = calcularSumatoria(
        params.calculo,
        resultGrupo,
        resultvalue
      );
      let total=[]
     console.log(totalNutricionGrupos);
   complemento.map((element)=>{
    let nutriAux={}    
    totalNutricionGrupos.map((element2)=>{       
      element2.nutrientes.map((nutriente)=>{           
        for (const key in nutriente) {
          if (Object.hasOwnProperty.call(nutriente, key)) {          
            if (element.recomendaciones === element2.grupo && element.nutrientesCal=== key) {  
              let por = (nutriente[key]/element.valor)*100      
              nutriAux={comple:element.mod_nombre,grupo:element.recomendaciones,nutri:key,por:por,sumatotal:nutriente[key]}
            }          
          }
        }
      })      
    })
    total.push(nutriAux);
    
   })
   console.log(total);
let targetGrupo = [];
   resultGrupo.map((grupResult)=>{
    let uniq = [];
    let grupo;
    let comple;
    total.map((totalGrup)=>{
      if (grupResult===totalGrup.grupo) {
        grupo = grupResult;
        comple = totalGrup.comple
        uniq.push({nutriente:totalGrup.nutri,por:totalGrup.por,sumatotal:totalGrup.sumatotal})
      }
    })
    if (grupo===grupResult) {
      targetGrupo.push({comple:comple,grupo:grupo,nutriente:uniq})
    }
   })
   console.log(targetGrupo);
  return (
    <>
    < FcPrint style={{cursor:'pointer',display:'flex'}} size="2rem"  onClick={()=>setstatePrint(true)}/>
    
  <h4>{menssage}</h4>
    <div className="row">
      <div className="card-header text-center">{}</div> 
      <div className="col s12 m3 text-center" >
                {targetGrupo.map(({comple,grupo,nutriente}) => (
                  <div className="card"> 
                    <h4 className="card-title text-center">{grupo? grupo : "No hay datos"}</h4>
                    {nutriente ? nutriente.map((element) => (
                    <div className="row">
                      <div className="col s12 m6 text-center">
                      <label >Nutriente: {element.nutriente}</label> 
                      </div>
                      <div className="col s12 m6 text-center">

                      <label 
                      style={{color: `${comple === 'COMPLEMENTO TIPO ALMUERZO' && 
                      element.por < 29  ? "red" :comple === 'COMPLEMENTO TIPO ALMUERZO' && 
                      element.por > 29 &&  element.por < 31 ? "yellow" : comple === 'COMPLEMENTO TIPO ALMUERZO' && 
                      element.por > 31 ? 'green': comple === 'COMPLEMENTO AM/PM' && 
                      element.por < 19 ? "red" : comple === 'COMPLEMENTO AM/PM' && 
                      element.por > 19 && element.por < 21 ? "yellow":comple === 'COMPLEMENTO AM/PM' && 
                      element.por > 21 ? 'green':comple === 'RACIÓN INDUSTRIALIZADA' && 
                      element.por < 19 ? "red" : comple === 'RACIÓN INDUSTRIALIZADA' && 
                      element.por > 19 && element.por < 21 ? "yellow":comple === 'RACIÓN INDUSTRIALIZADA' && 
                      element.por > 21 ? 'green':comple=== 'RACIÓN INDUSTRIALIZADA TEMPORAL' && 
                      element.por < 19 ? "red" : comple === 'RACIÓN INDUSTRIALIZADA TEMPORAL' && 
                      element.por > 19 && element.por < 21 ? "yellow":comple=== 'RACIÓN INDUSTRIALIZADA TEMPORAL' && 
                      element.por > 21 ? 'green':'black'}`}}
                      >Porcentaje: {element.por}%
                      </label> 
                      <br />
                      <label >Total {element.sumatotal}</label>
                      </div>                                           
                    </div>
                    )):""} 
                    
                 </div> 
                 
                ))}
           
          </div>
      </div>
      <ModalCalculo resultadoTotal={resultadoTotal} statePrint={statePrint}  setstatePrint={setstatePrint}/>
      </>
  )
}

export default TotalCalculo