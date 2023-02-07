import React from 'react'
import Header from '../components/Header'
import { useSession } from 'next-auth/react'
import { useDispatch,useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { removeRoom } from '../slices/roomslice'
import { selectRoom } from '../slices/roomslice'
import Image from 'next/image'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const stripePromise = loadStripe(process.env.stripe_pk)

const Checkout = ({id}) => {
  const router= useRouter();
  const Roominfo = useSelector(selectRoom);
  const dispatch = useDispatch();
  const {data:session}=useSession()
  

  const createCheckOut=async()=>{
const stripe = await stripePromise;
const checkoutsession=await axios.post("/api/stripeBackend",{
  Room:Roominfo,
  email: session.user.email

})
const result = await stripe.redirectToCheckout({
 
  sessionId:checkoutsession.data.id,
})
  }

       const unbooked =()=>{
    dispatch(removeRoom({id}))
  router.push("/search")
  }

 
  return (
    <div>
      <Header/>
      <main className='max-w-screen-lg mx-auto bg-slate-200 rounded-b-lg'>
        {session ? (<div>{Roominfo.map(({img,description,location,price,title})=>(
         <div className="flex">
          <div className="rounded-lg">
            <Image className=" p-5" src={img} width={300} height={10} alt="checkout"/>
          </div>
          
          <div >
            <div>
              <p>{title}</p>
              <p>{description}</p>
              <p>{location}</p>
            </div>
            <div>{price}</div>
          </div>
          </div>
        ))}
        
           <div className='flex mx-10 my-2 '>
           <button  onClick={createCheckOut}className='bg-green-300 rounded-lg shadow-lg flex-grow font-semibold' >Confirm </button>
          
          </div>
         <div className='flex mx-10 pb-10'>
         <button className='bg-red-200 rounded-lg shadow-lg flex-grow font-semibold'onClick={unbooked}>Cancel</button>
           </div>
        </div>)
        : (<h1 className='text-3xl font-serif p-5 '> Sign-In to view booking</h1>)}
        

      </main>
      
     </div>
  
)}

export default Checkout