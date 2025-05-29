import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

// Protected Navbar Layout
import ProtectedLayout from "./components/Navbar/protectedLayout";

// Home
import Home from "./components/Home/home";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Home />} />
          {/*<Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} /> */}
        </Route>
      </Routes>
      {/* <Alert /> */}
    </>
  );
}

export default App;
