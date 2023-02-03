import Image from 'next/image'
import React, { useState } from 'react'
import{MagnifyingGlassIcon} from '@heroicons/react/24/outline'

const Header = () => {
    const [searchinfo,setSearchinfo]=useState()
    console.log(searchinfo)
  return (
    <div className='bg-gray-400 flex space-x-5 mt-5
     justify-between pt-5 pb-2'>
      <div>
        <Image src="https://cdn.freelogodesign.org/files/ca66f9deb6f74204bdbed26fcc62699b/thumb/logo_200x200.png?v=0" width={90} height={100} className='rounded-xl m-2' />

      </div>
      <div className='border rounded-2xl flex'>
       <input type="text" value={searchinfo} onChange={(e)=>setSearchinfo(e.target.value)} placeholder='search now'
       />
       <MagnifyingGlassIcon className="h-5"/>
      </div>
      <div>
        menu
      </div>
    </div>
  )
}

export default Header
