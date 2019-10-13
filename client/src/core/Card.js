import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";

const Card = ({ product }) => {
  return (
    <div className="col-3 mb-3">
      <div className="card">
        <div className="card-body">
          <ShowImage item={product} url="product" />
          <h5>{product.name}</h5>
          <p className="text-muted"> {product.description}</p>
          <p>&#8377; {product.price}</p>
          <Link to="/">
            <button className="btn btn-outline-primary mt-2 mb-2">VIEW</button>
          </Link>
          <button className="btn btn-outline-warning m-2">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
