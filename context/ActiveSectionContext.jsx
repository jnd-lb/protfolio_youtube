'use client';
import React , {createContext ,useContext,useState} from 'react'

const Context = createContext()

function ActiveSectionContext({ children}) {

    
    const [activeSectionHash , setActiveSectionHash] = useState("/#home") 

  return (
    <Context.Provider value={
        {activeSectionHash,setActiveSectionHash}
    }>
        {children}
    </Context.Provider>
  )
}

export default ActiveSectionContext

export const useActiveSectionContext = ()=>useContext(Context)