import React from 'react';
import Image from 'next/image';
import HtmlImg from '/public/html.png'
import CssImg from '/public/css.png'
import JsImg from '/public/js.png'
import JavaImg from '/public/java.png'
import NetImg from '/public/net.png'
import CsharpImg from '/public/csharp.png'
import AgileImg from '/public/agile.jpg'
import UpImg from '/public/up.png'
import UmlImg from '/public/uml.png'
import TailwindImg from '/public/tailwind.png'
import JiraImg from '/public/jira.png'
import PostgreImg from '/public/postgres.png'
import ReactImg from '/public/react.png'
import SqlImg from '/public/sql.png'
import PhpImg from '/public/php.png'
import BootstrapImg from '/public/bootstrap.png'


const Skills = () => {
  return (
    <div  className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-cyan-300 cursor-default'>
          Skills
        </p>
        <h2 className='py-4 cursor-default'>Programming</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl shadow-indigo-300 bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={HtmlImg} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-indigo-300 bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={CssImg} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={JsImg} width='54' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={TailwindImg} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={BootstrapImg} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={PhpImg} width='70' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PHP</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={JavaImg} width='44' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Java</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={SqlImg} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={PostgreImg} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NetImg} width='140' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>.NET</h3>
                <p>Learning</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={CsharpImg} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>C#</h3>
                <p>Learning</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className='py-4 text-right mt-4 cursor-default'>Methodologies</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={AgileImg} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Agile</h3>
                <p>SCRUM</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={JiraImg} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Jira Atlassian</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={UmlImg} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center text-center'>
                <h3>Unified Modelling Language</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-indigo-300  bg-zinc-100 text-zinc-800 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={UpImg} width='84' height='64' alt='/' />
              </div>
              <div id="projects"className='flex flex-col items-center justify-center text-center'>
                <h3>Unified Process</h3>
              </div>
            </div>
          </div>
                    
        </div>
      </div>
    </div>
  );
};

export default Skills;