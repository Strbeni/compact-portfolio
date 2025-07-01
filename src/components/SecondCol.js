import React from 'react'
import nl from "../nerv-logo.jpg";

function SecondCol(props) {
  return (<>
    <div className={`col-start-2 text- relative lg:col-span-1 ${props.styleName} transition duration-75 ease-in-out bg-neutral-900 lg:rounded-lg border border-zinc-700 hover:border-orange-600 flex items-center justify-center font-cinzel`}>
        {props.text}
        <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
                    <img src={nl} className="w-full h-full object-cover" />
        </div>
    </div>
    </>
  )
}

export default SecondCol