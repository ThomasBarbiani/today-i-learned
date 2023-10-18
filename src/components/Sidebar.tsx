import React from 'react'

const Sidebar = () => {

  const sidebarData = [
    {
      label: 'TECHNOLOGY',
      color: 'slate-500'
    },
    {
      label: 'SCIENCE',
      color: 'slate-500'
    },
    {
      label: 'FINANCE',
      color: 'slate-500'
    },
    {
      label: 'SOCIETY',
      color: 'slate-500'
    },
    {
      label: 'ENTERTAINMENT',
      color: 'slate-500'
    },
    {
      label: 'HEALTH',
      color: 'slate-500'
    },
    {
      label: 'HISTORY',
      color: 'slate-500'
    },
    {
      label: 'NEWS',
      color: 'slate-500'
    },
  ]

  return (
    <div className='flex flex-col w-80 gap-y-8'>
      <button className='bg-slate-500 rounded-full py-2 px-4'>
        <p className='text-lg font-bold'>
          ALL
        </p>
      </button>
      <div className='flex flex-col gap-y-4'>
        {sidebarData.map((item, index) => (
          <button key={index} className='bg-slate-500 rounded-full py-2 px-4'>
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