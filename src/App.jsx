import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register"
import Login from "./pages/login/Login"
import Dashboard from "./pages/dashboard/Dashboard"
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
