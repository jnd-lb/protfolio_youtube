'use client';

import React, { useEffect, useState } from 'react'
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'
import Image from 'next/image'

function Navbar() {

  const [isAwayFromTop, setIsAwayFromTop] = useState(false)
  const SCROLL_THRESHOLD = 64;

  const handleScroll = ()=>{
    setIsAwayFromTop(window.scrollY>=SCROLL_THRESHOLD)
  }


  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return ()=> window.removeEventListener('scroll',handleScroll)
  },[])


  return (
    <nav className={` ${isAwayFromTop&&"bg-gradient-to-r from-red-300/90 to-blue-400/90 py-5 "} fixed top-0 left-0 w-full  z-[9999] py-10  transition-all `}>
        <div className="flex justify-between w-3/4 mx-auto">
            <Image src={"/logo.svg"} width="40" height="40"/>
            <MobileNavbar/>
            <DesktopNavbar isAwayFromTop={isAwayFromTop}/>
        </div>
    </nav>
  )
}

export default Navbar