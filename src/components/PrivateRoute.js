import React from "react"
import { Route } from "react-router-dom";


const PrivateRoute = (props) => {
  
 return(
     <Route exact={props.exact} path={props.path} element={props.element}/> 
     
 )
}

export default PrivateRoute;