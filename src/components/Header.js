import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { authActions } from "../store/authSlice";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              TechShop
            </h2>
          </li>

          <li>
            <Cart />
            <button className="logout-btn" onClick={handleLogout}>
              logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
