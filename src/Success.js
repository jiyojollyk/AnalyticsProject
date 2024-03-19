import React from "react";
import { Link } from "react-router-dom";

const Success =(props)=>{
    const handleClick=()=>{
        window.location.href = '/detail'
    }
    return(
        <div>
            <h4>Product added successfully!!!!</h4>
            <Link to={'/AnalyticsProject'}>Home</Link>
        </div>
    )
}

export default Success;