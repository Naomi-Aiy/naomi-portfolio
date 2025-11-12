import React from 'react';
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Landing from './Components/Landing/Landing'
import About_Me from './Components/About Me/About_Me'
import Skills from './Components/Skills/skills'
import Projects from './Components/Projects/projects'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'


const App = () => {
  
  return (
    <div> 
      <Navbar/>
      <Landing/>
      <About_Me/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>

  )
}

export default App