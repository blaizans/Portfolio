import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "/public/portfolio.jpg";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-cyan-300 cursor-default">
            About
          </p>
          <h2 className="py-4 drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300 cursor-default">
            Let Me Introduce Myself
          </h2>
          <p className="py-2 text-indigo-300 cursor-default text-justify">
            My journey to becoming a programmer/software developer was an
            interesting one. I had dedicated my life to football and always
            thought it would be my career. However, at the age of 18, I decided
            to pursue my passion for coding and haven't looked back since.{" "}
          </p>
          <p className="py-2 text-indigo-300 cursor-default text-justify">
            One thing that football taught me is the importance of discipline
            and a healthy lifestyle. These values have carried over into my work
            as a developer and have helped me to remain focused and committed to
            my projects. I take pride in delivering high-quality work that meets
            the needs of my clients and ensures their success.{" "}
          </p>
          <p className="py-2 text-indigo-300 cursor-default text-justify">
            As you navigate through my portfolio, you will see that I have a
            diverse range of skills and experience, from web development to
            backend development. My goal is to continuously learn and improve my
            skills, so I can offer the best solutions for my clients.{" "}
          </p>
          <p className="py-2 text-indigo-300 cursor-default text-justify">
            Thank you for taking the time to learn about me and my work. I look
            forward to the opportunity to work with you and help bring your
            ideas to life!{" "}
          </p>
          <Link href="/#projects">
            <p className="py-2 text-cyan-300 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-indigo-300 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
        <div id="skills" className="">
          <button className="bg-[#344e64]"></button>
        </div>
      </div>
    </div>
  );
};

export default About;
