import React from 'react'

function Service({title,icon,description}) {
  return (
    <div>
        <div className="flex items-center mb-4">
            
            {/**icon */}
            <div className="relative shrink-0 w-16">
                <i className={"text-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bi "+icon}></i>
                <img src="/icon-bg.svg" className='w-full' alt="icon background" />
            </div>
            {/**title */}
            <h3 className="text-xl font-medium ms-4">{title}</h3>
        </div>

        <p className="text-gray-600 text-sm leading-[1.2rem]">{description}</p>
    </div>
  )
}

export default Service