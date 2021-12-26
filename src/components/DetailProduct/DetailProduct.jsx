import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { productsContext } from "../../contexts/productsContext";

import { Image, Tabs } from "antd";
import { HeartOutlined } from "@ant-design/icons";

import Rating from "@mui/material/Rating";

import "./DetailProduct.css";
import Comments from "../Comments/Comments";
import Reviews from "../Reviews/Reviews";
import Header from "../Header/SecondHeader";

const DetailProduct = () => {

  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  console.log("product", product);


  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }



  return (
    <div>
      {product ? (
        <>
        <Header />
          <BreadCrumb />
          <div className="detail-product">
            <div className="product-gallery">
              <div className="col-image">
                <Image src={product.image2} />
                <Image src={product.image3} />
                <Image src={product.image4} />
                <Image src={product.image5} />
              </div>

              <div className="main-image">
                <Image src={product.image1} />
              </div>
            </div>

            <div className="product-info">
              <h2>{product.title}</h2>
              <Rating
                name="half-rating"
                defaultValue={4.5}
                precision={0.5}
                size="small"
              />
              <h4>{"$" + product.price}</h4>
              <p>{product.description}</p>
              <button
              >
                Add to cart
              </button>
              <h5
              >
                <HeartOutlined /> Add to Wishlist
              </h5>
              <span className="detail-desc">SKU: {product.sku}</span>
              <span className="detail-desc">Category: {product.category}</span>
              <span className="detail-desc">Tag: {product.tag}</span>

              <div className="tabs">
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="Additional information" key="1">
                    <p></p>
                    <span className="th">Dimensions</span>{" "}
                    <span className="td">{product.dimensions}</span>
                    <br></br>
                    <span className="th">Color</span>{" "}
                    <span className="td">{product.color}</span>
                  </TabPane>
                  <TabPane tab="Description" key="2">
                    <p>{product.description}</p>
                  </TabPane>
                  <TabPane tab="Reviews" key="3"></TabPane>
                  {/* <Reviews /> */}
                </Tabs>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailProduct;
