import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects';
import Contact from '@/components/Contact'
import DownloadCV from '@/components/DownloadCV'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bruno's Portfolio</title>
        <meta name="description" content="Portfolio website of Bruno Laizans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar/>
      <Main />
      <About />
      <Skills />
      <Projects />
      <DownloadCV />
      <Contact />
    </>
  )
}
