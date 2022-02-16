import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import Warehouses from "./Warehouses";

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
    </div>
  );
}

export default App;
