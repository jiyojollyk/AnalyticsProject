import React from "react";
import { Link } from "react-router-dom";

const Card =(props)=>{
    const handleClick=()=>{
        window.location.href = '/AnalyticsProject/detail'
    }
    return(
        <div className="product-card">
            <h3>{props.data.name}</h3>
            <p>{props.data.desc}</p>
            <div className="card-footer">
                <h5>{props.data.price}</h5>
                <Link className="add-to-cart" to='/AnalyticsProject/detail' state={{data: props.data}}> View Details </Link>
            </div>
        </div>
    )
}

export default Card;