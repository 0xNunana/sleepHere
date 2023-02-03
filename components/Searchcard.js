import Image from 'next/image'
import React from 'react'

const Searchcard = ({img,title,description,price,long,lat, location}) => {
  return (
    <div>
      <div><Image src={img} width={300} height={20} alt="Search output"/></div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <p></p>
        <p>{location}</p>
      </div>
    </div>
  )
}

export default Searchcard
