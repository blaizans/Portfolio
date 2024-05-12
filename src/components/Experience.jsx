import React from "react";
import Image from "next/image";
import Systematic from "/public/Systematic-Logo.png";
import RigaCup from "public/Riga Cup.svg";
import Rema from "public/rema.jpg";
import Via from "public/via.png";
import ucl from "public/ucl.png";
import rkv from "public/rkv.png";

const Experience = () => {
  return (
    <div className="w-full lg:h-screen p-2 pb-32">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-cyan-300 cursor-default">
          Learning & Experience
        </p>
        <h2 className="py-4 cursor-default">Job Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          <a href="https://systematic.com/da-dk/" target="_blank">
            <div className="p-6 shadow-xl shadow-indigo-300 bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Systematic} width="200" height="64" alt="/"  decoding="async" loading="lazy"/>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="">Systematic</h3>
                  <p className=" text-gray-500">Test Engineer</p>
                  <p className=" text-gray-500">2024 - Now</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://rigacup.lv/winter/" target="_blank">
            <div className="p-6 shadow-xl shadow-indigo-300 bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={RigaCup} width="180" height="64" alt="/"  decoding="async" loading="lazy"/>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Riga Cup</h3>
                  <p className=" text-gray-500">Volunteer</p>
                  <p className=" text-gray-500">2016 - Now</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.rema1000.dk/" target="_blank">
            <div className="p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Rema} width="120" height="64" alt="/"  decoding="async" loading="lazy"/>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>REMA 1000</h3>
                  <p className=" text-gray-500">Student Job</p>
                  <p className=" text-gray-500">2022 - 2024</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <h2 className="py-4 text-right mt-4 cursor-default">Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="https://www.via.dk/" target="_blank">
            <div className="p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Via} width="200" height="64" alt="/" decoding="async" loading="lazy" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>VIA University</h3>
                  <p className=" text-gray-500">Software Engineer</p>
                  <p className=" text-gray-500">2022 - 2025</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.ucl.dk/" target="_blank">
            <div className="p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={ucl} width="200" height="64" alt="/" decoding="async" loading="lazy" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>UCL Odense</h3>
                  <p className=" text-gray-500">IT Technology</p>
                  <p className=" text-gray-500">2021 - 2022</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.rkv.lv/" target="_blank">
            <div className="p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={rkv} width="130" height="64" alt="/" decoding="async" loading="lazy" />
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <h3>Riga Cultures Secondary School</h3>
                  <p className=" text-gray-500">Childhood - 2021</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
