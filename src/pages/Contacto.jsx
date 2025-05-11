import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Contacto = () => {
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
        <h1>Contacto</h1>
        <p>Para consultas, alianzas o soporte técnico, escríbenos a:</p>
        <ul>
          <li>Email: contacto@biotaorganicos.com</li>
          <li>Teléfono: +57 311 123 4567</li>
          <li>Dirección: Caldas, Antioquia, Colombia</li>
        </ul>
      </div>
    </>
  );
};

export default Contacto;
