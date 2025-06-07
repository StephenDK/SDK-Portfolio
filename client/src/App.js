import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

// Protected Navbar Layout
import ProtectedLayout from "./components/Navbar/protectedLayout";

// Home
import Home from "./components/Home/home";
import Eduction from "./components/Education/education";
import Experience from "./components/Experience/experience";
import Projects from "./components/Projects/projects";
import ContactMe from "./components/Contact/contactMe";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Eduction />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
