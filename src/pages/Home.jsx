import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Sidebar from "../components/Sidebar";
 // Asegúrate de importar los estilos del sidebar

const Home = () => {
    const navigate = useNavigate();

    const isAuthenticated = localStorage.getItem("auth") == "true";
    if (!isAuthenticated) {
        navigate("/login");
        return null;
    }
    return (
         <>
      <Sidebar />
      <div style={{ marginLeft: "240px", padding: "2rem" }}>
        <h1>Bienvenido a la página Home</h1>
        <p>Has iniciado sesión correctamente.</p>
      </div>
    </>
  );
};

export default Home;