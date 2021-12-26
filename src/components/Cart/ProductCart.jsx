import React, { useContext } from "react";
import { useEffect } from "react";

import { cartContext } from "../../contexts/cartContext";

import CartItem from "./CartItem";

import { List } from "antd";

import "./ProductCart.css";
import Header from "../Header/SecondHeader";

const ProductCart = () => {
    const { cart, getCart } = useContext(cartContext);
    useEffect(() => {
        getCart();
    }, []);

  return (
    <div className="cart-page">
      <Header />
      <div
        className="cart-banner"
        style={{
          background:
            "url(https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/cart-title-img.jpg) no-repeat center center",
          width: "100%",
          height: "350px",
          backgroundSize: "cover",
        }}
      >
        <h1>Cart</h1>
      </div>
      <div className="product-titles">
        <h3 className="product-name">Product</h3>
        <h3 className="product-price">Price</h3>
        <h3 className="product-quantity">Quantity</h3>
        <h3 className="product-total">Subtotal</h3>
      </div>

      <List
        itemLayout="vertical"
        size="large"
        dataSource={cart?.products}
        renderItem={(item) => <CartItem item={item} />}
      />

      <div className="cart-total">
        <h3>
          Cart total <span className="total-price">{cart?.totalPrice}$</span>
        </h3>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default ProductCart;
