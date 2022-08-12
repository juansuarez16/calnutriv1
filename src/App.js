import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Notfount from "./pages/notfount/notFound";
import Alimentos from "./pages/alimentos/Alimentos";
import Preparaciones from "./pages/Preparaciones";
import CalculoMenu from "./pages/CalculoMenu";
import Login from "./pages/login/login";
import Home from "./pages/home";
import Menu from "./pages/Menu";
import Categorias from "./pages/Categorias";
import Departamentos from "./pages/Departamentos";
import Ciudades from "./pages/Ciudades";
import Fuentes from "./pages/Fuentes";
import Nutrientes from "./pages/Nutrientes";
import GruposEdades from "./pages/GruposEdades";
import GruposEtnicos from "./pages/GruposEtnicos";
import Modalidades from "./pages/Modalidades";
import Operadores from "./pages/Operadores";
import Componentes from "./pages/Componentes";
import OrdenMenu from "./pages/OrdenMenu";
import Licitaciones from "./pages/Licitaciones";
import Recomendaciones from "./pages/Recomendaciones";
import Nutricionista from "./pages/Nutricionista";
import { UserContext } from "./context/User/UserContext";
import RoutesPrivate from "./routes/RoutesPrivate";
import Calnutri from "./pages/Calnutri/Calnutri";
import CalnutriHome from "./pages/CalnutriHome";
import Form from "./pages/Form";
import HomeForm from "./pages/Form";
import CalculoAporte from "./pages/CalculoAporte";
import TotalCalculo from "./pages/TotalCalculo";
function App() {
  return (
    <>
    <UserContext>
   <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<RoutesPrivate />}>
              <Route exact path="/home" element={<Home />} />
              <Route element={<Form />}>
                <Route path="/homeForm" element={<HomeForm />} />
              </Route>
              <Route element={<Calnutri />}>
                <Route path="/homeClanutri" element={<CalnutriHome />} />
                <Route path="/alimentos" element={<Alimentos />} />
                <Route path="/preparaciones" element={<Preparaciones />} />
                <Route path="/categorias" element={<Categorias />} />
                <Route path="/departamentos" element={<Departamentos />} />
                <Route path="/ciudades" element={<Ciudades />} />
                <Route path="/componentes" element={<Componentes />} />
                <Route path="/fuentes" element={<Fuentes />} />
                <Route path="/nutrientes" element={<Nutrientes />} />
                <Route path="/gruposedades" element={<GruposEdades />} />
                <Route path="/gruposetnicos" element={<GruposEtnicos />} />
                <Route path="/ordenmenus" element={<OrdenMenu />} />
                <Route path="/licitaciones" element={<Licitaciones />} />
                <Route path="/modalidades" element={<Modalidades />} />
                <Route path="/operadores" element={<Operadores />} />
                <Route path="/nutricionistas" element={<Nutricionista />} />
                <Route path="/recomendaciones" element={<Recomendaciones />} />
                <Route path="/calculo/:id/" element={<CalculoMenu />}>
                  <Route path="totalcalculo/:data" element={<TotalCalculo />} />
                </Route>
                <Route path="/menu" element={<Menu />} />
                <Route path="*" element={<Notfount />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </div>
      </UserContext>
    </>
  );
}

export default App;
