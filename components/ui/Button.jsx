import Link from 'next/link'
import React from 'react'

function Button({text,link,myClass=""}) {

  const buttonStyle = myClass+' bg-violet-500 py-2 px-3 rounded-full text-white text-lg w-40 block text-center mt-10'

  if(!link) 
  return <button className={buttonStyle}>{text}</button>
  
  return (
    <Link href={link} className={buttonStyle}>{text}</Link>
  )
}

export default Button