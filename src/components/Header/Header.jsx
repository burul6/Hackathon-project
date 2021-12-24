import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";

import { Badge } from "antd";
import {
  SearchOutlined,
  ShoppingOutlined,
  HeartOutlined,
} from "@ant-design/icons";

import "./Header.css";

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();

  return (
    <div className="header">
      <div className="header-logo">
        <img
          src="https://arredo.qodeinteractive.com/wp-content/themes/arredo/assets/img/logo_white.png"
          // src="https://arredo.qodeinteractive.com/wp-content/themes/arredo/assets/img/logo.png"
          alt=""
        />
      </div>
      <ul className="nav__menu">
        <Link to="/" className="nav__item">
          <li>Home</li>
        </Link>
        <Link to="/new" className="nav__item">
          <li>New</li>
        </Link>
        <Link to="/shop" className="nav__item">
          <li>Shop</li>
        </Link>
        <Link to="/contacts" className="nav__item">
          <li>Contacts</li>
        </Link>

        {email === "burul.baktybekova05@gmail.com" ? (
          <Link
            to="/admin"
            className={
              location.pathname === "/admin"
                ? "nav__item-active"
                : "nav__item"
            }
          >
            ADMIN
          </Link>
        ) : null}

        <div className="nav__icons">
          <Link to="/search">
            <SearchOutlined style={{ color: "#fff", padding:  "0 15px" }} />
          </Link>
          <Link to="/cart">
            <Badge count={5} size={"small"}>
              <ShoppingOutlined style={{ color: "#fff", paddingLeft:  "15px", fontSize: "25px"}} />
            </Badge>
          </Link>
          <Link to="/favorite">
            <HeartOutlined style={{ color: "#fff", paddingLeft:  "30px" }} />
          </Link>
        </div>

        {email ? (
            <Link to="/auth">
              <button className="sign-btn" onClick={handleLogout}>
                Logout
              </button>
            </Link>
          ) : null}

          {email ? null : (
            <Link to="/auth">
              <button className="sign-btn">Login</button>
            </Link>
          )}

      </ul>
    </div>
  );
};

export default Header;
