import React from 'react'
import shinji from '../eoe.png';
import nl from "../evar.jpg";

function Sidebar() {
  return (<>
    <div className="bg-zinc-900 lg:col-span-1 font-light lg:row-span-5  p-6 rounded-lg border border-zinc-700 hover:border-orange-600">
      <p className='text-lg font-bold font-serif '>About me</p>
      <p className='text-sm mb-6 leading-5'>Hi, I'm Strbeni, a front-end software developer from Mohali.</p>
      <p className='text-sm'>My primary tools of choice includes:</p>
      <ul className='list-disc list-inside text-sm leading-6 mt-3'>
        <li>Javascript</li>
        <li>Python</li>
        <li>React</li>
        <li>Tailwind/Css</li>
      </ul>
      <p className='text-sm mt-2 leading-5'>Beyond coding, I'm passionate about design, illustration, animation and 3D modelling and traveling. An unusual hobby of mine is collecting vintage passports, they're interesting pieces of history to me.</p>
    </div>
    <div className='col-start-4 relative lg:row-span-1 rounded-lg px-4  bg-zinc-900 border border-zinc-700 hover:border-orange-600 '>
      {/* <div className="absolute inset-0 z-0 opacity-80 overflow-hidden">
        <img src={nl} className="w-full h-full object-cover" />
      </div> */}
    </div>
    <div className='col-start-4 font-satoshi text-sm rounded-lg px-4 lg:row-span-1 bg-zinc-900 border border-zinc-700 hover:border-orange-600 flex items-center justify-between'>
     <span>© 2025</span>Built with<span className='text-emerald-500'>T_T</span> by<span className="text-orange-600 font-bold font-bitcount">Strbeni</span>
    </div>
    </>
  )
}











export default Sidebar