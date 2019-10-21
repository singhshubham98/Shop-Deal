import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
import "../styles.css";
const Card = ({ product }) => {
  return (
    <div className="col-3 mb-3">
      <div className="card">
        <div className="card-body">
          <ShowImage item={product} url="product" />
          <h6>{product.name}</h6>
          {/* <p className="text-muted"> {product.description.substring(0, 40)}</p> */}
          <p>&#8377; {product.price}</p>
          <Link to="/">
            <button className="btn outline mt-2 mb-2">VIEW</button>
          </Link>
          <button className="btn outline m-2">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
