import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";
import { cartContext } from "../../contexts/cartContext";


import { Badge, Menu, Dropdown } from "antd";
import {
  ShoppingOutlined,
  HeartOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import "./Header.css";

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const { getCart, cartLenght } = useContext(cartContext);
  useEffect(() => {
    getCart()
  }, []);

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/new">New</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/shop">Shop</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/contacts">Contacts</Link>
      </Menu.Item>
    </Menu>
  );

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
              location.pathname === "/admin" ? "nav__item-active" : "nav__item"
            }
          >
            ADMIN
          </Link>
        ) : null}

        <div className="nav__icons">
          <Link to="/cart">
            <Badge count={+cartLenght} size={"small"}>
              <ShoppingOutlined
                style={{ color: "#fff", paddingLeft: "15px", fontSize: "25px" }}
              />
            </Badge>
          </Link>
          <Link to="/favorite">
            <Badge count={5} size={"small"}>
              <HeartOutlined
                style={{ color: "#fff", paddingLeft: "30px", fontSize: "25px" }}
              />
            </Badge>
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

        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <MenuOutlined
              style={{ color: "#fff", fontSize: "23px", marginLeft: "20px" }}
            />
          </a>
        </Dropdown>
      </ul>
    </div>
  );
};

export default Header;
