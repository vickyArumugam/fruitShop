import React, { useState } from 'react'
import FruitsCard from './fruitsCard'


const Items = () => {
    const [fruits,setFruits]=useState(
        [
            {
              id: 1,
              image: '1',
              name: 'Green Grapes',
              price: 100,
              off:'1'
            },
            {
              id: 2,
              image: '2',
              name: 'Pomegranate',
              price: 200,
               off:'2'
            },
            {
              id: 3,
              image: '3',
              name: 'Black Grapes',
              price: 250,
               off:'4'
            },
            {
              id: 4,
              image: '4',
              name: 'Grape Fruit',
              price: 300,
               off:'7'
            },
            {
              id: 5,
              image: '5',
              name: 'Berry',
              price: 250,
               off:'8'
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
    <section className='w-8/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10 '>
        {
            fruits.map((fruit)=>{
                return <FruitsCard key={fruit.id} fruit={fruit}/>
            })
        }
    </section>
  )
}

export default Items
