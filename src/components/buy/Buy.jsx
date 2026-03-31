
import { use, useState } from 'react';
import Product from '../product/Product';
import Carts from '../carts/Carts';

const Buy = ({ productPromise, setCoin, coin }) => {
  // Use the React promise feature (React 18+)
  const product = use(productPromise);

  // Cart/Product toggle
  const [cartType, setCartType] = useState("product");

  // Track selected items for coin in Cart button (optional)
  const [selectedProducts, setSelectedProducts] = useState([]);

   const [buy, setBuy] = useState([])

  const handleCartUpdate = (item, isSelected) => {
    if (isSelected) {
      setSelectedProducts([...selectedProducts, item]);
      setCoin(Number(coin) + Number(item.price));
    } else {
      const newSelection = selectedProducts.filter(p => p.id !== item.id);
      setSelectedProducts(newSelection);
      setCoin(Number(coin) - Number(item.price));
    }
  };

  return (
    <div className="container mx-auto pb-10">
      <div className="flex flex-col justify-center items-center text-center gap-4 pt-[120px] pb-[40px]">
        <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
        <p className="max-w-md opacity-45">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setCartType("product")}
            className={`btn p-5 rounded-full ${
              cartType === "product" ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white" : ""
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setCartType("cart")}
            className={`btn p-5 rounded-full ${
              cartType === "cart" ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white" : ""
            }`}
          >
            Cart
            ({buy.length})
          </button>
        </div>

        <div className="mt-4">
          {cartType === "product" ? null : (
            <h2 className="text-2xl font-bold">Your Cart ({buy.length}/10)</h2>
          )}
        </div>
      </div>

      {/* Render Product or Cart based on toggle */}
      {cartType === "product" ? (
        <Product product={product} setCoin={setCoin} coin={coin} handleCartUpdate={handleCartUpdate} setBuy={setBuy} />
      ) : (
        <Carts selectedProducts={selectedProducts} setCoin={setCoin} buy={buy} setBuy={setBuy} coin={coin}/>
      )}
    </div>
  );
};

export default Buy;