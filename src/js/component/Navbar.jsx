import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand ps-3" to="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span classNameName="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link text-danger" : "nav-link"
            }
            to="/"
          >
            Home <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link text-danger" : "nav-link"
            }
            to="/rick-and-morty"
          >
            Rick And Morty
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link text-danger" : "nav-link"
            }
            to="/todoList"
          >
            TodoList
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link text-danger" : "nav-link"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Anotes Importantes

// ------------------------------------------------------------------------------------------------

// 1 ↓
// En un evento como onClick: El parámetro es el evento (event o e), y contiene información sobre la interacción del usuario, como qué elemento fue clickeado.
// En NavLink con className: El parámetro no es un evento, sino un objeto con información sobre el estado del enlace. Por ejemplo:

// ------------------------------------------------------------------------------------------------

// 2 ↓

// Vuelve a revisar las formas de hacer esto :

// <NavLink className={({isActive})=> isActive ? "nav-link text-danger" : "nav-link" } to="/rick-and-morty">
// Rick And Morty
// </NavLink>

// Pista: Map es buena opcion

// ------------------------------------------------------------------------------------------------
