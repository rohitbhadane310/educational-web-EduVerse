import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Course from "./components/Courses/Course";

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
    </>
  );
};

export default App;
