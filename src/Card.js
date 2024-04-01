import React from "react";
import { Link } from "react-router-dom";

const Card =(props)=>{
    return(
        <div className="product-card">
            <h3>{props.data.title}</h3>
            <p>{props.data.description}</p>
            <div className="card-footer">
                <h5>{props.data.price}</h5>
                <Link className="add-to-cart" to='/detail' state={{data: props.data}}> View Details </Link>
            </div>
        </div>
    )
}

export default Card;