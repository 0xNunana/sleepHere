import Image from 'next/image'
import React from 'react'

const Mediumcard = ({img,view}) => {
  return (
    <div className='hover:scale-110'>
      <div className='relative'>
        <Image src={img} height={10} width={250} alt="views" object-fit="contain"/>
      </div>
      <div className='text-center'>
        <p>{view}</p>
      </div>
    </div>
  )
}

export default Mediumcard
