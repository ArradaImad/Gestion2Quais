import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import Warehouses from "./Warehouses";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home";
import Dashboard from "./Dashboard";
import { authenticationService } from "../_services/authentication.service";

function App() {
  const currentUser = authenticationService.getCurrentUser();

  return (
    <div className="min-h-screen flex flex-col">

      <Header/>
      <Routes>

        { currentUser ?
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          : <Route path="/" element={<Home />} />
        }
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
