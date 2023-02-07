const stripe = require("stripe")(process.env.Stripe_sk)

export default async (req,res)=>{
    const{Room,email}=req.body

    console.log(Room)
    console.log(email)

const transform = Room.map((item)=>({
    quantity:1,
    price_data:{
        currency:"USD",
        unit_amount: item.price *100,
        product_data:{
            name:item.title,
            images:[item.img]
        }
    }
}))
  const session = await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA", "AU","GH"]},
    line_items:transform,
    mode:"payment",
    success_url:`${process.env.HOST}/success`,
    cancel_url:`${process.env.HOST}/checkout`,
    metadata:{email,img:JSON.stringify(Room.map((item)=>(item.image)))
    },
    
    })

console.log("session created!",session.id)

res.status(200).json({id:session.id})



}