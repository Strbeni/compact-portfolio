// src/App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import InfoGrid from './components/InfoGrid'
import Sidebar from './components/Sidebar'
import Blogs from './components/ProjectCard'

function Home() {
  return (
    <div className='
      text-white 
      m-auto 
      p-2 
      grid 
      gap-2 
      max-w-6xl 
      overflow-hidden  
      relative 
      w-full 
      sm:p-4 
      sm:gap-2 
      md:grid-cols-2 
      md:gap-3 
      md:p-6 
      lg:h-screen 
      lg:grid-cols-4 
      lg:grid-rows-[repeat(8,_minmax(0,_1fr))] 
      lg:gap-4
    '>
      <div className='lg:col-span-3 space-y-4'>
        <HeroSection />
        <InfoGrid />
      </div>
      <Sidebar />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
      </Routes>
    </Router>
  )
}

export default App
