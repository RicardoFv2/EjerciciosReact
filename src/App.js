import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contador from "./components/routes/contador";
import Tareas from "./components/routes/tareas.jsx";
import Registros from "./components/routes/registros.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Contador/>
  },
  {
    path: '/tareas',
    element: <Tareas/>
  },
  {
    path: '/registros',
    element: <Registros/>
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
