import React from 'react'
import Header from '../components/Header'

import Image from 'next/image'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'

const success = () => {
   
 
  return (
    <div>
      <Header/>
      <main className=' max-w-screen-lg mx-auto bg-slate-300'>
        <div className='flex'>
            <CheckBadgeIcon className='h-10 font-bold m-10 bg-green-300'/>
       <p className='pt-2 font-semibold text-xl my-10'>Accomodation Booked Successfully</p>
        </div>
       
       
      </main>
      <div className=' max-w-screen-lg mx-auto border-b-4 rounded-b-lg shadow-lg bg-green-300'>
         <p className='text-lg text-center font-serif'> Thank you for choosing Sleep Here</p>
      </div>
    </div>
  )
}

export default success
