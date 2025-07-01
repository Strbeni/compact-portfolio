import React from 'react'
function Redir(props) {
  return (
    <div className='font-cinzel lg:col-span-1 lg:row-span-1 w-full text-lg px-6 py-5  bg-zinc-900 lg:rounded-lg border border-darkslate-400 hover:border-orange-600 flex align-start justify-between'>
        <div className=''>
            {props.text}
        </div>

        <div className=''>
            <svg width="1em" height="1em" className="  h-6  float-right group-hover:text-primary-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ease-in-out duration-100 z-20" data-icon="ri:arrow-right-up-line">   <symbol id="ai:ri:arrow-right-up-line" viewBox="0 0 24 24"><path fill="currentColor" d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z"></path></symbol><use href="#ai:ri:arrow-right-up-line"></use>  </svg>
        </div>

    </div>
  )
}

export default Redir