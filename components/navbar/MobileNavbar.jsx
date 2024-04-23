'use client';

import React,{useState} from 'react'
import ToggleButton from './ToggleButton'
import { links } from '@/data'
import Link from 'next/link'
import { useActiveSectionContext } from '@/context/ActiveSectionContext';

function MobileNavbar() {

    const [toggleMenu, setToggleMenu] = useState(false)

    const {activeSectionHash,setActiveSectionHash} =  useActiveSectionContext()

  return (
    <div className="block lg:hidden">
        <ToggleButton toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
        
    
        <div className={` ${!toggleMenu&&'translate-x-full'} transition-all lg:hidden block bg-gray-300 p-10 fixed top-0 right-0 w-2/3 h-screen bg-opacity-95 z-[9990]`}>
            <ul className="">
            {links.map((link)=>{
            return <li>
                <Link 
                    className={`text-gray-600 font-light transition-all hover:text-gray-900 hover:font-extrabold py-3 block ${activeSectionHash==link.hash&&"text-gray-950 font-medium"} `}
                    onClick={()=>setActiveSectionHash(link.hash)}
                 href={link.hash}>
                    {link.name}   
                </Link>
                </li> 
        })}
            </ul>
        </div>
    </div >
  )
}

export default MobileNavbar