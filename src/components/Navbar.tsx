'use client'

import React, { useState } from 'react'

type ButtonType = boolean;

const Navbar = () => {

  const [showForm, setShowForm] = useState<ButtonType>(false);  

  return (
    <div className='flex flex-col gap-y-12'>
      <div className='flex w-full justify-between'>
        <div className='flex flex-row items-center gap-x-4'>
          <div className='rounded-full h-16 w-16 bg-slate-500'></div>
          <h1 className='text-4xl font-bold'>
            TODAY I LEARNED
          </h1>
        </div>
        <button className='bg-slate-500 rounded-full py-4 px-8' onClick={() => setShowForm((item) => !item)}>
          <p className='text-2xl font-bold'>
            SHARE A FACT
          </p>
        </button>
      </div>
      {showForm && (
        <div className='flex w-full justify-between'>
          <div className='flex flex-row items-center gap-x-4'>
            <div className='rounded-full h-16 w-16 bg-slate-500'></div>
            <h1 className='text-4xl font-bold'>
              TODAY I LEARNED
            </h1>
          </div>
          <button className='bg-slate-500 rounded-full py-4 px-8'>
            <p className='text-2xl font-bold'>
              SHARE A FACT
            </p>
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar