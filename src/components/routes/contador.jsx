import React from "react";
import "../css/contador.css";
import Navbar from "../navbar";
import { useState } from "react";

// Crear un Contador Simple:
// Crea un componente que muestre un contador en la pantalla y tenga botones para incrementar
// y decrementar el valor del contador.

const Contador = () => {
  const [contar, setContar] = useState(0);

  const incrementar = () => {
    setContar(contar + 1);
  };

  const decrementar = () => {
    setContar(contar - 1);
  };

  return (
    <div className="contador">
      <Navbar />
      <br />
      <h1>Contador</h1>
      <br />

      <button type="button" onClick={incrementar}>
        Incrementar
      </button>
      <button type="button" onClick={decrementar}>
        Decrementar
      </button>
      <br />
      <p>Valor: {contar}</p>
    </div>
  );
};

export default Contador;
