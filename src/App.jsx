import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Course from "./components/Courses/Course";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="course">
        <Course />
      </div>

      <div id="about">
        <About />
      </div>
    </>
  );
};

export default App;
