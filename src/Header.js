import React from "react";
import { UseSelector, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
    const cartCount = useSelector(state => state.cart.cartCount)
  return (
    <div class="nav-content">
      <div>
        <h2>My Store</h2>
      </div>
      <div>
        <ul class="nav-items">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a href="newsletter.html">Newsletter</a>
          </li>
          <li>
            <Link to={"/cart"}>Cart <b>{cartCount}</b></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
