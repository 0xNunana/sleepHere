/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["images.unsplash.com",
  "cdn.freelogodesign.org","images.pexels.com","www.jsonkeeper.com",
    "d2rvx5os0838iz.cloudfront.net","links.papareact.com","lid.zoocdn.com",
    "apartments.com.gh","ghanaproperty.org","images.yen.com.gh","meqasa.com",
    "www.ghana-estate.com",
    "lakesideestate.com","encrypted-tbn0.gstatic.com","q-xx.bstatic.com","visitghana.com",
    "images.ghanapropertycentre.com","imgcy.trivago.com","upload.wikimedia.org",
    "thumbs.dreamstime.com","static.tacdn.com","i0.wp.com","twellium.com","floorspacerealty.com","img.freepik.com","www.theechohouse.com","cdn.modernghana.com","www.myjoyonline.com","media-cdn.tripadvisor.com","citinewsroom.com","res.cloudinary.com"
  ]
  },
  env:{
    map_key:"pk.eyJ1IjoiMHhudW5hbmEiLCJhIjoiY2xkc29sZDRjMHVxeTN4cXNvMmJuamd4aSJ9.NLo83bhzfhqz1ue9q3Nc5w",
    stripe_pk: process.env.Stripe_pk
  },
  reactStrictMode: true,
}

module.exports = nextConfig
