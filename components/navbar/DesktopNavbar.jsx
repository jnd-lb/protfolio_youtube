'use client';

import React from 'react'
import { links } from '@/data'
import Link from 'next/link'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'

function DesktopNavbar({isAwayFromTop}) {

  const {activeSectionHash,setActiveSectionHash} =  useActiveSectionContext()

  return (
    <ul className="hidden lg:flex  w-1/2 justify-between">

        {links.map((link)=>{
            return <li className="flex items-center">
                <Link 
                  onClick={()=>setActiveSectionHash(link.hash)}
                    className={` ${activeSectionHash==link.hash&&"text-gray-950 font-medium"} ${isAwayFromTop&&"text-white"} text-gray-600 font-light transition-all hover:text-gray-900 hover:font-meduim`}

                 href={link.hash}>
                    {link.name}   
                </Link>
                </li> 
        })}
    </ul>
  )
}

export default DesktopNavbar