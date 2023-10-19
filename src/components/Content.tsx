import Link from 'next/link'
import React from 'react'
import { contentData } from '@/data/contentData'
import {typeData} from '@/utils/typeData'

interface ContentItem {
  color: string; 
  description: string; 
  source: string; 
  type: string;
}

interface TypeItem {
  label: string;
  color: string;
}

const typeToColor: { [key: string]: string } = {};

typeData.forEach((typeObj: TypeItem) => {
  typeToColor[typeObj.label] = typeObj.color;
});

console.log(typeToColor)

const Content = () => {

  const updatedContentData: ContentItem[] = contentData.map((item) => ({
    ...item,
    color: typeToColor[item.type] || '',
  }));

  return (
    <div className='flex flex-col w-full h-[700px] gap-y-4 overflow-y-auto'>
      {updatedContentData.map((item, index) => (
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
            </p>
            {/* <Link href={item.source} className='inline-block ml-4 text-neutral-400'>
              <p className='text-lg'>(Source)</p>
            </Link> */}
            <div className={`${item.color} p-2 rounded-xl`}>
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