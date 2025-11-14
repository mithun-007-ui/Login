import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Admin from "../pages/Admin";
import User from "../pages/User";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default AppRoutes;
