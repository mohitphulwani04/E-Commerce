import './App.css';
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import React from 'react';
import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Success from './Pages/Success';


const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products/:category" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}>
          </Route>
          <Route path="/success" element={<Success />}>
          </Route>
          <Route path="/login" element={user ? <Navigate to="/login" /> : <Login />}/>
          <Route path="/register" element={user ? <Navigate to="/register" /> : <Register />}/>
        </Routes>
      </BrowserRouter> 
  );
}

export default App
