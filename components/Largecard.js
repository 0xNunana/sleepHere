import Image from 'next/image'
import React from 'react'

const Largecard = () => {
  return (
      <div className='relative '>
        <Image alt="Lcard" className="rounded-xl" src="https://visitghana.com/wp-content/uploads/2019/05/4168_JamestownLightHouse1.jpg" height={10} width ={2000}/>
      </div>
  )
}

export default Largecard
