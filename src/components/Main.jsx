import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2  flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-indigo-300 cursor-default pb-3 pt-36">
            Let's team up and get to work!
          </p>
          <h1 className="drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300 cursor-pointer animate-bounce">
            Hi, I'm <span className="text-[cyan] ">Bruno</span>
          </h1>
          <h1 className="drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300 cursor-pointer">
            Full-Stack Software Developer{" "}
          </h1>
          <p className="py-4 text-indigo-300 max-w-[70%] m-auto cursor-default">
            Welcome to my portfolio website! As a 3rd semester/2nd year student
            in Software Engineering from Latvia, I have a passion for creating
            innovative and efficient software solutions. Currently residing in
            Horsens, Denmark, I am excited to showcase my work using Next.js and
            TailwindCSS. Explore my projects and experience my dedication to the
            world of software engineering.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/bruno-laizans/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-cyan-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/blaizans"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-cyan-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div
                onClick={() => setNav(!nav)}
                className="rounded-full shadow-lg shadow-cyan-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
              >
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="#resume">
              <div
                onClick={() => setNav(!nav)}
                className="rounded-full shadow-lg shadow-cyan-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
              >
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
          <div id="about" >
            <button className="bg-[#344e64]"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
