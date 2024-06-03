import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IoSearch, IoHeart, IoCart } from "react-icons/io5";

import "./Header.scss";

const Header = () => {
  let wishlistCount = useSelector((state) => state.wishlist.value).length;
  let cartCount = useSelector((state) => state.cart.value).length;
  return (
    <header className="header">
      <div className="container header__container">
        <h1>Header</h1>
        <div className="header__search">
          <input type="text" placeholder="Search" />
          <button>
            <IoSearch />
          </button>
        </div>
        <div className="header__list">
          <NavLink className={"header__link"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={" header__extra__link"} to={"/wishlist"}>
            <IoHeart />
            <span>{wishlistCount}</span>
          </NavLink>
          <NavLink className={"header__extra__link"} to={"/cart"}>
            <IoCart />
            <span>{cartCount}</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
