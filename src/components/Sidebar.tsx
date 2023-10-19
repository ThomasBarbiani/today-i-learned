import { typeToColor } from '@/utils/typeToColor'

import React from 'react'

const Sidebar = () => {

  return (
    <div className='flex flex-col w-80 gap-y-8'>
      <button className='bg-slate-500 rounded-full py-2 px-4'>
        <p className='text-lg font-bold'>
          ALL
        </p>
      </button>
      <div className='flex flex-col gap-y-4'>
        {Object.keys(typeToColor).map((item, index) => ( 
          <button key={index} className={`rounded-full py-2 px-4 ${typeToColor[item]}`}>
            <p className='text-lg font-bold'>
              {item}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Sidebar