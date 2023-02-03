import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Searchcard from '../components/Searchcard'
import { format } from 'date-fns'
import { useRouter } from 'next/router'

const search = ({searchRes}) => {
  const router = useRouter();
  const {location,startDate,endDate,guest}=router.query
  const formatstart =format(new Date(startDate),"dd MMM yyyy")
  const formatend =format(new Date(endDate),"dd MMM yyyy")




  return (
    <div>
      <Header placeholder={`${location} |${formatstart}|${formatend} | ${guest}`}/>
      <main >
        <div className='max-w-screen-lg mx-auto bg-slate-300'>
          Search Results for {location}
        </div>
        
        <div className='flex'> 
          <div>search
            {searchRes?.map(({img,title,description,price,long,lat, location})=>(
              <Searchcard key={img} img={img} title={title} description={description}/>
            ))}
          </div>
          <div>map</div>
        </div>

      </main>
      <Footer/>
    </div>
  )
}

export default search

export async function getServerSideProps(){
  const searchRes = await fetch("https://www.jsonkeeper.com/b/3I45").then((res)=>res.json());
  return{
    props:{searchRes}
  }
}