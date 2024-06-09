import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>
    </>
  );
};

export default App;
