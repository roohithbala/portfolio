"use client";
import {useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import {motion} from 'framer-motion';

export default function Home(){
  const [theme,setTheme]=useState('dark');

  useEffect(()=>{
    const savedTheme=localStorage.getItem('theme')||'dark';
    if(savedTheme!=='dark'){
      setTheme(savedTheme);
    }
    document.documentElement.setAttribute('data-theme',savedTheme);
  },[]);

  const toggleTheme=()=>{
    const newTheme=theme==='dark'?'light':'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme',newTheme);
    localStorage.setItem('theme',newTheme);
  };

  return (
    <>
      <CustomCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <motion.button
        className="scroll-to-top"
        initial={{opacity:0}}
        animate={{opacity:1}}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
      >
        ↑
      </motion.button>
    </>
  );
}
