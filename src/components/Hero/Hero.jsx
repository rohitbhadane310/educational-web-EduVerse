import React from "react";
import img from "../../assets/Hero.svg";

const Hero = () => {
  return (
    <section className=" bg-secondary">
      <div className=" min-h-[85vh] container flex flex-col md:flex-row justify-between items-center">
        {/* content section  */}
        <div className=" w-full md:w-2/4 space-y-8 py-8 text-center md:text-start">
          <h1 className="font-bold text-5xl text-primary leading-snug">
            Learn with Expert Anytime Anywhere
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            eaque debitis harum nesciunt ipsum neque.
          </p>
          <button className=" bg-primary py-2 px-4 text-white hover:bg-black transition-all">
            Get Started
          </button>
        </div>

        {/* img section  */}
        <div className=" w-full md:w-2/5">
          <img src={img} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
