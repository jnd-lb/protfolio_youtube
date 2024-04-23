import React from 'react'

function SectionHeadding({title,subtitle}) {
  return (
    <div className="mb-14">
        <h3 className="text-violet-700 after:content-[''] after:w-10 after:h-0.5 after:bg-violet-700 after:block after:mt-2">{title}</h3>
       
        {/* <hr  className="w-10 h-0.5 bg-violet-700 mt-2 border-0"/> */}
        <h2 className="text-gray-900 text-3xl font-bold  mt-7 w-40">{subtitle}</h2>
    </div>
  )
}

export default SectionHeadding