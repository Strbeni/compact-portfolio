import React from 'react'
import shinji from '../shinji.png';
import bg from "../eoe.png";
import eva from "../back.gif";
import bg2 from "../bg2.jpg";
import { motion } from 'motion/react';

function HeroSection() {
    const clicked = (e)=>{
        
    };
  return (
    <motion.div drag dragConstraints={{top:0,bottom:0,left:0,right:0}} className='p-6 relative pb-24 shadow-md rounded-lg bg-zinc-900 border border-zinc-700 hover:border-orange-600  lg:grid md:grid grid-cols-4 transition-colors duration-300 ease-in-out' >
    {/* <div className='p-4 sm:p-6 relative pb-24 shadow-md rounded-lg bg-zinc-900 border border-zinc-700 hover:border-orange-600 grid grid-cols-1 md:grid-cols-4 transition-colors duration-300 ease-in-out'> */}

        <div className="absolute inset-0 z-10 opacity-20 overflow-hidden pointer-events-none">
                            <img src={eva} className="w-full h-full object-cover " />
        </div>
        <div className='col-span-3 z-20'>
        {/* <div className='col-span-full md:col-span-3'> */}

            <div className='flex flex-col'>

                <p className='text-sm uppercase font-cinzel text-gray-400' >Welcome</p>
                <p className='text-md font-bitcount mt-2 mb-2'>
                    Hi, I'm <span className='text-orange-600'>Strbeni</span>, a software developer with strong focus on the user experience, animations and micro interactions.
                </p>
                <p className='text-md font-bitcount leading-10'>Say Something in shoutout box..</p>

            </div>

            <div className='absolute bottom-10 flex flex-wrap mt-4 gap-3 font-bitcount text-sm'>
                <button className="flex z-10 shadow hover:shadow-zinc-600 items-center gap-2 px-4 py-2 border bg-black border-slate-600 hover:border-slate-400 rounded-lg transition-colors">
                    Github
                </button>
                <button className="flex z-10 shadow hover:shadow-zinc-600 items-center gap-2 px-4 py-2 border bg-black border-slate-600 hover:border-slate-400 rounded-lg transition-colors">
                    LinkedIn
                </button>
                <button className="flex z-10 shadow hover:shadow-zinc-600 items-center gap-2 px-4 py-2 border bg-black border-slate-600 hover:border-slate-400 rounded-lg transition-colors">
                    Instagram
                </button>
                <button className="flex z-10 shadow hover:shadow-zinc-600 items-center gap-2 px-4 py-2 border bg-black border-slate-600 hover:border-slate-400 rounded-lg transition-colors">
                    Email
                </button>
                <button className="px-6 z-10 shadow hover:shadow-neutral-700 cursor-pointer py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    Book a call
                </button>
                {/* <button className='border border-white-600 px-4 hover:border-slate-400 py-2 rounded-lg' onClick={clicked}>Github</button> */}
                {/* <button className='border border-white-600 px-4 py-2 rounded-lg hover:border-slate-400' onClick={clicked}>IG</button>
                <button className='border border-white-600 px-4 hover:border-slate-400 py-2 rounded-lg' onClick={clicked}>OP</button> */}
                
            </div>
        </div>
        <img src={shinji} className="w-full rounded-lg mt-6 md:mt-4 md:col-span-1 pointer-events-none" />

        {/* <img src={shinji}   className="w-full rounded-lg mt-4"/> */}
    </motion.div>
    
  )
}

export default HeroSection