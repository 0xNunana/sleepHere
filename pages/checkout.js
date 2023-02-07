import React from 'react'
import Header from '../components/Header'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { removeRoom } from '../slices/roomslice'

const checkout = ({id}) => {
  const router= useRouter()
  const dispatch = useDispatch()
       const unbooked =()=>{
    dispatch(removeRoom({id}))
  router.push("/search")
  }

  const {data:session}=useSession()
  return (
    <div>
      <Header/>
      <main className='max-w-screen-lg mx-auto bg-slate-200 rounded-b-lg'>
        {session ? (<div >
          <div>
          image
        </div>
        <div className='flex'>
          <div className='flex-grow'>
            description area
          </div>
          <div className='flex-grow'>
            total price
          </div>
        </div>
        <div className='flex mx-10 my-2 '>
          <button className='bg-green-300 rounded-lg shadow-lg flex-grow' >Confirm</button>
          
        </div>
        <div className='flex mx-10 pb-10'>
          <button className='bg-red-200 rounded-lg shadow-lg flex-grow'onClick={unbooked}>Cancel</button>
     
  
        </div>
        
        </div>
          ):  (<h1 className='text-3xl font-serif p-5 '> Sign-In to view booking</h1>)}
        

      </main>
      
    </div>
  )
}

export default checkout