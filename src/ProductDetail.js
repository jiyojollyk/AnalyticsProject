import React from "react";
import Header from "./Header";
import { redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { datadogLogs } from "@datadog/browser-logs";
import { addToCart } from "./redux/reducer";
import { databases } from "./settings";
import { ID } from "appwrite";

const ProductDetail = () => {
  const { state } = useLocation();
  const cartCount = useSelector((state) => state.cart.cartCount);
  const dispatch = useDispatch();

  const addCart = (data) => {
    databases
      .createDocument(
        "6602684f7616a2e535c5",
        "66026b85e51afa067846",
        ID.unique(),
        { title: data.title, description: data.description, price: data.price }
      )
      .then((response) => {
        if (response) {
          window.location.href=('/thankyou')
          dispatch(addToCart(cartCount + 1));
          datadogLogs.logger.info(`${state.data.name} added to cart`, {
            button: "myButton",
          });
          
        }
      });
  };
  return (
    <div className="product-detail">
      <Header />
      <h3>{state.data.title}</h3>
      <p>{state.data.description}</p>
      <div className="detail-footer">
        <h5>{state.data.price}</h5>
        <button onClick={() => addCart(state.data)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
