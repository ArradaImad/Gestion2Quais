import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import Warehouses from "./Warehouses";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <Routes>
        <Route path="/" element={<h1>hello world</h1>} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
