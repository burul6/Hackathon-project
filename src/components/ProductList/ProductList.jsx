import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { productsContext } from "../../contexts/productsContext";

import Filters from "../Filters/Filters.jsx";
import ProductCard from "./ProductCard";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

import { Input, Pagination, Empty } from "antd";

import "./ProductList.css";

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 6
  );
  const [price, setPrice] = useState([1, 999]);
  const [showFilters, setShowFilters] = useState(false);
  const { getProducts, products, productsTotalCount } =
    useContext(productsContext);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, page, limit, price]);
  console.log(products);
  
  return (
    <>
      <BreadCrumb />
    <div className="container">
      <div className="products-search">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowFilters(!showFilters)}
          className="filter"
        >
          {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
        </div>

        <div className="sort">SORT BY</div>

        <Input.Search
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "20vw"}}
          placeholder="Search..."
          className="search-input"
        />
      </div>
      
      {showFilters ? (
        <Filters
          price={price}
          setPrice={setPrice}
        />
      ) : null}

      <div className="shop-list">
      <div className="products-list">
        {products.length > 0 ? (
          products.map((item) => <ProductCard item={item} />)
        ) : (
          <Empty style={{ marginBottom: "20px" }} />
        )}
      </div>

      <div className="sidebar">
      <div className="category">
        <h5>Categories</h5>
          <ul>
            <li>Decoration <span>(12)</span></li>
            <li>Ceiling <span>(4)</span></li>
            <li>Floor <span>(2)</span></li>
            <li>LED <span>(3)</span></li>
            <li>Furniture <span>(7)</span></li>
            <li>Grouped <span>(4)</span></li>
            <li>Lamps <span>(10)</span></li>
            <li>Black <span>(2)</span></li>
            <li>Decorative <span>(3)</span></li>
            <li>White <span>(2)</span></li>
            <li>Wooden <span>(4)</span></li>
            <li>Lights <span>(12)</span></li>
            <li>Modern <span>(6)</span></li>
            <li>Retro <span>(3)</span></li>
            <li>Wood <span>(3)</span></li>
          </ul>
        </div>

          <img id="shop-mini-image" src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/shop-sidebar-banner-300x206.jpg" alt="" />
          
          <div className="color">
          <h5>Color</h5>
          <ul>
            <li>Beige <span></span>(11)</li>
            <li>Black <span></span>(13)</li>
            <li>Blue <span></span>(6)</li>
            <li>Brown <span></span>(3)</li>
            <li>Gold <span></span>(17)</li>
            <li>Grey <span></span>(12)</li>
            <li>White <span></span>(18)</li>
          </ul>
          </div>
      </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          total={+productsTotalCount}
        />
      </div>
    </div>
    </>
  );
};

export default ProductsList;






























// import React, { useContext, useEffect, useState } from "react";

// import { productsContext } from "../../contexts/productsContext";

// import ProductCard from "./ProductCard";

// import { Empty } from "antd";

// import "./ProductList.css";
// import BreadCrumb from "../BreadCrumb/BreadCrumb";

// const ProductList = () => {
//   const { getProducts, products, productsTotalCount } =
//     useContext(productsContext);
//     useEffect(() => {
//       getProducts();
//     }, []);
//     console.log(products);

//   return (
//     <div>
//       <BreadCrumb />
//       <div className="products-list">
//         {products.length > 0 ? (
//           products.map((item) => <ProductCard item={item} />)
//         ) : (
//           <Empty style={{ margin: "20%" }} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
