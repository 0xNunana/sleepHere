import { HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { addRoom, removeRoom } from '../slices/roomslice'

const Searchcard = ({img,title,description,price,long,lat, location,id}) => {
  const router =useRouter()
  const dispatch = useDispatch()

  const booked =()=>{
    const room ={id,img,title,description,price,location}

    dispatch(addRoom(room))
    router.push("/checkout")

  }
  
  return (
    <div onClick={booked}className='flex items-center space-x-2 p-3 hover:scale-105 '>
      <div>
        <Image className="rounded-3xl"src={img} width={300} height={20} alt="Search output"/></div>
      <div className='bg-gray-200 p-3 rounded-r-2xl'>
         <div className='flex justify-between'>
          <p>{location}</p>
           <p><button><HeartIcon className='h-6'/></button></p>
           </div>
        <p className='text-3xl font-semibold border-b-4 border-green-200 '>{title}</p>
       

        <p className='text-lg font-serif border-b-4 border-green-200 '>{description}</p>
       
       <p className='text-lg font-bold '>
        <span className='text-2xl'>GHS: </span>{price}</p>
      </div>
    </div>
  )
}

export default Searchcard
