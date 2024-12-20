import { useState } from "react";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import CompetitiveProgramming from "./Components/CompetitiveProgramming";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import "./App.css";



function App() {
  return (
    <div className="bg-gray-950 h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <CompetitiveProgramming />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
