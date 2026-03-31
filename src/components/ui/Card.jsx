

// import React, { useState } from 'react';

// const Card = ({ product = [], setCoin, coin, setBuy, buy,  }) => {
//   const [selectedProductIds, setSelectedProductIds] = useState([]);

 


//   const handleBuyClick = (item) => {
//   if (selectedProductIds.includes(item.id)) {
//     const newSelected = selectedProductIds.filter(id => id !== item.id);
//     setSelectedProductIds(newSelected);
//     setCoin(newSelected.length);

//     // remove from buy
//     setBuy(prev => prev.filter(p => p.id !== item.id));

//   } else {
//     const newSelected = [...selectedProductIds, item.id];
//     setSelectedProductIds(newSelected);
//     setCoin(newSelected.length);

//     // add only clicked item
//     setBuy(prev => [...prev, item]);
//   }
// };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {product.length > 0 ? (
//         product.map((item) => (
//           <div key={item.id} className="card bg-white shadow rounded-lg p-6 flex flex-col justify-between hover:shadow-xl ">
//             <span className="badge badge-sm bg-yellow-500 text-white">{item.tag}</span>
//             <h2 className="text-2xl font-bold mt-2">{item.name}</h2>
//             <p className="text-sm text-gray-600">{item.description}</p>
//             <p className="text-lg font-semibold mt-1">${item.price} / <span className="opacity-50">{item.period}</span></p>
//             <ul className="mt-2 text-sm text-gray-700">
//               {item.features.map((f, i) => <li key={i}>✔ {f}</li>)}
//             </ul>
//             <button
//               onClick={() => handleBuyClick(item)}
//               className={`mt-4 btn px-6 py-2 rounded-full text-white transition-all 
//                 ${selectedProductIds.includes(item.id) ? 'bg-green-600 hover:bg-green-700' : 'bg-linear-to-r from-blue-600 to-purple-500'}`}
//             >
//               {selectedProductIds.includes(item.id) ? "Cart" : "Buy Now"}
//             </button>
//           </div>
//         ))
//       ) : (
//         <p className="text-center text-gray-500 col-span-full">No products available</p>
//       )}
//     </div>
//   );
// };

// export default Card;


// import React, { useState } from 'react';

// const Card = ({ product = [], setCoin, coin, setBuy, buy }) => {
//   const [selectedProductIds, setSelectedProductIds] = useState([]);

//   const handleBuyClick = (item) => {
//     if (selectedProductIds.includes(item.id)) {
//       const newSelected = selectedProductIds.filter(id => id !== item.id);
//       setSelectedProductIds(newSelected);
//       setCoin(newSelected.length);

//       setBuy(prev => prev.filter(p => p.id !== item.id));
//     } else {
//       const newSelected = [...selectedProductIds, item.id];
//       setSelectedProductIds(newSelected);
//       setCoin(newSelected.length);

//       setBuy(prev => [...prev, item]);

//        toast(`${item.name} added to cart`, {
//         position: "top-center",
        
//       });
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {product.length > 0 ? (
//         product.map((item) => (
//           <div key={item.id} className="card bg-white shadow rounded-lg p-6 flex flex-col justify-between hover:shadow-xl">
//             <div className='text-right flex justify-end'>
//             <span className="badge badge-sm bg-yellow-500 text-white  text-right">
//               {item.tag}
//             </span>
//             </div>

//             {/* ✅ ICON + NAME */}
//             <h2 className="text-2xl font-bold mt-2 flex items-center gap-2">
//               <span className="text-3xl">{item.icon}</span>
//               {item.name}
//             </h2>

//             <p className="text-sm text-gray-600">{item.description}</p>

//             <p className="text-lg font-semibold mt-1">
//               ${item.price} / 
//               <span className="opacity-50"> {item.period}</span>
//             </p>

//             <ul className="mt-2 text-sm text-gray-700">
//               {item.features.map((f, i) => (
//                 <li key={i}>✔ {f}</li>
//               ))}
//             </ul>

//             <button
//               onClick={() => handleBuyClick(item)}
//               className={`mt-4 btn px-6 py-2 rounded-full text-white transition-all 
//                 ${selectedProductIds.includes(item.id) 
//                   ? 'bg-green-600 hover:bg-green-700' 
//                   : 'bg-linear-to-r from-blue-600 to-purple-500'
//                 }`}
//             >
//               {selectedProductIds.includes(item.id) ? "Cart" : "Buy Now"}
//             </button>

//           </div>
//         ))
//       ) : (
//         <p className="text-center text-gray-500 col-span-full">
//           No products available
//         </p>
//       )}
//     </div>
//   );
// };

// export default Card;




import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Card = ({ product = [], setCoin, coin, setBuy, buy }) => {
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const handleBuyClick = (item) => {
    if (selectedProductIds.includes(item.id)) {
      const newSelected = selectedProductIds.filter(id => id !== item.id);
      setSelectedProductIds(newSelected);
      setCoin(newSelected.length);

      setBuy(prev => prev.filter(p => p.id !== item.id));

      // ❌ remove toast
      toast.error(`${item.name} removed from cart`, {
        position: "top-right",
        autoClose: 1500,
      });

    } else {
      const newSelected = [...selectedProductIds, item.id];
      setSelectedProductIds(newSelected);
      setCoin(newSelected.length);

      setBuy(prev => [...prev, item]);

      // ✅ add toast
      toast.success(`${item.name} added to cart`, {
        position: "top-right",
        autoClose: 1500,
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {product.length > 0 ? (
        product.map((item) => (
          <div
            key={item.id}
            className="card bg-white shadow rounded-lg p-6 flex flex-col justify-between hover:shadow-xl"
          >

            {/* tag */}
            <div className="flex justify-end">
              <span className="badge badge-sm bg-yellow-500 text-white">
                {item.tag}
              </span>
            </div>

            {/* icon + name */}
            <h2 className="text-2xl font-bold mt-2 flex items-center gap-2">
              <span className="text-3xl">{item.icon}</span>
              {item.name}
            </h2>

            {/* description */}
            <p className="text-sm text-gray-600">{item.description}</p>

            {/* price */}
            <p className="text-lg font-semibold mt-1">
              ${item.price} /
              <span className="opacity-50"> {item.period}</span>
            </p>

            {/* ✅ green tick features */}
            <ul className="mt-2 text-sm">
              {item.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✔</span>
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>

            {/* button */}
            <button
              onClick={() => handleBuyClick(item)}
              className={`mt-4 btn px-6 py-2 rounded-full text-white transition-all 
                ${
                  selectedProductIds.includes(item.id)
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gradient-to-r from-blue-600 to-purple-500'
                }`}
            >
              {selectedProductIds.includes(item.id) ? "Cart" : "Buy Now"}
            </button>

          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No products available
        </p>
      )}
    </div>
  );
};

export default Card;