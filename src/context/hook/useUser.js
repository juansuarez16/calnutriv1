import axios from "axios";
import React, { useContext } from "react";
import Context from "../User/UserContext";

export default function useUser() { 
    console.log(Context);   
  const { login, setLogin } = useContext(Context);
    
  const isLogin = ({ usu_id, usu_contrasena }) => {
    let account = { usu_id, usu_contrasena };
    let url = "http://localhost:3000/auth";
    if (account) {
      axios.post(url, account).then((res) => {
        if (res.data.error === 3) {
          console.log(setLogin());
            console.log(res);
          setLogin(res);
          console.log(login);
          window.sessionStorage.setItem("login", true);
          
        } else {
          window.sessionStorage.removeItem("login");
          setLogin(res);
        }        
      });
    }
    
  };
  
  return {
    isLogged: Boolean(login),
    isLogin,
  };
}
