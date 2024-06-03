import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Wishlist from "./pages/wishlist";
import Header from "./components/header/Header";
import Cart from "./pages/cart";
import Details from "./pages/details/Details";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
