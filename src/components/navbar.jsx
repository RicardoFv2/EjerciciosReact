import React from "react";
import './css/navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to={"/"}>Contador</Link></li>
          <li><Link to={"/tareas"}>Lista de Tareas</Link></li>
          <li><Link to={"/registros"}>Registros</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;