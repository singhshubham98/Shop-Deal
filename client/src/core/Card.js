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
          {/* <p className="text-muted"> {product.description.substring(0, 40)}</p> */}
          <p>&#8377; {product.price}</p>
          <Link to="/">
            <button
              className="btn btn-outline-primary mt-2 mb-2"
              style={{ fontSize: "11px" }}
            >
              VIEW
            </button>
          </Link>
          <button
            className="btn btn-outline-warning m-2"
            style={{ fontSize: "11px" }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
