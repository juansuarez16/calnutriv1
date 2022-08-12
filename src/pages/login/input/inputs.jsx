import React from "react";
import "./inputs.css";




const Inputs = ({attribute,handleChange,param}) =>  {
    
    return (
       <>
       <div class="mb-3 form-password-toggle">
       <div className="input-group input-group-merge" >
        <input 
        id={attribute.id}
        name={attribute.name}
        label={attribute.label}
        placeholder={attribute.placeholder}
        type={attribute.type} 
        onChange={(e) => handleChange(e.target.name,e.target.value)}
        className="form-control"
        />
        <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
        </div>
        </div>
        </>
    )
}

export default Inputs;