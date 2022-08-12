import React, { useEffect, useState } from "react";

const Context = React.createContext({});

export function UserContext({ children }) {
  const [login, setLogin] = useState(() =>
    window.sessionStorage.getItem("login")
  );

  console.log(login);

  useEffect(() => {
    if (!login) return setLogin(window.sessionStorage.setItem("login",false))
   
  }, [login])
  

  return <Context.Provider
      value={{
        login,
        setLogin
      }}
    >
      {children}
    </Context.Provider>
  
}

export default Context;
