// Importamos React para crear el componente
import React, { useState } from "react";

import { Link } from "react-router-dom";
// Importamos useNavigate para redirigir al usuario después de iniciar sesión
import { useNavigate } from "react-router-dom";


// Creamos el componente funcional Login
const Login = () => {
  // Estado local para el correo y la contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Estado para manejar errores simples
  const [error, setError] = useState("");

  // useNavigate nos permite redirigir al usuario
  const navigate = useNavigate();

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
  e.preventDefault(); // Evita recargar la página

    if (email.trim() === "" || password.trim() === "") {
        setError("Todos los campos son obligatorios.");
        return;
    }

    // Obtenemos los usuarios registrados desde localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Buscamos si hay un usuario que coincida
    const userFound = users.find(
        (user) => user.email === email && user.password === password
    );

    if (userFound) {
        // Si el usuario existe, guardamos en localStorage que está logueado
        localStorage.setItem("auth", "true");

        // Redirigimos a /home
        navigate("/home");
    } else {
        // Si no lo encuentra, muestra error
        setError("Credenciales inválidas.");
    }
};


  return (
    <div className="login-container" style={{ maxWidth: "400px", margin: "5rem auto", border: "1px solid #ccc", padding: "2rem", borderRadius: "8px" }}>
      {/* Título del formulario */}
      <h2 style={{ textAlign: "center" }}>Iniciar Sesión</h2>

      {/* Muestra un mensaje de error si existe */}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Campo de correo */}
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Campo de contraseña */}
        <div className="form-group" style={{ marginTop: "1rem" }}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Botón para iniciar sesión */}
        <button
          type="submit"
          style={{ marginTop: "1.5rem", width: "100%" }}
        >
          Ingresar
        </button>
        
        {/* Enlace para ir a la página de registro */}
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
        ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </form>

    </div>
  );
};

// Exportamos el componente para usarlo en las rutas
export default Login;
