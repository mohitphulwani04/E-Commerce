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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Navigate to="/" /> : <Register />}
          </Route>
        </Routes>
      </BrowserRouter> 
  );
}

export default App
