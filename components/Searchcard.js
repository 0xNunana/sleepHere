import { HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const Searchcard = ({img,title,description,price,long,lat, location}) => {
  return (
    <div className='flex items-center space-x-2 p-3 hover:scale-105'>
      <div>
        <Image className="rounded-3xl"src={img} width={300} height={20} alt="Search output"/></div>
      <div className='bg-gray-200 p-3 rounded-r-2xl'>
         <div className='flex justify-between'>
          <p>{location}</p>
           <p><button><HeartIcon className='h-6'/></button></p>
           </div>
        <p className='text-3xl font-semibold border-b-4 border-green-200 '>{title}</p>
       

        <p className='text-lg font-serif'>{description}</p>
        <p></p>
       
      </div>
    </div>
  )
}

export default Searchcard
