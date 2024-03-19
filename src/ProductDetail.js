import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "./redux/reducer";

const ProductDetail = () => {
    const {state} = useLocation();
    const cartCount = useSelector(state=>state.cart.cartCount)
    const dispatch = useDispatch();

    const addCart =()=>{
        dispatch(addToCart(cartCount + 1))
    }
  return (
    <div className="product-detail">
        <Header />
      <h3>{state.data.name}</h3>
      <p>{state.data.desc}</p>
      <div className="detail-footer">
        <h5>{state.data.price}</h5>
        <button onClick={addCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
