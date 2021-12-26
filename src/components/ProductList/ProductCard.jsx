import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { cartContext } from "../../contexts/cartContext";

import { Image } from "antd";
import Rating from "@mui/material/Rating";

import "./ProductCard.css";
import { favoriteContext } from "../../contexts/favoriteContext";

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
  useEffect(() => {
    setCheckInCart(checkItemInCart(item.id));
  });

  const { addProductToFav, checkItemInFav } = useContext(favoriteContext);
  const [checkInFav, setCheckInFav] = useState(checkItemInFav(item.id));

  useEffect(() => {
    setCheckInFav(setCheckInFav(item.id));
  }, []);

  return (
    <div>
      <div className="cards">
        <div className="product-card">
          <Link to={`/shop/${item.id}`}>
            <Image src={item.image1} alt="" />
            <h4>{item.title}</h4>
          </Link>
          <Rating
            name="half-rating"
            defaultValue={4.5}
            precision={0.5}
            size="small"
          />
          <span>{"$" + item.price}</span>
          <div>
            <button
              style={{
                background: checkInCart ? "#93c4f5" : "black",
                color: "#fff",
              }}
              onClick={() => {
                addProductToCart(item);
                setCheckInCart(checkItemInCart(item.id));
              }}
            >
              Add to cart
            </button>
            <button
              style={{ background: checkInFav ? "#93c4f5" : "black", marginLeft: "15px"}}
              onClick={() => (
                addProductToFav(item), setCheckInFav(checkItemInFav(item.id))
              )}
            >
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
