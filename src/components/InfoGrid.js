import React from 'react'
import Redir from './Redir'
import shinji from "../cbg.webp"
import SecondCol from './SecondCol'
import nl from "../nerv-logo.jpg"
import bg2 from "../bg2.jpg";
import {motion} from 'motion/react';
import eva from "../eva01.jpg";

function InfoGrid() {

  const currtime = ()=>{
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${hours < 12 ? 'AM' :'PM'} IST`;
  }

  return (
    <>
    <div className='grid lg:grid-cols-3 lg:grid-rows-[repeat(8,_minmax(0,_1fr))] gap-4 min-h-full'>
      <motion.div drag dragConstraints={{top:0,bottom:0,left:0,right:0}} className='relative col-start-1 lg:col-span-1 row-span-4 w-full px-4 py-6  bg-neutral-900 lg:rounded-lg border border-slate-400 hover:border-orange-600 flex align-start justify-between pl-6'>
        <div className="absolute inset-0 z-0 opacity-20 overflow-hidden pointer-events-none">
                    <img src={nl} className="w-full h-full object-cover" />
        </div>
         <div className="h-full z-10">
            <header className="flex items-center">
                <h1 class="text-white text-xl font-bitcount">
                  Let's start working together!
                </h1>
            </header>
            <address className="flex flex-col mt-4">
                <h2 className="text-slate-300">Contact Details</h2>
                <p className="text-sm text-wrap">contact@amityadv747@gmail.com</p>
                <p>Mohali, India</p>
            </address>
            <div className="flex flex-col mt-4  w-fit">
                <h2 className="text-slate-300 italic">Socials</h2>
                <ul>
                  <li className='font-semibold z-50 cursor-pointer' > <a href="/" >Linkedin</a> </li>
                  <li className='font-semibold z-10 cursor-pointer'> <a  href="/" >Github</a> </li>
                </ul>
            </div>
          </div>
      </motion.div>

      
      <SecondCol text={currtime()} styleName="row-start-1  row-span-1 border border-slate-400 hover:border-orange-600 font-cinzel text-2xl font-semibold"/>

      <motion.div drag dragConstraints={{top:0,bottom:0,left:0,right:0}} className="col-start-2 row-start-2 row-span-2 relative lg:col-span-1 transition duration-75 ease-in-out bg-neutral-900 rounded-lg border border-zinc-600 hover:border-orange-600 px-6 py-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img src={nl} className="w-full h-full object-cover rounded-lg" />
        </div>

        <span className="absolute right-6 flex h-3 w-3 z-10"> 
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span> 
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span> 
        </span>

        <p className="relative z-10 font-semibold">Now</p>
        <p className="relative z-10 text-sm text-gray-400 leading-loose">What's that?</p>
        <p className="relative z-10 italic">Currently pursuing Bachelors in Technology</p>
      </motion.div>

    <motion.div drag dragConstraints={{top:0,bottom:0,left:0,right:0}} className={`col-start-2 text-red-600 relative lg:col-span-1 row-start-4 row-span-1 text-2xl font-semibold transition duration-75 ease-in-out lg:rounded-lg border border-slate-400 hover:border-orange-600 flex items-center justify-center font-cinzel`}>
            <div className="absolute inset-0 z-10 opacity-20 overflow-hidden pointer-events-none">
                        <img src={eva} alt='Evangelion' className="w-full h-full object-cover rounded-lg" />
            </div>
            <a href='https://animekai.to/random' target='_blank'><p className='z-50 text-lg mr-8'>Good Anime</p></a>
            <div className='z-50 hover:translate-x-1 hover:-translate-y-1 transition-transform ease-in-out duration-100'>
            <svg width="1em" height="1em" className="  h-6  float-right group-hover:text-primary-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ease-in-out duration-100 z-20" data-icon="ri:arrow-right-up-line">   <symbol id="ai:ri:arrow-right-up-line" viewBox="0 0 24 24"><path fill="currentColor" d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z"></path></symbol><use href="#ai:ri:arrow-right-up-line"></use>  </svg>
        </div>
    </motion.div>


      {/* <SecondCol text="Second Third" styleName="row-start-4 row-span-1 border border-slate-400 hover:border-orange-600 "/> */}
      {/* <SecondCol text="current" styleName="row-start-2 row-span-2 border border-slate-400 hover:border-orange-600 "/> */}

     
      <motion.div drag dragConstraints={{top:0,bottom:0,left:0,right:0}} className='col-start-3 row-span-1 row-start-1 w-full relative px-4 py-6  bg-neutral-900 lg:rounded-lg border border-slate-400 hover:border-orange-600 flex align-start justify-between transform perspective-1200 transition duration-75 ease-in-out lg:col-span-1 lg:row-span-1 font-cinzel'>
          <div className="absolute inset-0 z-10 opacity-20 overflow-hidden pointer-events-none">
            <img src={shinji} className="w-full h-full object-cover" />
          </div>
          <div className='z-20 w-full h-full'>
              Design Works
          </div>
          <div className='z-20'>
              <svg width="1em" height="1em" className="h-6  float-right group-hover:text-primary-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ease-in-out duration-100 z-20" data-icon="ri:arrow-right-up-line">   <symbol id="ai:ri:arrow-right-up-line" viewBox="0 0 24 24"><path fill="currentColor" d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z"></path></symbol><use href="#ai:ri:arrow-right-up-line"></use>  </svg>
          </div>
      </motion.div>
      {/* <Redir text="Design Works"/> */}
      <Redir styleName="row-start-2 row-span-1 col-start-3" text="PlayGround"/>
      
      <Redir styleName="row-start-4 row-span-1 col-start-3" text="Projects"/>
      
      <Redir styleName="row-start-3 row-span-1  col-start-3" text="Blog"/>
    </div>
    </>
  )
}

export default InfoGrid