import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";

import { Carousel } from "antd";
import {
  RightOutlined,
  ShoppingOutlined,
  DollarOutlined,
  ClockCircleOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="main__banner" style={{background: "url(https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/main-slider-img-1.jpg) no-repeat center center", width: "100%", height: "720px", backgroundSize: "cover"}}>
        <Header />
        <div className="main__text">
          <h1>Shop and fun</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing eliusmod
            <br></br>tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/shop">
            <button>
              View more{" "}
              <RightOutlined style={{ fontSize: "11px", paddingLeft: "5px" }} />
            </button>
          </Link>
        </div>
      </div>

      <div className="main__section">
        <div className="main__products">
          <h2>Products of the week</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco ommodo
            <br></br>consequat. Duis aute irure dolor in reprehenderit.
          </p>
          <div className="week__products">
            <div className="week__product">
              <span className="week__category">NEW</span>
              <img
                src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/product-img-4.jpg"
                alt=""
              />
              <h3>Wooden radio</h3>
              <span>$93.00</span>
            </div>
            <div className="week__product">
              <span className="week__category">SALE</span>
              <img
                src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/product-img-5.jpg"
                alt=""
              />
              <h3>Flash</h3>
              <span className="ex-price">£275.00</span> <span>£245.00</span>
            </div>
            <div className="week__product">
              <span className="week__category sold">SOLD</span>
              <img
                src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/product-img-6.jpg"
                alt=""
              />
              <h3>Wooden chair</h3>
              <span>£297.00</span>
            </div>
          </div>
        </div>

        <div className="parallax-section">
          <div className="parallax-1">
            <div>
              <h2>Upcoming collection</h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                ommodo
                <br></br>consequat. Duis aute irure dolor in reprehenderit.
              </p>
              <button>
                View more{" "}
                <RightOutlined
                  style={{ fontSize: "11px", paddingLeft: "5px" }}
                />
              </button>
            </div>
          </div>
        </div>

        <section className="main__content">
          <div className="right-part">
            <h2>Stylish chair</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              <br></br>ommodo consequat. Duis aute irure.
            </p>
            <button>
              Buy now{" "}
              <RightOutlined style={{ fontSize: "11px", paddingLeft: "5px" }} />
            </button>
          </div>
          <div className="left-part">
            <div className="square-background">
              <img
                id="green-chair"
                src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-1.png"
                alt=""
              />
              <img
                id="egg"
                src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-2.png"
                alt=""
              />
            </div>
          </div>

          <div className="second-left-part">
            <div className="square-background">
              <img
                id="black-lamp"
                src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-3.png"
                alt=""
              />
              <img
                id="mesh-chair"
                src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-4.png"
                alt=""
              />
            </div>
          </div>
          <div className="second-right-part">
            <h2>Contemporary lamps</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              <br></br>ommodo consequat. Duis aute irure.
            </p>
            <button>
              Buy now{" "}
              <RightOutlined style={{ fontSize: "11px", paddingLeft: "5px" }} />
            </button>
          </div>

          <div className="third-left-part">
            <h2>Stylish tea set</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              <br></br>ommodo consequat. Duis aute irure.
            </p>
            <button>
              Buy now{" "}
              <RightOutlined style={{ fontSize: "11px", paddingLeft: "5px" }} />
            </button>
          </div>
          <div className="third-right-part">
            <div className="square-background">
              <img
                id="teapot"
                src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-6.png"
                alt=""
              />
              <img
                id="cups"
                src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-5.png"
                alt=""
              />
            </div>
          </div>
        </section>

        <div className="express">
          <h2>Order now for an express delivery in 24h!</h2>
          <button>
            Order now{" "}
            <RightOutlined style={{ fontSize: "11px", paddingLeft: "5px" }} />
          </button>
        </div>

        <div className="features">
          <div className="feature">
            <div className="feature-title">
              <ShoppingOutlined style={{ fontSize: "45px" }} />
              <h3>Shop online</h3>
            </div>
            <p>
              Ut enim ad minim veniam, quis nostrud<br></br>exercitation ullamco
              ommodo<br></br>consequat.
            </p>
          </div>

          <div className="feature">
            <div className="feature-title">
              <DollarOutlined style={{ fontSize: "45px" }} />
              <h3>Free shopping</h3>
            </div>
            <p>
              Ut enim ad minim veniam, quis nostrud<br></br>exercitation ullamco
              ommodo<br></br>consequat.
            </p>
          </div>

          <div className="feature">
            <div className="feature-title">
              <ClockCircleOutlined style={{ fontSize: "45px" }} />
              <h3>Return policy</h3>
            </div>
            <p>
              Ut enim ad minim veniam, quis nostrud<br></br>exercitation ullamco
              ommodo<br></br>consequat.
            </p>
          </div>

          <div className="feature">
            <div className="feature-title">
              <CreditCardOutlined style={{ fontSize: "45px" }} />
              <h3>Payment methods</h3>
            </div>
            <p>
              Ut enim ad minim veniam, quis nostrud<br></br>exercitation ullamco
              ommodo<br></br>consequat.
            </p>
          </div>
        </div>

        <section className="post-images">
          <div>
            <img
              id="post"
              src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/main-home-blog-img-1.jpg"
              alt=""
            />
            <p>May 21, 2018 | by Nicole Burke</p>
            <h3>
              You should use natural materials<br></br>in your design
            </h3>
            <a href="">{"-"} Read More</a>
          </div>
          <div>
            <img
              id="post"
              src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/main-home-blog-img-2.jpg"
              alt=""
            />
            <p>May 21, 2018 | by Nicole Burke</p>
            <h3>
              Your office should have only<br></br>natural materials
            </h3>
            <a href="">{"-"} Read More</a>
          </div>
        </section>

        <div className="review-carousel">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
