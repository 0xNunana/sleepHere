import Image from 'next/image'
import React, { useState } from 'react'
import{GlobeAltIcon, MagnifyingGlassIcon, UserCircleIcon} from '@heroicons/react/24/outline'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';
import { useSession,signIn,signOut } from 'next-auth/react';

const Header = ({placeholder}) => {
    const [searchinfo,setSearchinfo]=useState()
    const [startDate,setStartDate]=useState(new Date())
    const [endDate,setEndDate]=useState(new Date())
     const [guest, setGuest]= useState(1);
    const router = useRouter();


    const reset =()=>{
      setSearchinfo("")
    }
    const {data:session}=useSession();
    const search=()=>{router.push({
      pathname:"/search",
      query:{
        location:searchinfo,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        guest,
      }
    }
    )}

const ranger={ 
  startDate:startDate,
  endDate:endDate,
  key:"selection",
}

    const change =(ranges)=>{
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate)
    }
  return (
    <div className=' grid grid-cols-3 items-center flex-grow s mt-5 space-x-4  bg-gradient-to-b from-gray-50 to-gray-200  z-20
     '>
      <div className='flex-grow'>
        <Image onClick={()=>router.push("/")}src="https://cdn.freelogodesign.org/files/ca66f9deb6f74204bdbed26fcc62699b/thumb/logo_200x200.png?v=0" width={90} height={100} className='rounded-xl m-2 hover:scale-110 pb-2' />

      </div>
      <div className='hidden sm:flex items-center cursor-pointer flex-grow'>
       <input className='flex-grow outline-none flex-shrink rounded-md hover:scale-110' type="text" value={searchinfo} onChange={(e)=>setSearchinfo(e.target.value)} placeholder={placeholder || "Search now"}
       />
       <MagnifyingGlassIcon className="h-5"/>
      </div>
      <div className='flex space-x-4 ml-4 pl-10'>
        <GlobeAltIcon className='h-6 hover:scale-110'/>
        <div className='hover:scale-110'>Become a host</div>
        <div className='flex text-center'>
          <UserCircleIcon className='h-6'/>
          <h4 onClick ={!session ? signIn : signOut} className="hover:scale-110 cursor-pointer">
            {session ? (`Welcome,${session.user.name}`):"SignIn" }</h4></div>
        <div  >🇬🇭 </div>
      </div>
      {searchinfo && (<div className='mx-auto'>
        <DateRangePicker ranges={[ranger]} rangeColors={['#92FB98']} minDate={new Date()} onChange={change}/>
        <div className='flex'>
          <section className='flex-grow pt-2'>Guest: 
          <input onChange={(e)=>setGuest(e.target.value)} value={guest} min={1} type="number"/>
          </section>
          <section className='flex-col flex-grow space-x-4 pt-2 '>
            <button onClick={reset} className='bg-red-400 rounded-md'>Cancel</button>
            <button onClick={search}className='bg-green-400 rounded-md'>Search</button>
          </section>
        </div>
      </div>)}

    </div>
  )
}

export default Header
