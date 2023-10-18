import Link from 'next/link'
import React from 'react'

const Content = () => {

  const contentData = [
    {
      description: 'React is being developed by Meta (formerly facebook)',
      source: '',
      type: 'TECHNOLOGY'
    },
    {
      description: `The shortest war in history lasted 38 minutes! It was between 
      Britain and Zanzibar on August 27, 1896. It was over the ascension of the
      next Sultan in Zanzibar and resulted in a British victory.`,
      source: '',
      type: 'HISTORY'
    },
    {
      description: 'React is being developed by Meta (formerly facebook)',
      source: '',
      type: 'TECHNOLOGY'
    },
    {
      description: `The shortest war in history lasted 38 minutes! It was between 
      Britain and Zanzibar on August 27, 1896. It was over the ascension of the
      next Sultan in Zanzibar and resulted in a British victory.`,
      source: '',
      type: 'HISTORY'
    },
    {
      description: 'React is being developed by Meta (formerly facebook)',
      source: '',
      type: 'TECHNOLOGY'
    },
    {
      description: `The shortest war in history lasted 38 minutes! It was between 
      Britain and Zanzibar on August 27, 1896. It was over the ascension of the
      next Sultan in Zanzibar and resulted in a British victory.`,
      source: '',
      type: 'HISTORY'
    },
    {
      description: 'React is being developed by Meta (formerly facebook)',
      source: '',
      type: 'TECHNOLOGY'
    },
    {
      description: `The shortest war in history lasted 38 minutes! It was between 
      Britain and Zanzibar on August 27, 1896. It was over the ascension of the
      next Sultan in Zanzibar and resulted in a British victory.`,
      source: '',
      type: 'HISTORY'
    },
    {
      description: 'React is being developed by Meta (formerly facebook)',
      source: '',
      type: 'TECHNOLOGY'
    },
    {
      description: `The shortest war in history lasted 38 minutes! It was between 
      Britain and Zanzibar on August 27, 1896. It was over the ascension of the
      next Sultan in Zanzibar and resulted in a British victory.`,
      source: '',
      type: 'HISTORY'
    },
    {
      description: 'React is being developed by Meta (formerly facebook)',
      source: '',
      type: 'TECHNOLOGY'
    },
    {
      description: `The shortest war in history lasted 38 minutes! It was between 
      Britain and Zanzibar on August 27, 1896. It was over the ascension of the
      next Sultan in Zanzibar and resulted in a British victory.`,
      source: '',
      type: 'HISTORY'
    },
    {
      description: 'React is being developed by Meta (formerly facebook)',
      source: '',
      type: 'TECHNOLOGY'
    },
    {
      description: `The shortest war in history lasted 38 minutes! It was between 
      Britain and Zanzibar on August 27, 1896. It was over the ascension of the
      next Sultan in Zanzibar and resulted in a British victory.`,
      source: '',
      type: 'HISTORY'
    },
  ]

  return (
    <div className='flex flex-col w-full h-[700px] gap-y-4 overflow-y-auto'>
      {contentData.map((item, index) => (
        <div 
          key={index}
          className='
            flex flex-row 
            bg-[#3D3835]
            py-4
            px-6
            rounded-2xl
            justify-between
            gap-x-6
          '
        >
          <div className='flex flex-row gap-x-6 items-center'>
            <p className='text-xl'>
              {item.description} 
              {/* <Link href={item.source} className='inline-block ml-4 text-neutral-400'>
                <p className='text-lg'>(Source)</p>
              </Link> */}
            </p>
            <div className='bg-slate-700 p-2 rounded-xl'>
              <p className='text-sm font-bold'>
                {item.type}
              </p>
            </div>
          </div>
          <div className='flex flex-row gap-x-2 items-center font-bold'>
            <div className='bg-[#6E6560] p-2 rounded-xl'>
              <p>24</p>
            </div>
            <div className='bg-[#6E6560] p-2 rounded-xl'>
              <p>24</p>
            </div>
            <div className='bg-[#6E6560] p-2 rounded-xl'>
              <p>24</p>
            </div>
          </div>
        </div>
      ))}
        
    </div>
  )
}

export default Content