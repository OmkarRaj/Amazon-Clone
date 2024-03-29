import React from "react";
import "./Header.css";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"; 
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";


function Header() {
  const [{basket , user}] = useStateValue();

  const login = () => {
    if(user){
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* logo on the left - img */}

      {/* <Link to="/login"> */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon__logo"
        ></img>
      </Link>
      {/* </Link> */}

      {/* search box  */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>

      {/* 3 links  */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign In'}</span>
          </div>
        </Link>

        {/* 2nd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 4th link basket icon */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionCart">
            {/* Shopping basket icon */}
            <ShoppingCartIcon />
            {/* Number of items in the basket */}
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
