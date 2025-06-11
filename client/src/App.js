import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { imageList } from "./imageList";
import LoadingScreen from "./components/Loading/loading";
import ProtectedLayout from "./components/Navbar/protectedLayout";
import Home from "./components/Home/home";
import Education from "./components/Education/education";
import Experience from "./components/Experience/experience";
import Projects from "./components/Projects/projects";
import ContactMe from "./components/Contact/contactMe";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      console.log("[Loading Images]");
      const imagePromises = imageList.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        console.log("[Done Loading Images]");
        // Add 3-second delay after images load
        setTimeout(() => {
          setIsLoading(false);
        }, 3000); // 3-second delay
      } catch (error) {
        console.error("Failed to load some images:", error);
        // Proceed with 3-second delay even if some images fail
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    };

    preloadImages();
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Route>
    </Routes>
  );
};

export default App;
