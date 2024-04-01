import React, { useState,useEffect } from "react";
import Header from "./Header";
import { databases } from "./settings";
import Card from "./Card";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart=()=>{
    databases.listDocuments("6602684f7616a2e535c5", "66026b85e51afa067846").then(
      function (response) {
        if(response.total > 0){
          setCart(response.documents);
        }
      },
      function (error) {
        console.log(error);
      }
    );
  }

  return (
    <>
      <div>
        <Header />
        <h3>Cart</h3>
        <div className="product-cart-container">
          {cart.map((item) => (
            <Card key={item.$id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
