import React from 'react'
import { testimonials } from '@/data'
import Image from 'next/image'

function PeopleImages() {
    
    const testimonialsSlice = testimonials.slice(0,4)
    
    const positions = [
        {
            x: "lg:left-40 md:left-32 sm:left-20 left-8",
            y: "lg:top-10 md:top-14 sm:top-14 top-16",
            z: "lg:scale-90 sm:scale-90"
        },
        {
            x: "lg:left-60 md:left-24 sm:left-10 left-10",
            y: "lg:bottom-10 md:bottom-8 sm:bottom-8 bottom-8",
            z: "lg:"
        },
        {
            x: "lg:right-40 md:right-16 right-4",
            y: "lg:top-10  -top-10",
            z: "lg:scale-75"
        },
        {
            x: "lg:right-52  right-0",
            y: "lg:bottom-10 md:bottom-24 bottom-0",
            z: "lg:scale-95"
        }
    ]

  return (
    <div className="absolute top-0 left-0 h-full w-full z-50 sm:opacity-100 opacity-40">

        {
            testimonialsSlice.map((testimonial,index)=>(
                <Image style={{"--animation-delay":index}} key={index} src={"/testimonials/"+testimonial.image} width="0" height="0" sizes="100vw" className={`testimonial-image ${positions[index]?.x} ${positions[index]?.y} ${positions[index]?.z}     w-10 aspect-square object-cover rounded-lg absolute`}/>
            ))
        }
    </div>
  )
  
}

export default PeopleImages