import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import { databases } from "./settings";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/reducer";

const Home = () => {
  const [products,setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[])

  const fetchProducts=()=>{
    databases.listDocuments("6602684f7616a2e535c5", "6602685ba2c95ac61855").then(
      function (response) {
        if(response.total > 0){
          setProducts(response.documents);
        }
      },
      function (error) {
        console.log(error);
      }
    );
  }

  const fetchCart=()=>{
    databases.listDocuments("6602684f7616a2e535c5", "66026b85e51afa067846").then(
      function (response) {
        if(response.total > 0){
          dispatch(addToCart(response.total));
        }
      },
      function (error) {
        console.log(error);
      }
    );
  }

  return (
    <>
      <div class="container">
        <Header />
        <h3>Products List</h3>
        <div className="product-cards-container">
          {products.map((item) => (
            <Card key={item.$id} data={item} />
          ))}
        </div>
        <a href="https://experionglobal.com/">Experion</a>
      </div>
    </>
  );
};

export default Home;
