import { typeToColor} from '@/utils/typeToColor'

import React from 'react'

const Sidebar = () => {

  return (
    <div className='flex flex-col w-80'>
      <div className='flex flex-col'>
        {Object.keys(typeToColor).map((item, index) => ( 
          <button 
            key={index} 
            className={`
              ${typeToColor[item]} 
              ${item === "ALL" ? `mb-8 ${typeToColor[item]}` : "mt-2 mb-2"} 
              rounded-full 
              px-4 
              py-2`
            }
            style={{ backgroundColor: typeToColor[item] }}
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