import React, { useState } from 'react';

const Filters = () => {
  const [selectedItems, setSelectedItems] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedItems(index);
  };

  return (
    <div>
      <section className='my-10 py-3 w-3/5 md:w-4/6 mx-auto flex flex-col md:flex-row justify-around'>
        <button 
          className={`btnStyle ${selectedItems === 1 ? 'bg-green-400 text-white' : 'text-slate-500'}`}
          onClick={() => handleButtonClick(1)}
        >
          Latest
        </button>
        <button 
          className={`btnStyle ${selectedItems === 2 ? 'bg-green-400 text-white' : 'text-slate-500'}`}
          onClick={() => handleButtonClick(2)}
        >
          Best Seller
        </button>
        <button 
          className={`btnStyle ${selectedItems === 3 ? 'bg-green-400 text-white' : 'text-slate-500'}`}
          onClick={() => handleButtonClick(3)}
        >
          Special
        </button>
      </section>
    </div>
  );
};

export default Filters;