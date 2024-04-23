import Image from 'next/image'
import React from 'react'

function Skill({text,image,color}) {
  return (
    <div className={`flex flex-col items-center justify-center w-40 aspect-square border-2 rounded-xl hover:scale-105 transition-all bg-${color}-300/5 border-${color}-500/20 shadow-2xl shadow-${color}-500/10`}>
        <Image width="0" height="0" sizes='100vw' alt={text} src={"/skills/"+image} className="w-14 mb-2"/>
        <h3 className="font-medium text-gray-700 text-center ">{text}</h3>
    </div>
  )
}

export default Skill