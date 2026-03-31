
import { Suspense, useState } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import Ratting from './components/banner/Ratting';
import Buy from './components/buy/Buy';
import Navbar from './components/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner1 from './components/banner.1/Banner1';
import Banner2 from './components/banner.2/Banner2';
import Footer1 from './components/footer.1/Footer1';
import Footer2 from './components/footer2/Footer2';


// Fetch products from public/data.json
const fetchProduct = async () => {
  try {
    const res = await fetch("/data.json"); // public folder e thakbe
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return []; // fallback empty array
  }
};

function App() {
  const [coin, setCoin] = useState(0); // badge count
  const [buy, setBuy] = useState([]);   // track selected products

  const productPromise = fetchProduct();

  return (
    <>
      {/* Navbar with coin badge */}
      <Navbar coin={coin} />

      {/* Banner / Hero */}
      <Banner />

      {/* Ratings or other section */}
      <Ratting />

      {/* Product / Buy Section */}
      <Suspense fallback={<span className="loading loading-ring loading-xs"></span>}>
        <Buy
          productPromise={productPromise}
          setCoin={setCoin}
          coin={coin}
          buy={buy}
          setBuy={setBuy}
        />
      </Suspense>
        <ToastContainer />
        <Banner1 />
        <Banner2 />
        <Footer1 />
        <Footer2 />
    </>
  );
}

export default App;
