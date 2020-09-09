import React from "react";
import "./Header.scss";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className="header__logo"
        alt="logo"
      />
      <div className="header__search">
        <input type="text" className="header__input-search" />
        <SearchIcon className="header__search-icon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__option-one">Hello Guest</span>
          <span className="header__option-two">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__option-one">Returns</span>
          <span className="header__option-two">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-one">Your</span>
          <span className="header__option-two">Prime</span>
        </div>
        <div className="header__option-basket">
          <ShoppingBasketIcon />
          <span className="header__option-two header__basket-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;