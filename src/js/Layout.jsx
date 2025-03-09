// Importas los Routers !!
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ------------------------------------------------------------
import React from "react";
import RickAndMorty from "./views/RickAndMorty";
import Home from "./views/Home";
import Navbar from "./component/Navbar";
import TodoList from "./component/TodoList";
import Detail from "./views/Detail";


const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rick-and-morty" element={<RickAndMorty />} />
          <Route
            path="/rick-and-morty/:theid"
            element={<Detail />}
          />
          <Route path="/todoList" element={<TodoList />} />
          <Route path="*" element={<h1 className="fs-1">Nothing over here...</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
