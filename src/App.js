//import logo from './logo.svg';
import './App.css';
import Filter from './component/Filter';
import Navbar from './component/Navbar';
import Product from './component/Product';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './component/ProductDetails';
import SearchItem from './component/SearchItem';
import Cart from './component/Cart';
import { useState } from 'react';
import { items } from './component/Data';

function App() {
  const [data , setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
   <>
 <Navbar cart = {cart} />
 <Filter setData={setData} />
 <Routes>
    <Route path='/' element={<Product cart={cart} setCart={setCart} items={data}  />} />
    <Route path='/search/:term' element={<SearchItem cart={cart} setCart={setCart} />}  />
    <Route path='/product/:id' element={<>
               <ProductDetails cart={cart} setCart={setCart} />
    </>}  />
    <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />

 </Routes>
 
 
  </>
  );
}

export default App;
