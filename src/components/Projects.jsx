import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "/public/rc.jpg";
import portfolioImg from "/public/this.jpg";
import slaughterhouse from "/public/Slaughterhouse.jpg";
import synctask from "/public/synctask.png";
import pokedex from "/public/pokedex.png";
import tictactoe from "/public/tictactoe.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full pb-16">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-cyan-300 cursor-default">
          Projects
        </p>
        <h2 className="py-4 cursor-default">I Made This!</h2>
        <div className="grid md:grid-cols-2 gap-8">
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-indigo-300 rounded-xl p-4 group hover:bg-gradient-to-r from-indigo-300 to-cyan-300">
            <Image
              src={pokedex}
              alt="/Pokedex"
              className="rounded-xl group-hover:opacity-10 duration-500"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-500">
              <h3 className="text-2xl text-white tracking-wider text-center cursor-default">
                Pokedex with PokeApi
              </h3>
              <p className="pb-4 pt-2 text-white text-center cursor-default">
                Javascript/TailwindCSS
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Link href="https://github.com/blaizans/pokedex">
                  <p className="text-center py-3 rounded-lg bg-white text-indigo-300 font-bold text-lg cursor-pointer">
                    Code
                  </p>
                </Link>
                <Link href="https://blaizans.github.io/pokedex">
                  <p className="text-center py-3 rounded-lg bg-white text-indigo-300 font-bold text-lg cursor-pointer">
                    Live
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-indigo-300 rounded-xl p-4 group hover:bg-gradient-to-r from-indigo-300 to-cyan-300">
            <Image
              src={tictactoe}
              alt="/TicTacToe"
              className="rounded-xl group-hover:opacity-10 duration-500"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-500">
              <h3 className="text-2xl text-white tracking-wider text-center cursor-default">
                TicTacToe with OOP and Functional approach
              </h3>
              <p className="pb-4 pt-2 text-white text-center cursor-default">
                HTML/CSS/JS
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Link href="https://github.com/blaizans/TicTacTwo">
                  <p className="text-center py-3 rounded-lg bg-white text-indigo-300 font-bold text-lg cursor-pointer">
                    Code
                  </p>
                </Link>
                <Link href="https://blaizans.github.io/TicTacTwo">
                  <p className="text-center py-3 rounded-lg bg-white text-indigo-300 font-bold text-lg cursor-pointer">
                    Live
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-indigo-300 rounded-xl p-4 group hover:bg-gradient-to-r from-indigo-300 to-cyan-300">
            <Image
              src={propertyImg}
              alt="/RigaCup"
              className="rounded-xl group-hover:opacity-10 duration-500"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-500">
              <h3 className="text-2xl text-white tracking-wider text-center cursor-default">
                Riga Cup
              </h3>
              <p className="pb-4 pt-2 text-white text-center cursor-default">
                TypeScript/Next.js/Firebase
              </p>
              <Link href="https://rigacup.lv/winter">
                <p className="text-center py-3 rounded-lg bg-white text-indigo-300 font-bold text-lg cursor-pointer">
                  Live
                </p>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-indigo-300 rounded-xl p-4 group hover:bg-gradient-to-r from-indigo-300 to-cyan-300">
            <Image
              src={portfolioImg}
              alt="/portfolio"
              className="rounded-xl group-hover:opacity-10 duration-500"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-500">
              <h3 className="text-2xl text-white tracking-wider text-center cursor-default">
                This Portfolio
              </h3>
              <p className="pb-4 pt-2 text-white text-center cursor-default">
                Next.JS/TailwindCSS
              </p>
              <Link href="https://github.com/blaizans/Portfolio">
                <p className="text-center py-3 rounded-lg bg-white text-indigo-300 font-bold text-lg cursor-pointer">
                  Code
                </p>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-indigo-300 rounded-xl p-4 group hover:bg-gradient-to-r from-indigo-300 to-cyan-300">
            <Image
              src={slaughterhouse}
              alt="/slaughterhouse"
              className="rounded-xl group-hover:opacity-10 duration-500"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-500">
              <h3 className="text-2xl text-white tracking-wider text-center cursor-default">
                Rest API
              </h3>
              <p className="pb-4 pt-2 text-white text-center cursor-default">
                Java/Springboot
              </p>
              <Link href="https://github.com/blaizans/Slaughterhouse-API">
                <p className="text-center py-3 rounded-lg bg-white text-indigo-300 font-bold text-lg cursor-pointer">
                  Code
                </p>
              </Link>
            </div>
          </div>
          

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-indigo-300 rounded-xl p-4 group hover:bg-gradient-to-r from-indigo-300 to-cyan-300">
            <Image
              src={synctask}
              alt="/synctask"
              className="rounded-xl group-hover:opacity-10 duration-500"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-500">
              <h3 className="text-2xl text-white tracking-wider text-center cursor-default">
                Semester Project
              </h3>
              <p className="pb-4 pt-2 text-white text-center cursor-default">
                .NET/Springboot/Blazor
              </p>
              <Link href="https://github.com/blaizans/SyncTask-2.0">
                <p className="text-center py-3 rounded-lg bg-white text-indigo-300 font-bold text-lg cursor-pointer">
                  Code
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="skills" className="">
          <button className="bg-[#344e64]"></button>
        </div>
    </div>
    
  );
};

export default Projects;
