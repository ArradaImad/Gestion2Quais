import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import Warehouses from "./Warehouses";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home";

export function setToken(userToken) {
  localStorage.setItem('@token', JSON.stringify(userToken));
}

export function getToken() {
  const tokenString = localStorage.getItem('@token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
