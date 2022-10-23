import React from 'react'
import { Routes, Route } from "react-router-dom";
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import SingleProduct from './pages/singleProduct/SingleProduct';
import Store from './pages/store/Store';
// import { useSelector} from 'react-redux'


export const Main = () => {

  // const { user } = useSelector((state) => state.auth)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:productId" element={<SingleProduct/>} />
        <Route path="/store" element={<Store/>} />
      </Routes> 
    </div>
  )
}
