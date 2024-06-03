import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoCart } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/slice/wishlistSlice";
import { add } from "../../context/slice/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);
  return (
    <div className="products__card">
      <Link to={`/product/${product.id}`}>
        <div className="products__card__img">
          <img src={product.images[0]} alt={product.title} />
        </div>
      </Link>
      <div className="products__card__info">
        <h3 className="products__card__title">{product.title}</h3>
        <p>$ {product.price}</p>
        <p>stock: {product.stock}</p>
        <div className="products__card__btns">
          <button onClick={() => dispatch(add(product))}>
            add to cart
            {cartData.some((el) => el.id === product.id) ? (
              <IoCart color="crimson" />
            ) : (
              <IoCartOutline />
            )}
          </button>
          <button onClick={() => dispatch(like(product))}>
            {wishlistData.some((el) => el.id === product.id) ? (
              <FaHeart color="crimson" />
            ) : (
              <FaRegHeart />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
