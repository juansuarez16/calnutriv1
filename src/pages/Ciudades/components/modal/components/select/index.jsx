import React from "react";
import "./index.css";
import {
    Input
  
  } from "reactstrap";

const Select = ({attribute,handleChange,param}) =>  {

   
    return (
        <>
        <div className="input-field col s12">
        <Input 
        id={attribute.id}
        name={attribute.name}        
        type={attribute.type}
        onChange={(e) => handleChange(e.target.name,e.target.value)}                  
        >  
            <option value={-1}>SELECCIONE</option>
            {attribute.data.map(element =>(
                <option key={element.id} value={element.id} >{element.nombre}</option>
            )
            )}           
         </Input> 
         </div> 
         </>        
    )
}

export default Select;