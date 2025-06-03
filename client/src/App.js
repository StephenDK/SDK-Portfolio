import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

// Protected Navbar Layout
import ProtectedLayout from "./components/Navbar/protectedLayout";

// Home
import Home from "./components/Home/home";
import Eduction from "./components/Education/education";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Eduction />} />
        </Route>
      </Routes>
      {/* <Alert /> */}
    </>
  );
}

export default App;
