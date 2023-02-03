import Image from 'next/image'
import React from 'react'

const Smallcard = ({img,location,distance}) => {
  return (
    <div className='flex'>
      <Image src={img} height={10} width={100} alt="smallie"/>
      <div>
        {location}
        {distance}
      </div>
    </div>

  )
}

export default Smallcard
