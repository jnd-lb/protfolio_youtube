import React from 'react'

function BreakpointHelper() {
  return (
    <div className='fixed bottom-0 left-0 h-10 w-32 opacity-40 z-[999999] '>
        <div className='absolute z-[500] top-0 left-0 w-full h-full xl:flex items-center justify-center bg-blue-500 hidden'>XL</div>
        <div className='absolute z-[400] top-0 left-0 w-full h-full lg:flex items-center justify-center bg-green-500 hidden'>LG</div>
        <div className='absolute z-[300] top-0 left-0 w-full h-full md:flex items-center justify-center bg-yellow-500 hidden'>MD</div>
        <div className='absolute z-[200] top-0 left-0 w-full h-full sm:flex items-center justify-center bg-orange-500 hidden'>SM</div>
        <div className='absolute z-[100] top-0 left-0 w-full h-full flex items-center justify-center bg-red-500 '>under SM</div>
    </div>
  )
}

export default BreakpointHelper