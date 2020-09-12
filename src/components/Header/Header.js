import React from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__input-search" />
        <SearchIcon className="header__search-icon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option-one">Hello {user?.email}</span>
            <span className="header__option-two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__option-one">Returns</span>
          <span className="header__option-two">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-one">Your</span>
          <span className="header__option-two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__option-basket">
            <ShoppingBasketIcon />
            <span className="header__option-two header__basket-count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
