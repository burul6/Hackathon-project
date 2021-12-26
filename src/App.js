import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";

import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Routing from "./Routing";

import "antd/dist/antd.css";
import "./App.css";
import FavContextProvider from "./contexts/favoriteContext";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <FavContextProvider>

        <CartContextProvider>
          <ProductsContextProvider>
            <BrowserRouter>
              {/* <BreadCrumb /> */}
              {/* <Header /> */}
              <Routing />
              <Footer />
            </BrowserRouter>
          </ProductsContextProvider>
        </CartContextProvider>
        </FavContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
