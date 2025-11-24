
import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

function Redir({ text, to, styleName = '' }) {
  const content = (
    <motion.div
      drag
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      className={`font-cinzel w-full text-lg px-6 py-5 bg-zinc-900 lg:rounded-lg border border-slate-400 hover:border-red-600 flex align-start justify-between ${styleName}`}
    >
      <div>{text}</div>
      <div>
        <svg
          width="1em"
          height="1em"
          className="h-6 float-right transition-transform ease-in-out duration-100 z-20"
          data-icon="ri:arrow-right-up-line"
        >
          <path
            fill="currentColor"
            d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z"
          />
        </svg>
      </div>
    </motion.div>
  )

  return to ? <Link to={to} className="block">{content}</Link> : content
}

export default Redir
