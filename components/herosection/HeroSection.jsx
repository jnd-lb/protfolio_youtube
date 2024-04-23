import React from 'react'
import Button from '../ui/Button'
import Image from 'next/image'

function HeroSection() {
  return (
    <section id="home" 
        className="
           grid  gap-x-4 h-auto w-3/4 mx-auto  grid-cols-1 py-32
            md:grid-cols-2 md:h-screen
            ">

        {/* TEXT COL */}
        <div>
            <h2 className="
                text-gray-600 text-lg mb-5 text-center
                md:text-left
                lg:text-xl
                ">Hello it&apos;s Jihad</h2>
            <h1 className="
                text-center text-3xl font-bold bg-gradient-to-tr from-violet-700 to-pink-600 bg-clip-text text-transparent
                md:text-left
                ">I provide custom websites development and maintenance services</h1>
                    <Button myClass="mx-auto md:mx-0" text="Let&apos;s Talk" link="/#contact"/>
               
        </div>
        {/* TEXT COL END */}


        {/* IMAGE COL */}
        <div className="relative">

            {/*Particles */}
            <Image width="0" height="0" sizes="100vw" alt="wave" src={"/wave.svg"} 
                className='w-24 absolute top-10 right-20 z-[55] rotate-45 opacity-30
                        md:w-16 md:top-14  md:right-auto md:left-8   md:-rotate-45 md:opacity-10
                '/> 
            <Image width="0" height="0" sizes="100vw" alt="dots" src={"/dots.svg"} 
                    className='w-64 absolute top-0 right-0 z-50 -translate-y-24 translate-x-28 rotate-12 opacity-50
                               md:w-52 md:translate-x-0 md:translate-y-0'/> 
            
            {/*colored dots*/}
            <div className="absolute w-2 rounded-full  aspect-square bg-pink-400  bottom-16 left-0"></div>
            <div className="absolute w-1 rounded-full  aspect-square bg-violet-400  top-16 left-10"></div>
            <p className="absolute w-1 rounded-full  aspect-square  top-1/2 -left-10 text-gray-500 rotate-45">+</p>
            <p className="absolute w-1 rounded-full  aspect-square text-lg top-1/2 translate-y-24 right-10 text-red-500 rotate-12">+</p>
            

            {/*Main image */}
            <Image width="0" height="0" sizes="100vw" alt="profile picture of Jihad" 
            className="
                relative
                z-50
                w-4/5 mx-auto mt-7
                
                sm:w-3/5
                md:w-full md:mt-0" 

            src="/pp.png"/>

            {/* Colourfull Spotlights  */}
            <div className="w-40 aspect-square bg-green-400 rounded-full blur-2xl opacity-30 absolute top-0 left-0 z-20"></div>
            <div className="w-40 aspect-square bg-pink-400 rounded-full blur-2xl opacity-30 absolute bottom-0 right-0 z-20"></div>
            <div className="w-56 aspect-square bg-violet-400  rounded-full blur-2xl opacity-30 absolute top-0 right-0 z-20"></div>


        </div>
        {/* IMAGE COL END*/}


        

    </section>
  )
}

export default HeroSection