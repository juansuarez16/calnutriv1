import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { FcPrint } from "react-icons/fc";
import api from "./api";


const TotalCalculo = (params) => {
    const {data} = useParams();
   console.log(params);
    const [datai, setDatai] = useState(Array);
    const [dataRe, setDataRe] = useState(Array);
    const [dataquery, setDataquery] = useState('');    
    let menssage='';
    let calculototal=[];
    let sum=0;
    const [datakey, setDatakey] = useState([]);
    const [datamodalidad, setDatamodalidad] = useState([]);
    const [grupo, setGrupo] = useState(Array)
    const [grupoEdades, setGrupoEdades] = useState(Array)
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
   let nutriente =[];
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
          nutriente.push(params.paramas[indexP].alimento[indexC].nutriente[indexD].nutriente);
          
        }
      }   
    }    
  }
    
  }
    
console.log(nutriente);
    let result =  nutriente.filter((item,index)=>{     
       return nutriente.indexOf(item) === index;
     })  
     let resultAporte=[];
     
if (result.length>0) {      
  for (let index = 0; index < result.length; index++) {
    sum=0;
    for (let indexP = 0; indexP < params.paramas.length; indexP++) {
      for (let indexC = 0; indexC < params.paramas[indexP].alimento.length; indexC++) {
        for (let indexD = 0; indexD < params.paramas[indexP].alimento[indexC].nutriente.length; indexD++) {  
          if (result[index]===params.paramas[indexP].alimento[indexC].nutriente[indexD].nutriente){
            sum += Number(params.paramas[indexP].alimento[indexC].nutriente[indexD].valorCal) ? Number(params.paramas[indexP].alimento[indexC].nutriente[indexD].valorCal) : Number(params.paramas[indexP].alimento[indexC].nutriente[indexD].aporte)
            console.log(complemento[index].nutrientesCal,params.paramas[indexP].alimento[indexC].nutriente[indexD]);
          }
        }       
      } 
      
    }
    
    nutrientesAporteCl.push({nutriente:result[index],totalAport:sum});   
   }  
}
console.log(nutrientesAporteCl);
console.log(complemento);
console.log(datai);
console.log(dataRe);
console.log(grupoEdades);
console.log(resultAporte);
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
console.log(grupoEdadesTarget);
console.log(totalCalculo);
let resultGrupo =  grupoEdadesTarget.filter((item,index)=>{     
  return grupoEdadesTarget.indexOf(item) === index;
})  
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
    console.log(resultadoTotal);
    function handlePrint() {      
      window.print();
    }
  return (
    <>
    < FcPrint style={{cursor:'pointer',display:'flex'}} size="2rem" onClick={handlePrint}/>
  <h4>{menssage}</h4>
    <div className="row">
      <div className="card-header text-center">{}</div> 
      <div className="col s12 m3 text-center" >
                {resultadoTotal.map((elementPre) => (
                  <div className="card"> 
                    <h4 className="card-title text-center">{elementPre.grupo ? elementPre.grupo : "No hay datos"}</h4>
                    {elementPre.nutriente ? elementPre.nutriente.map((element) => (
                    <div className="row">
                      <div className="col s12 m6 text-center">
                      <label >Nutriente:{element.nutri}</label> 
                      </div>
                      <div className="col s12 m6 text-center">
                      <label 
                      style={{color: `${element.comple === 'COMPLEMENTO TIPO ALMUERZO' && 
                      element.por < 29  ? "red" :element.comple === 'COMPLEMENTO TIPO ALMUERZO' && 
                      element.por > 29 &&  element.por < 31 ? "yellow" : element.comple === 'COMPLEMENTO TIPO ALMUERZO' && 
                      element.por > 31 ? 'green': element.comple === 'COMPLEMENTO AM/PM' && 
                      element.por < 19 ? "red" : element.comple === 'COMPLEMENTO AM/PM' && 
                      element.por > 19 && element.por < 21 ? "yellow":element.comple === 'COMPLEMENTO AM/PM' && 
                      element.por > 21 ? 'green':element.comple === 'RACIÓN INDUSTRIALIZADA' && 
                      element.por < 19 ? "red" : element.comple === 'RACIÓN INDUSTRIALIZADA' && 
                      element.por > 19 && element.por < 21 ? "yellow":element.comple === 'RACIÓN INDUSTRIALIZADA' && 
                      element.por > 21 ? 'green':element.comple=== 'RACIÓN INDUSTRIALIZADA TEMPORAL' && 
                      element.por < 19 ? "red" : element.comple === 'RACIÓN INDUSTRIALIZADA TEMPORAL' && 
                      element.por > 19 && element.por < 21 ? "yellow":element.comple=== 'RACIÓN INDUSTRIALIZADA TEMPORAL' && 
                      element.por > 21 ? 'green':'black'}`}}
                      >Porcentaje:{element.por}%
                      </label> 
                      </div>                                           
                    </div>
                    )):""} 
                    
                 </div> 
                 
                ))}
           
          </div>
      </div>
      </>
  )
}

export default TotalCalculo