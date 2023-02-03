import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
const Banner = () => {
  return (
    <div className='relative'>
     <Carousel
        autoPlay 
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
            <div>
                <Image loading="lazy" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80" alt="banner 1" height={10} width={500}/>
            </div>
            <div><Image loading="lazy" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="banner 2" height={10} width={500}/></div>
            <div><Image loading="lazy" src="https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="banner 3" height={10} width={500}/></div>

        </Carousel>
         <div className="absolute top-1/2 w-full text-center">
          <p className='text-black font-bold
           text-5xl'>Look no further</p>
          <button className='rounded-full py-4 px-6 bg-green-300 text-white shadow-md hover:shadow-2xl '><h3>Check this out</h3></button>
        </div>


    </div>
  )
}

export default Banner
