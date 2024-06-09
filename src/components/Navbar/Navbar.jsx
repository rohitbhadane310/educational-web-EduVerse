import React from "react";
import { Link } from "react-scroll";
import { FaBook } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-secondary">
      {/* desktop navigation section  */}

      <div className="container flex justify-between py-4">
        <div className=" flex items-center">
          <Link to="home" spy={true} smooth={true} duration={500}>
            <FaBook className="inline-block text-primary" size={23} />
            <span className=" text-lg font-semibold px-2">EduVerse</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center md:gap-6 lg:gap-12 font-medium text-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-lg group relative w-max cursor-pointer"
          >
            <span>Home</span>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-3/6"></span>
          </Link>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-lg group relative w-max cursor-pointer"
          >
            <span>About</span>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-3/6"></span>
          </Link>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-lg group relative w-max cursor-pointer"
          >
            <span>Cource</span>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-3/6"></span>
          </Link>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-lg group relative w-max cursor-pointer"
          >
            <span>Contact</span>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-3/6"></span>
          </Link>
        </nav>

        <div>
          <span className=" font-medium text-lg cursor-pointer">Login</span>
          <button className=" bg-primary py-1 px-4 text-white ml-2 hover:bg-black transition-all">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
