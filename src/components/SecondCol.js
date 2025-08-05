import React from 'react'
import nl from "../nerv-logo.jpg";
import {motion} from 'motion/react';

function SecondCol(props) {
  return (<>
    <motion.div drag dragConstraints={{top:0,bottom:0,left:0,right:0}} className={`col-start-2  relative lg:col-span-1 ${props.styleName} transition duration-75 ease-in-out bg-neutral-900 lg:rounded-lg border border-zinc-700 hover:border-red-600 flex items-center justify-center font-cinzel`}>
        {props.text}
        <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
                    <img src={nl} className="w-full h-full object-cover" />
        </div>
    </motion.div>
    </>
  )
}

export default SecondCol