// import logo from './logo.svg';

import './App.css';
import CustomerRouter from './Routers/CustomerRouter';

// import Checkout from './customer/components/Checkout/checkout';
// import Cart from './customer/components/Cart/Cart';
import Footer from './customer/components/Footer/Footer';
// import Navigation from './customer/components/Navigation/Navigation';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
// import Product from './customer/components/Product/Product';
// import ProductCard from './customer/components/Product/ProductCard';
// import HomePage from './customer/pages/HomePage/HomePage';
// import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import {Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouter/>}>

        </Route>
      </Routes>
     
      <div>
       {/* <HomePage/> */}
       {/* <Product/> */}
       {/* <ProductDetails/> */}
       {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Order/> */}
      {/* <OrderDetails/> */}
        </div>
   {/* <Footer/> */}
    </div>
  );
}

export default App;
