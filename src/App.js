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
import CommentsContextProvider from "./contexts/commentsContext";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <CommentsContextProvider>

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
        </CommentsContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
