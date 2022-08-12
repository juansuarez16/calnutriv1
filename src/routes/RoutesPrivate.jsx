import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useUser from "../context/hook/useUser";

function RoutesPrivate() {
  let { isLogged } = useUser();
  return isLogged ? (
    <>      
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default RoutesPrivate;
