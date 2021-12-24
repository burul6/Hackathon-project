import React from 'react';
import { Link } from "react-router-dom";

import { Image } from "antd";
import Rating from "@mui/material/Rating";

import "./ProductCard.css";

const ProductCard = ({item}) => {
    
    return (
        <div>
        <div className='cards'>
            <div className='product-card'>
            <Link to={`/shop/${item.id}`}><Image src={item.image1} alt="" />
                <h4>{item.title}</h4></Link>
                <Rating
                name="half-rating"
                defaultValue={4.5}
                precision={0.5}
                size="small"
              />
                <span>{"$" + item.price}</span>
                <button>Add to cart</button>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;