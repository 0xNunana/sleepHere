import React from 'react'
import Image from 'next/image'

const Partner = ({img}) => {
  return (
    <div>
      <Image src={img} width={150} height={10} alt="partners"/>
    </div>
  )
}

export default Partner
