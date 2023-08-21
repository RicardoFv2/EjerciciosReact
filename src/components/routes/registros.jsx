import React from "react";
import "../css/registros.css";
import Navbar from "../navbar";
import { useState } from "react";

const Registros = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [errores, setErrores] = useState({
    nombre: "",
    correo: "",
    contrasena: "",
  });

  const validarCampos = () => {
    let nuevosErrores = {};

    if (nombre.trim() === "") {
      nuevosErrores.nombre = "El nombre es requerido";
    }

    if (correo.trim() === "") {
      nuevosErrores.correo = "El correo es requerido";
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      nuevosErrores.correo = "Ingrese un correo válido";
    }

    if (contrasena.trim() === "") {
      nuevosErrores.contrasena = "La contraseña es requerida";
    } else if (contrasena.length < 6) {
      nuevosErrores.contrasena =
        "La contraseña debe tener al menos 6 caracteres";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarCampos()) {
    
      alert(`Registro exitoso:\nNombre: ${nombre}\nCorreo: ${correo}`);
    }
  };

  return (
    <div className="formulario-registro">
      <Navbar />
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errores.nombre && <span className="error">{errores.nombre}</span>}
        </div>
        <div className="campo">
          <label htmlFor="correo">Correo Electrónico</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          {errores.correo && <span className="error">{errores.correo}</span>}
        </div>
        <div className="campo">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          {errores.contrasena && (
            <span className="error">{errores.contrasena}</span>
          )}
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registros;
