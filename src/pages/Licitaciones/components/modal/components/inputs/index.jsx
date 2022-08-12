import React from "react";
import "./index.css"

const Inputs = ({attribute,handleChange,param}) =>  {

    return (
        <div className="input-container">
        <input 
        id={attribute.id}
        name={attribute.name}
        placeholder={attribute.placeholder}
        type={attribute.type}
        onChange={(e) => handleChange(e.target.name,e.target.value)}
        className={param ? 'input-error': 'regular-style'}
        />
        </div>
    )
}

export default Inputs;