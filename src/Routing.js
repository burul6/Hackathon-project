import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "./contexts/authContext";

import Auth from "./components/Auth/Auth";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
import EditProduct from "./components/EditProduct/EditProduct";
import ProductCart from "./components/Cart/ProductCart";
import Favorite from "./components/Favorite/Favorite";
import Comments from "./components/Comments/Comments";
import Reviews from "./components/Reviews/Reviews";
import Contacts from "./components/Contacts/Contacts";
import AdminPage from "./components/AdminPage/AdminPage";

const Routing = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/shop",
      element: <ProductList />,
      id: 2,
    },
    {
      link: "/shop/:id",
      element: <DetailProduct />,
      id: 3,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 4,
    },
    {
      link: "/cart",
      element: <ProductCart /> ,
      id: 5,
    },
    {
      link: "/favorite",
      element: <Favorite /> ,
      id: 6,
    },
    {
      link: "/comments",
      element: <Comments />,
      id: 7,
    },
    {
      link: "/reviews",
      element: <Reviews />,
      id: 8,
    },
    {
      link: "/contacts",
      element: <Contacts />,
      id: 9,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 10,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 11,
    },
  ];

  const ADMIN_ROUTES = [
    
  ];

  const { user } = useAuth;
  
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}

      {user ? ADMIN_ROUTES.map((item) => (
        <Route
          path={item.link}
          element={
            user.email === "burul.baktybekova05@gmail.com" ? (
              item.element
            ) : (
              <Navigate replace to="/*" />
            )
          }
        />
      )) : null}

    </Routes>
  );
};

export default Routing;
