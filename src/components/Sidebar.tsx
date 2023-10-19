import React from 'react'
import {typeData} from '@/utils/typeData'

const Sidebar = () => {

  return (
    <div className='flex flex-col w-80 gap-y-8'>
      <button className='bg-slate-500 rounded-full py-2 px-4'>
        <p className='text-lg font-bold'>
          ALL
        </p>
      </button>
      <div className='flex flex-col gap-y-4'>
        {typeData.map((item, index) => (
          <button key={index} className={`${item.color} rounded-full py-2 px-4`}>
            <p className='text-lg font-bold'>
              {item.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Sidebar