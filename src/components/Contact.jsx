import Image from "next/image";
import React from "react";
import contactImg from "/public/code.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-cyan-300 cursor-default">
          Contact
        </p>
        <h2 className="py-4 cursor-default">Connect With Me</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-indigo-300 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt="/"
                />
              </div>
              <div className="">
                <h2 className="py-2">Bruno Laizans</h2>
                <p>Junior Software Engineer</p>
                <p className="py-4">
                  I am available for part-time on-site/remote or remote
                  full-time positions.
                </p>
              </div>
              <div>
              <div className="flex items-center justify-between py-4">
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
                    className="rounded-full shadow-lg shadow-cyan-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/#resume">
                  <div
                    className="rounded-full shadow-lg shadow-cyan-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
            </div>
            
          </div>
          {/*right*/}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-indigo-300 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/f1ad6c09-0c99-4847-a3e7-62da21d01a6b'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex text-indigo-400 border-cyan-300'
                      type='text'
                      name='name' required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex text-indigo-400 border-cyan-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex text-indigo-400 border-cyan-300'
                    type='email'
                    name='email' required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex text-indigo-400 border-cyan-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 text-indigo-400 border-cyan-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-white mt-4 shadow-sm bg-gradient-to-r from-indigo-300 to-cyan-300'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            
              <div className='rounded-full shadow-md shadow-cyan-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-cyan-300'
                  size={30}
                />
              </div>
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
