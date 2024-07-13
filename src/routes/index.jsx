//import useContext
import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../views/home/index.jsx";

import Register from "../views/auth/register.jsx";

import Login from "../views/auth/login.jsx";

export default function AppRoutes() {
  //destructure context "isAuthenticated"
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />

      {/* route "/register" */}
      <Route
        path="/register"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Register />
          )
        }
      />

      {/* route "/login" */}
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Login />
          )
        }
      />
    </Routes>
  );
}
