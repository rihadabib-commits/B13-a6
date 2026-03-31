
import React from 'react';

const Carts = ({ buy, setBuy }) => {

  //  Remove item
  const handleRemove = (item) => {
    const filtered = buy.filter(p => p.id !== item.id);
    setBuy(filtered);
  };

  // Total auto calculate
  const total = buy.reduce((sum, item) => sum + item.price, 0);

  //  Clear all
  const handleCheckout = () => {
    setBuy([]);
  };

  return (
    <div className="space-y-6">

      {/* Items */}
      <div className='space-y-4'>
        {
          buy.map((item) => (
            <div key={item.id} className='flex items-center justify-between p-6 border rounded-2xl'>

              <div className='flex items-center gap-4'>
                <h2 className="text-2xl font-bold mt-2 flex items-center gap-2">
              <span className="text-3xl">{item.icon}</span>
              {item.name}
            </h2>
                <div>
                  <h2 className='font-semibold text-lg'>{item.name}</h2>
                  <p>${item.price}</p>
                </div>
              </div>

              <button
                onClick={() => handleRemove(item)}
                className='text-red-500 font-bold'
              >
                Remove
              </button>

            </div>
          ))
        }
      </div>

      {/* Total */}
      <div className='flex justify-between'>
        <p>Total:</p>
        <h2 className='font-bold text-xl'>${total}</h2>
      </div>

      {/* Checkout */}
      <button
        onClick={handleCheckout}
        className='w-full py-4  rounded-full bg-linear-to-r from-blue-600 to-purple-500 text-white'
      >
        Proceed To Checkout
      </button>

    </div>
  );
};

export default Carts;