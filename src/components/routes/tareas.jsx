import React from "react";
import "../css/tareas.css";
import Navbar from "../navbar";
import { useState } from "react";

// Lista de Tareas:
// Desarrolla una aplicación que permita agregar y eliminar tareas de una lista. Cada tarea debe
// tener un botón para marcarla como completada o no completada.

const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== "") {
      setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
      setNuevaTarea("");
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  return (
    <div className="tareas">
      <Navbar />
      <h2>Lista de Tareas</h2>
      <div className="agregar-tarea">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <span className={tarea.completada ? "completada" : ""}>
              {tarea.texto}
            </span>
            <div className="botones-tarea">
              <button onClick={() => toggleCompletada(index)}>
                {tarea.completada
                  ? "Marcar como no completada"
                  : "Marcar como completada"}
              </button>
              <button onClick={() => eliminarTarea(index)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tareas;
