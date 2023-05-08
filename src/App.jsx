import { useEffect, useState, useRef } from 'react'
import { useLayoutEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Info from './components/about/Info'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import Aos from 'aos'


function App() {

  useLayoutEffect(() => {
    Aos.init();
    
  },[]);

  return (
    <>
    <Header/>
    <main className="main">
    
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Work/>
    <Contact/>
    </main>

    
    <Footer/>
    <ScrollUp/>
    </>
  )
}

export default App
