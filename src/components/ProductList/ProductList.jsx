import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { productsContext } from "../../contexts/productsContext";

import Filters from "../Filters/Filters.jsx";
import ProductCard from "./ProductCard";

import { Card, Input, Pagination, Empty } from "antd";

import "./ProductList.css";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 4
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
        >
          {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
        </div>
        <Input.Search
  
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "25vw"}}
          placeholder="Search..."
        />
      </div>
      
      {showFilters ? (
        <Filters
          price={price}
          setPrice={setPrice}
        />
      ) : null}

      <div className="products-list">
        {products.length > 0 ? (
          products.map((item) => <ProductCard item={item} />)
        ) : (
          <Empty style={{ marginBottom: "20px" }} />
        )}
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
