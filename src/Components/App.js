import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import Warehouses from "./Warehouses";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home";
import Dashboard from "./Dashboard/Dashboard";
import { authenticationService } from "../_services/authentication.service";
import MyWarehouses from "./Dashboard/MyWarehouses";
import { Profile } from "../_helpers/profile";
import Search from "./Dashboard/Search";
import MyAppointments from "./Dashboard/MyAppointments";
import AddWarehouseForm from "./Dashboard/AddWarehouseForm";
import JoinedWarehouses from "./Dashboard/JoinedWarehouses";
import Membership from "./Dashboard/Membership";
import Appointments from "./Dashboard/Appointments";
import requireAuth from "./Helpers/RequireAuth";

function App() {
  const currentUser = authenticationService.getCurrentUser();

  return (
    <div className="min-h-screen flex flex-col">

      <Header currentUser={currentUser} />
      <Routes>

        {currentUser ?
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          : <Route path="/" element={<Home />} />
        }

        <Route path="/dashboard" element={<Dashboard />}>
          {/* Livreur */}
          <Route path="joined-warehouses" element={<requireAuth.requireLivreur><JoinedWarehouses /></requireAuth.requireLivreur> } />
          <Route path="search" element={<requireAuth.requireAuth><Search /></requireAuth.requireAuth>} />
          <Route path="my-appointments" element={<requireAuth.requireLivreur><MyAppointments /></requireAuth.requireLivreur>} />
          {/* Gestionnaire */}
          <Route path="add-warehouse" element={<requireAuth.requireGestionnaire><AddWarehouseForm /></requireAuth.requireGestionnaire>} />
          <Route path="search" element={<requireAuth.requireAuth><Search /></requireAuth.requireAuth>} />
          <Route path="my-warehouses" element={<requireAuth.requireGestionnaire><MyWarehouses /></requireAuth.requireGestionnaire>} />
          <Route path="membership" element={<requireAuth.requireGestionnaire><Membership /></requireAuth.requireGestionnaire>} />
          <Route path="appointments" element={<requireAuth.requireGestionnaire><Appointments /></requireAuth.requireGestionnaire>} />
        </Route>

        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
