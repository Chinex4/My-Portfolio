import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <div className='w-full min-h-screen bg-[#121212]'>
      <Header />
      <Introduction />
      <About />
      <Projects />
    </div>
  )
}

export default App
