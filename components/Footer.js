import React, { useState } from 'react'
import { Facebook, Instagram, Phone, Twitter } from 'react-feather'

const Footer = () => {
  const [phone,setPhone]=useState()
  
  return (
    <div className='bg-gray-300 flex justify-between px-3'>
      <div className='pt-5'>
        <h4 className='font-serif text-lg'>All Rights Reserved © Pesewa Labs Inc</h4>
      </div>
    <div className='text-center font-serif text-lg pt-5 pb-5 '> 
      <p>Sleep Here Company</p>
      <p>2023</p>
    </div>
      <div className='flex space-x-8 pt-5 pl-10'>
        <p><Phone/></p>
        <p><Twitter/></p>
        <p><Facebook/></p>
        <p><Instagram/></p>
      </div>
      
      

    </div>
  )
}

export default Footer
