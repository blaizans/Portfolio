import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects';
import Contact from '@/components/Contact'
import DownloadCV from '@/components/DownloadCV'
import Experience from '@/components/Experience'
import MoveUp from '@/components/MoveUp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Never Stop Developing!</title>
        <meta name="description" content="Portfolio website of Bruno Laizans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        
      </Head>
      <Navbar/>
      <Main />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <MoveUp />
      {/* <DownloadCV /> */}
      {/* <Contact /> */}
    </>
  )
}
