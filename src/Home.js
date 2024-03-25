import React from "react";
import { datadogLogs } from "@datadog/browser-logs";
import Card from "./Card";
import Header from "./Header";

const products = [
  {
    id: "P10",
    name: "Nike Running Shoe NK34",
    description: "High quality shoes",
    price: "4000",
  },
  {
    id: "P11",
    name: "Nike Running Shoe NK45",
    description: "High quality shoes",
    price: "2900",
  },
  {
    id: "P12",
    name: "Nike Running Shoe NK36",
    description: "High quality shoes",
    price: "5999",
  },
  {
    id: "P13",
    name: "Puma Running Shoe PM12",
    description: "High quality shoes",
    price: "1999",
  },
  {
    id: "P14",
    name: "Adidas Running Shoe AD34",
    description: "High quality shoes",
    price: "9999",
  },
  {
    id: "P15",
    name: "Adidas Running Shoe AD76",
    description: "High quality shoes",
    price: "6999",
  },
];

const Home = () => {
  const handleClick = () => {
    datadogLogs.logger.info("Log from frontend", {
      button: "myButton",
      id: "123455",
    });
  };
  return (
    <>
      <div class="container">
        <Header />
        <div className="product-cards-container">
          {products.map((item) => (
            <Card
              key={item.id}
              data={item}
            />
          ))}
        </div>
        <a href="https://experionglobal.com/">Experion</a>
      </div>
    </>
  );
};

export default Home;
