import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Invalid from "./pages/Invalid";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Featuredprojects from "./pages/Featuredprojects";
import Calltoaction from "./pages/Calltoaction";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Hero />} />
          <Route path="hero" element={<Hero />} />
          <Route path="skills" element={<Skills />} />
          <Route path="featuredprojects" element={<Featuredprojects />} />
          <Route path="calltoaction" element={<Calltoaction />} />
        </Route>

        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Invalid />} />
      </Routes>
    </div>
  );
};

export default App;
