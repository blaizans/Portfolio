import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import propertyImg from '/public/rc.jpg'
import portfolioImg from '/public/this.jpg'

const Projects = () => {
  return (
    <div id="projects"className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-cyan-300 cursor-default'>Projects</p>
            <h2 className='py-4 cursor-default'>I Made This!</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-indigo-300 rounded-xl p-4 group hover:bg-gradient-to-r from-indigo-300 to-cyan-300'>
                    <Image src={propertyImg} alt='/' className='rounded-xl group-hover:opacity-10 duration-500'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-500'>
                        <h3 className='text-2xl text-white tracking-wider text-center cursor-default'>Riga Cup</h3>
                        <p className='pb-4 pt-2 text-white text-center cursor-default'>PHP/Bootstrap/MySQL/JavaScript</p>
                        <Link href="https://rigacup.lv/">
                            <p className='text-center py-3 rounded-lg bg-white text-indigo-300 font-bold text-lg cursor-pointer'>More</p>
                        </Link>
                    </div>
                </div>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-indigo-300 rounded-xl p-4 group hover:bg-gradient-to-r from-indigo-300 to-cyan-300'>
                    <Image src={portfolioImg} alt='/' className='rounded-xl group-hover:opacity-10 duration-500'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-500'>
                        <h3 className='text-2xl text-white tracking-wider text-center cursor-default'>This Portfolio</h3>
                        <p className='pb-4 pt-2 text-white text-center cursor-default'>Next.JS/TailwindCSS</p>
                        <Link href="http://www.blaizans.com/">
                            <p className='text-center py-3 rounded-lg bg-white text-indigo-300 font-bold text-lg cursor-pointer'>More</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
  )
}

export default Projects