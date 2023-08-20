import React from "react";
import '../css/contador.css';
import Navbar from "../navbar";

// Crear un Contador Simple:
// Crea un componente que muestre un contador en la pantalla y tenga botones para incrementar
// y decrementar el valor del contador.

const contador = () =>{
    return(
        <div>
            <Navbar/>
            <h1>Contador</h1>
        </div>
    )
};

export default contador