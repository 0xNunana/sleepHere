import React, { useState } from 'react'

import * as geolib from 'geolib'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Marker, Popup ,Map} from 'react-map-gl'

function Mapper({searchRes}) {
    const [selectedPin,setSelectedPin]=useState("");
    const coordinates = searchRes.map(({long,lat})=>({
        longitude:long,
          latitude:lat,
    }));


  const geo =geolib.getCenter(coordinates)

 const [viewport,setViewport]=useState({
  width:"100%",
  height:"100%",
  longitude:geo.longitude,
  latitude:geo.latitude,
  zoom:11,
 })

  return (
         <Map 
         mapStyle="mapbox://styles/0xnunana/cldspnum5004q01p52jh18e4v"
         mapboxAccessToken={process.env.map_key}
            {...viewport}
            onMove={(e)=>setViewport(e.viewport)}
             >
            {searchRes.map((results)=>(
            <div key={results.long}>
                 <Marker
                 longitude={results.long}
                 latitude={results.lat}
              
                    >
                        <p onClick={()=>setSelectedPin(results)} className='animate-bounce text-2xl cursor-pointer'>📌  </p>
                    
                     </Marker>
                     {selectedPin.long == results.long ? (
                      <div className="border rounded-full">
                      <Popup className="text-black text-semibold"
                      onClose={()=>setSelectedPin({})}
                      closeOnClick={false}
                      latitude={results.lat} 
                      longitude={results.long}>
                        {results.title}
                      </Popup></div>
                     ):(false)}
            </div>
        ))}
      </Map>
   
      
    

  )
}

export default Mapper
