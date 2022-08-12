import React, { useState, useEffect } from "react";

import Inputs from "./input/inputs";
import useUser from "../../context/hook/useUser";
import { Grid, Paper, Container, Avatar, Typography ,Button} from "@material-ui/core";

import "./login.css";
import imagen from "../../img/plantilla.png";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";


const Login = () => {
  const navigate = useNavigate();
  const { isLogin, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged, navigate]);
  const [usu_id, setUser] = useState("");
  const [usu_contrasena, setPassword] = useState("");

  function handleChange(name, value) {
    if (name === "usuario") {
      setUser(value);
    } else {
      setPassword(value);
    }
  }
  function handleSubmit() {
    isLogin({ usu_id, usu_contrasena });
  }

  return (
    <>
    <Grid >
        <Card  >
        <Card.Body>
          <img width={100} height={110} src={imagen}/>

          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <Inputs
            attribute={{
              label: "Usuario",
              id: "usuario",
              name: "usuario",
              type: "text",
              placeholder: "Ingrese su usuario",
            }}
            handleChange={handleChange}
          />

          <Inputs
            attribute={{
              label: "Contraseña",
              id: "constraseña",
              name: "constraseña",
              type: "password",
              placeholder: "Ingrese su constraseña",
            }}
            handleChange={handleChange}
          />

          <Button
            variant="contained"
            fullWidth
            size="large"
            color="primary"
            onClick={handleSubmit}
            className='boton'
          >
            Ingresar
          </Button>
          </Card.Body>
          </Card>
       
       
     
    </Grid>
    </>
  );
};

export default Login;
