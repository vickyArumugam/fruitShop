import React from 'react';
import apple from '../assets/1.jpeg';
import banana from '../assets/2.jpeg';
import orange from '../assets/3.jpeg';
import grapeFruit from '../assets/4.jpeg';
import berry from '../assets/5.jpeg';
import lemon from '../assets/6.jpeg';
import Orange from '../assets/7.jpeg';

const fruitImages = {
  '1': apple,
  '2': banana,
  '3': orange,
  '4': grapeFruit,
  '5': berry,
  '6': lemon,
  '7': Orange
};

const FruitsCard = ({ fruit }) => {
  const imagePath = fruitImages[fruit.image];

  return (
    <div className='rounded-2xl overflow-hidden shadow-lg trannform  group hover:scale-110 duration-100 relative md:w-full'>
      <img src={imagePath} alt={fruit.name}  className='w-full h-72 object-cover '/>
      <div className='flex flex-col items-center my-1  space-y-1'>
        <span className='font-body text-slate-500 block'>{fruit.name}</span>
        <span className='font-body text-slate-500 block'>₹{fruit.price}</span>
        <span className='font-body text-slate-500 block uppercase text-lime-400 group-hover:visible text-xs invisible'>Add to card</span>

      <span className='absolute top-3 right-3 bg-sky-500 text-white p-1 border-sky-500 rounded-lg text-sm'>{fruit.off}% off</span>

      </div>
    </div>
  );
};

export default FruitsCard;
