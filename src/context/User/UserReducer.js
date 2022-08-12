import React from "react";


export default (state, action) =>  {
    const {payload,type} = action;

   if(type ==="login"){
        return {
            ...state,
            login:payload
        }
   }
};