import React from "react";
import { UseSelector, useSelector } from "react-redux";

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
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="newsletter.html">Newsletter</a>
          </li>
          <li>
            <a href="#">
              Cart <b>{cartCount}</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
