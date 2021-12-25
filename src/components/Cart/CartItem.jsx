import React, { useContext } from 'react';

import { cartContext } from '../../contexts/cartContext';

import { InputNumber, List, Button } from "antd";
import { CloseOutlined, RightOutlined, LeftOutlined } from "@ant-design/icons";

import "./CartItem.css";

const CartItem = ({item}) => {
    const {deleteFromCart, changeProductCount} = useContext(cartContext);
    return (
        <div className='cart'>
            <div key={item.id} className='cart-list'>
            <CloseOutlined onClick={() => deleteFromCart(item.item.id)} style={{ color: "#939393" }} />
                <img
                  style={{width:"80px", height:"100px"}}
                  width={272}
                  alt="image"
                  src={item.item.image1}
                />
            <h5>{item.item.title}</h5>
             <span>{"$" + item.item.price}</span>
             <div className='quantity'>
             <Button
                  onClick={() =>
                    changeProductCount(item.count - 1, item.item.id)
                  }
                >
                  <LeftOutlined style={{ fontSize: "11px" }} />
                </Button>
                <InputNumber value={item.count} disabled />
                <Button
                  onClick={() =>
                    changeProductCount(item.count + 1, item.item.id)
                  }
                >
                  <RightOutlined style={{ fontSize: "11px" }} />
                </Button>
             </div>
                  <span className='product-subprice'>{"$" + item.subPrice}</span>
            </div>
        </div>
    );
};

export default CartItem;