import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Servicios = () => {
    const navigate = useNavigate();

    const isAuthenticated = localStorage.getItem("auth") === "true";

    if (!isAuthenticated) {
        navigate("/login");
        return null;
    }

     return (
    <>
      {/* Sidebar de navegación */}
      <Sidebar />

      {/* Contenido principal de la página */}
      <div style={{ marginLeft: "240px", padding: "2rem" }}>
        <h1>Servicios de Biota</h1>
        <p>
          Aquí puedes encontrar los servicios que ofrecemos a productores,
          consumidores y aliados estratégicos. Desde asesorías en agricultura
          regenerativa hasta logística de distribución local.
        </p>
        <ul>
          <li>Asesoramiento técnico en cultivos orgánicos</li>
          <li>Capacitación en prácticas regenerativas</li>
          <li>Plataforma de ventas directa al consumidor</li>
          <li>Gestión de pedidos y logística local</li>
        </ul>
      </div>
    </>
  );
};

export default Servicios;

