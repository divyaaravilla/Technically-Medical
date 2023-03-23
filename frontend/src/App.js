import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";
import Appointment from "./pages/Appointments";
import Login from "./pages/Login";

import "./App.css";

const App = () => {
  return (
    // Routes and their associated pages
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update" element={<UpdateUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointments" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
