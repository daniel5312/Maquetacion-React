import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Acerca = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("auth") === "true";

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: "240px", padding: "2rem" }}>
        <h1>Acerca de Biota</h1>
        <p>Biota Orgánicos es un proyecto que conecta consumidores conscientes con productores locales mediante prácticas regenerativas. Creemos en una alimentación justa, limpia y saludable.</p>
      </div>
    </>
  );
};

export default Acerca;
