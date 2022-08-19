import React,{useReducer} from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import axios from "axios";

const UserState = (props) =>  {
   const intialState ={
        login:false,
        selectedUser:null
   }
   const [state, dispatch] = useReducer(UserReducer,intialState)

   const getLogin = async(Logeo) =>  {
    const res =  await axios.post("http://localhost:3000/auth",Logeo)
   
    // dispatch({
    //     type:'login',
    //     payload:res.data
    // })
   }
   
   const getUser =  () =>  {
     
   }

   return (
    <UserContext.Provider value={{
        login:state.login,
        selectedUser:state.selectedUser,
        getLogin,
        getUser,

    }}>
        {props.children}
    </UserContext.Provider>
   )
   
}


export default UserState;