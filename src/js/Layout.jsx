// Importas los Routers !!
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ------------------------------------------------------------
import React from "react";
import RickAndMorty from "./views/RickAndMorty";
import Home from "./views/Home";
import Navbar from "./component/Navbar";
import TodoList from "./component/TodoList";
import Detail from "./views/Detail";

// DECIDO QUE EL "COMPONENTE" LAYOUT VA A CONTROLAR LAS RUTAS
// Aunque Home sera el componente que contendrá los componentes ?
// Tambien puedo import4r un componente sobre otro o usarlos separados
const Layout = () => {
  return (
    <>
      {/* La Triple identacion de Dios RouteS y Route */}
      <BrowserRouter>
        {/* Debido a su posicion VIP en el Layout, este Nav estara presente en todos los componentes 
        de Route */}
        <Navbar />
        <Routes>
          {/*Recibe 2 atributos, asi como los prop (? */}
          <Route path="/" element={<Home />} />
          {/* El Valor href= o to= de los link que estan en mi NavBar tienen que ser iguales 
          Al Path para que en vez en enviar cualquier link de any page, esta vez te conectas
          Full a un componente y entonces cambias a otra pagina con ese nuevo componente  */}
          {/* Como es que llego a este link ? a traves del NavBar */}
          <Route path="/rick-and-morty" element={<RickAndMorty />} />
          <Route
            // En este caso como id es dinamico y cambia ,s o pongo /:theid , osea any name
            // Es asi por que en el componente RickAndMorty lo especifico
            path="/rick-and-morty/:theid"
            element={<Detail />}
          />
          <Route path="/todoList" element={<TodoList />} />
          {/* El usuario escribe escribe algo por error dentro de tu pagina como busqueda ?, so... */}
          <Route path="*" element={<h1 className="fs-1">GG Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
