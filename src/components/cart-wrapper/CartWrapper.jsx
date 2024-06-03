import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseAmount, increaseAmount, remove } from "../../context/slice/cartSlice";
import { FaHeart, FaRegHeart, FaMinus, FaPlus } from "react-icons/fa";
import { like } from "../../context/slice/wishlistSlice";

import "./cart.scss";

const CartWrapper = ({ data }) => {
  let dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);

  const calculateTotalPrice = (cartItems) => {
    let totalPrice = 0;
    cartItems.forEach((product) => {
      totalPrice += product.price * product.amount;
    });
    return totalPrice;
  };

  const totalPrice = calculateTotalPrice(data);

  let cartItems = data?.map((product) => (
    <div className="cart__item" key={product.id}>
      <div className="cart__item__left">
        <img src={product.images[0]} alt={product.title} />
        <h3>{product.title}</h3>
      </div>
      <div className="cart__item__price">
        <div>
          <button onClick={() => dispatch(decreaseAmount(product))}>
            <FaMinus />
          </button>
          <span>{product.amount}</span>
          <button
            disabled={product.stock <= product.amount}
            onClick={() => dispatch(increaseAmount(product))}
          >
            <FaPlus />
          </button>
        </div>
        <p>{product.price * product.amount} USD</p>
      </div>
      <div className="cart__item__right">
        <button onClick={() => dispatch(like(product))}>
          {wishlistData.some((el) => el.id === product.id) ? (
            <FaHeart color="crimson" />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button onClick={()=>dispatch(remove(product))} className="cart__item__remove-btn">Remove</button>
      </div>
    </div>
  ));

  return (
    <div className="cart">
      <div className="container cart__container">
        {/* left */}
        <div className="cart__left">{cartItems}</div>
        {/* right */}
        <div className="cart__right">
          {/* top */}
          <div className="cart__right__top">
            <h3>Have Coupon?</h3>
            <form action="" name="">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply</button>
            </form>
          </div>
          {/* bottom */}
          <div className="cart__right__bottom">
            <div className="cart__right__price">
              <div className="cart__right__price-box">
                <p>Total price:</p>
                <span>${totalPrice}</span>
              </div>
              <div>
                <p>DisCount:</p>
                <span className="cart__right__discount">-$120</span>
              </div>
              <div>
                <p>TAX:</p>
                <span>$14</span>
              </div>
            </div>
            <div className="cart__right__box">
              <div>
                <p>Total:</p>
                <span>$000</span>
              </div>
              <button>Make Purchase</button>
              <button>Back to shop</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWrapper;
