import React from 'react'
import { useRouter } from 'next/router'

const DownloadCV = () => {
    const router = useRouter();
    function download() {
        const URL = '\CV - Bruno Laizans.pdf'
        if (typeof window !== "undefined"){
          window.location.href = URL
        }
        router;
    }
  return (
    <div id="resume"className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 pt-24 pb-16'>
        <p className='uppercase text-xl tracking-widest text-cyan-300 cursor-default'>Resume</p>
        <h2 className='py-4 drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300 cursor-default'>See My Past/Present</h2>
            <button onClick={download} className='w-full p-4 text-white mt-4 shadow-xl shadow-white animate-pulse hover:animate-none bg-gradient-to-r from-indigo-300 to-cyan-300'>Press ME!</button>
        </div>
        <div id="contact" className=''><button className='bg-[#344e64]'></button></div>
    </div>
  )
}

export default DownloadCV