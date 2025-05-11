import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css"; // Estilos personalizados del sidebar

const Sidebar = () => {
  const navigate = useNavigate();

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("auth"); // Elimina la sesión
    navigate("/login"); // Redirige al login
  };

  return (
    <div className="sidebar">
      {/* Encabezado / logo */}
      <h2 className="sidebar-title">
        <Link to="/home">Biota</Link>
      </h2>

      {/* Menú de navegación */}
      <nav className="sidebar-nav">
        <Link to="/home">Home</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/acerca">Acerca de</Link>
        <Link to="/contacto">Contacto</Link>
        <button onClick={handleLogout} className="logout-btn">
          Cerrar sesión
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
