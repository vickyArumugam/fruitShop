import React, { useState } from 'react'
import FruitsCard from './fruitsCard'
import Divider from './Divider'

const SeasonSpecials = () => {
    const [fruits,setFruits]=useState(
        [
            {
                id: 7,
                image: "7",
                name: "Orange",
                price: 100,
                  off:'5'
              },
     
            {
                id: 1,
              image: '1',
              name: 'Green Grapes',
              price: 100,
              off:'1'
            },
            {
              id: 6,
              image: '6',
              name: 'lemon',
              price: 150,
               off:'3'
            }
          ]
    )
  return (
    <section className='w-10/12 mx-auto my-10'>
        <Divider title={"season specials"}/>
      
        <div className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10'>
        {
            fruits.map((fruit)=>{
                return <FruitsCard key={fruit.id} fruit={fruit}/>
            })
        }
    </div>
    </section>

  )
}

export default SeasonSpecials
