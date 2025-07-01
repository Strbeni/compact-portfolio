import React from 'react'
import HeroSection from './components/HeroSection'
import InfoGrid from './components/InfoGrid'
import Sidebar from './components/Sidebar'



function App() {
  return (
    <>
    {/* <div className='min-h-screen bg-black text-gray-100 p-6  grid grid-cols-1 lg:grid-cols-4 gap-4'> */}
    {/* <div className='text-white m-auto p-2 grid gap-2 max-w-6xl overflow-hidden  relative w-full sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen  lg:grid-rows-[repeat(8,_minmax(0,_1fr))]
 lg:grid-cols-4 lg:gap-4 lg:max-h-[800px]'> */}
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

{/* <div className='
  text-white 
  mx-auto 
  p-4 
  grid 
  gap-4 
  w-full 
  max-w-7xl 
  grid-cols-1
  sm:grid-cols-1
  md:grid-cols-1
  lg:grid-cols-4 
  lg:grid-rows-[repeat(8,_minmax(0,_1fr))]
  lg:gap-4
'> */}

    <div className='lg:col-span-3 space-y-4'>
    {/* <div className='lg:col-span-3 space-y-4 col-span-full'> */}

        <HeroSection/>
        <InfoGrid/>
    </div>
    <Sidebar/>    

    </div>
    
    </>
  )
}

export default App