import React from "react";
import img from "../../assets/About.svg";

const About = () => {
  return (
    <section className=" container flex flex-col md:flex-row justify-center items-center">
      {/* img section  */}
      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>

      {/* content section  */}
      <div className=" w-full md:w-2/4 space-y-4">
        <h1 className=" text-4xl font-bold leading-snug text-primary">
          The Online Course Will All of Your Troubles
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, nam
          dignissimos. Magni porro iste hic, impedit culpa quos voluptatum
          sapiente autem sint nihil assumenda ratione.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          illo, eligendi doloremque autem ducimus quae corporis provident
          corrupti voluptate esse?
        </p>
        <button className="bg-primary py-2 px-4 text-white hover:bg-black transition-all">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
