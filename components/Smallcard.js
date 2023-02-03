import Image from 'next/image'
import React from 'react'

const Smallcard = ({img,location,distance}) => {
  return (
    <div className='flex items-center hover:scale-110'>
      <div className='pb-2'> 
        <Image className='rounded-md' src={img} height={10} width={120} alt="smallie"/>
        </div>
      <div className='pl-2 '>
        <p>{location}</p>
        <p>{distance}</p>
      </div>
    </div>

  )
}

export default Smallcard
