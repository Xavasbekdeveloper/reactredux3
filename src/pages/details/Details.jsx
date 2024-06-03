import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../context/slice/cartSlice";
import { like } from "../../context/slice/wishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoCart } from "react-icons/io5";

import "./details.scss";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  let dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);

  console.log(data);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details">
      <div className="container">
        <div className="details__item">
          <div className="details__left">
            <img src={data.images[0]} alt={data.title} />
          </div>
          <div className="details__right">
            <h1>{data.title}</h1>
            <p>{data.brand}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <div className="details__bnt">
              <button onClick={() => dispatch(add(data))}>
                add to cart
                {cartData.some((el) => el.id === data.id) ? (
                  <IoCart color="crimson" />
                ) : (
                  <IoCartOutline />
                )}
              </button>
              <button onClick={() => dispatch(like(data))}>
                {wishlistData.some((el) => el.id === data.id) ? (
                  <FaHeart color="crimson" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
