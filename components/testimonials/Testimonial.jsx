import Image from 'next/image'
import React from 'react'

function Testimonial({text,name,title,image}) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <p className="text-center  mb-6 text-gray-800 font-light w-1/2">{text}</p>  
      <Image width={0} height={0} sizes='100vw' src={"/testimonials/"+image} className='w-32 aspect-square object-cover rounded-xl'/>
      <h2 className="font-medium text-xl mt-6">{name}</h2>
      <h3 className="font-medium text-sm text-gray-700 mb-10">{title}</h3>
    </div>
  )
}

export default Testimonial