import { typeToColor} from '@/utils/typeToColor'

import React from 'react'
import {typeData} from '@/utils/typeData'

const Sidebar = () => {

  return (
    <div className='flex flex-col w-80'>
      <div className='flex flex-col'>
        {Object.keys(typeToColor).map((item, index) => ( 
          <button 
            key={index} 
            className={`
              ${typeToColor[item]} 
              ${item === "ALL" ? "mb-8" : "mt-2 mb-2"} 
              rounded-full 
              px-4 
              py-2`
            }
          >
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