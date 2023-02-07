import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Searchcard from '../components/Searchcard'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import Mapper from '../components/Mapper'

const search = ({searchRes}) => {
  const router = useRouter();
  const {location,startDate,endDate,guest}=router.query
  const formatstart =format(new Date(startDate),"dd MMM yyyy")
  const formatend =format(new Date(endDate),"dd MMM yyyy")




  return (
    <div>
      <Header placeholder={`${location} |${formatstart}|${formatend} | ${guest}`}/>
      <main >
        <div className='max-w-screen-lg mx-auto p-6 bg-slate-300 text-3xl rounded-b-lg'>
          
          Search Results for {location}
        </div>
        
        <div className='flex  m-3'> 
          <div className='flex-col'>
            {searchRes?.map(({img,title,description,price,long,lat, location,id})=>(
              <Searchcard key={id} img={img} title={title} description={description} 
              location={location} price={price} id={id}/>
            ))}
          </div>
          <div className='hidden xl:inline-flex xl:min-w-[500px]'>
            <Mapper searchRes={searchRes}/>
          </div>
        </div>

      </main>
      <Footer/>
    </div>
  )
}

export default search

export async function getServerSideProps(){
  const searchRes = await fetch("https://www.jsonkeeper.com/b/QEDC").then((res)=>res.json());
  return{
    props:{searchRes}
  }
}