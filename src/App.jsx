import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className='font-sans w-full min-h-screen bg-[#121212]'>
      <Header />
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
