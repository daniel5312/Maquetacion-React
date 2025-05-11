
import React from 'react'
import ReactDOM from 'react-dom/client';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import './App.css'

const App = ()=> {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Redirigir a login si la ruta no existe */}
      <Route path="*" element={<Navigate to="/login" />} />

      {/* Rutas protegidas */}
      <Route path="/home" element={<Home />} />
      
      
     </Routes>

  )
}

export default App
