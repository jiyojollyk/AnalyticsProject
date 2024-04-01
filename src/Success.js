import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Success =(props)=>{
    const handleClick=()=>{
        window.location.href = '/detail'
    }
    return(
        <div>
            <Header />
            <h4>Product added successfully!!!!</h4>
            <Link to={'/cart'}>View Cart</Link>
        </div>
    )
}

export default Success;