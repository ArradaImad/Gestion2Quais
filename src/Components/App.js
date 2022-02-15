import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen">
      {/* <h1 className="text-5xl text-gray-700 font-mono">Hello world</h1> */}
      <Routes>
        <Route path="/" element={<h1>hello world</h1>} />
        <Route path="/warehouses" element={<h1>hi warehouses</h1>} />
      </Routes>
    </div>
  );
}

export default App;
