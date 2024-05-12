import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import {
  BsTools,
  BsFillHouseDoorFill,
  BsFillPersonLinesFill,
  BsFillBriefcaseFill,
  BsImages,
} from "react-icons/bs";

const MoveUp = () => {
  return (
    <footer className="bg-[#203241] text-white py-8 pb-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-start lg:justify-items-start space-y-4 lg:space-y-0 lg:space-x-4 mb-4 lg:mb-0 ml-4">
          <Link
            href="/"
            smooth={true}
            duration={500}
            className="flex items-center text-gray-300 hover:text-white cursor-pointer"
          >
            <BsFillHouseDoorFill />
            <span className="ml-1">Home</span>
          </Link>
          <Link
            href="/#about"
            smooth={true}
            duration={500}
            className="flex items-center text-gray-300 hover:text-white cursor-pointer"
          >
            <BsFillPersonLinesFill />
            <span className="ml-1">About Me</span>
          </Link>
          <Link
            href="/#experience"
            smooth={true}
            duration={500}
            className="flex items-center text-gray-300 hover:text-white cursor-pointer"
          >
            <BsFillBriefcaseFill />
            <span className="ml-1">Experience</span>
          </Link>
          <Link
            href="/#projects"
            smooth={true}
            duration={500}
            className="flex items-center text-gray-300 hover:text-white cursor-pointer"
          >
            <BsImages />
            <span className="ml-1">Projects</span>
          </Link>
          <Link
            href="/#skills"
            smooth={true}
            duration={500}
            className="flex items-center text-gray-300 hover:text-white cursor-pointer"
          >
            <BsTools />
            <span className="ml-1">Toolset</span>
          </Link>
        </div>
        <p className="text-lg mb-4 lg:text-center">"Never Stop Developing!"</p>
        <div className="flex justify-center lg:justify-end mr-4">
          <Link href="/">
            <div className="rounded-full shadow-md shadow-cyan-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300 mb-8">
              <HiOutlineChevronDoubleUp className="text-cyan-300 " size={30} />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default MoveUp;
