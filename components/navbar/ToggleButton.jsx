'use client';

import React from 'react'

function ToggleButton({toggleMenu,setToggleMenu}) {



    const handleToggleClick = ()=>{
        setToggleMenu((pre)=>!pre)
    }

  return (
    <button onClick={handleToggleClick} className={`${toggleMenu&&"active"}  toggle relative block w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-pink-400 z-[9999]`}>
        <span className="w-5 h-0.5 bg-white absolute left-1/2 -translate-x-1/2"></span>
        <span className="w-5 h-0.5 bg-white absolute left-1/2 -translate-x-1/2"></span>
        <span className="w-5 h-0.5 bg-white absolute left-1/2 -translate-x-1/2"></span>
    </button>
  )
}

export default ToggleButton