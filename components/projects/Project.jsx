import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Project({image, description, title, category, link}) {
  return (
    <div className="group grid grid-cols-2 shadow rounded-xl p-5 pe-0 bg-gray-50 w-full aspect-video cursor-pointer overflow-hidden">
        {/**Text */}
        <div>
            <h3 className="text-xl font-medium text-gray-900">{title}</h3>
            <span className="bg-violet-500 px-3 py-0.5 rounded-xl text-white text-xs font-light" >{category}</span>
            <p className="text-xs text-gray-600 mt-5">{description}</p>

            <Link href={link} className='flex items-center text-gray-500 text-xs mt-3' >Check it online
                <i className="bi bi-arrow-right ms-3 mt-1 group-hover:ms-7 transition-all"></i>
            </Link>
        </div>

        {/**Image */}
        <div className="relative">
            <Image height={0} width={0} sizes='100vw' className='relative z-50 ms-auto w-52 rounded rotate-0 group-hover:-rotate-3 group-hover:scale-105 transition-all' src={"/projects/"+image}/>
            <div className="absolute top-0 left-0 group-even:bg-yellow-500/40 bg-green-500/40 w-44 aspect-square rounded-full block blur-2xl"></div>
        </div>
    </div>
  )
}

export default Project