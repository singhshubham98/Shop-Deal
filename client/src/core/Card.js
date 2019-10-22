import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
import "../styles.css";
const Card = ({ product }) => {
  return (
    <div className="mb-3 mr-3" style={{ paddingLeft: 0 }}>
      <div className="card h-100" style={{ width: "13rem", border: "none" }}>
        <ShowImage className="card-img-top" item={product} url="product" />
        <div className="card-block">
          <h6 className="card-title">{product.name}</h6>
          {/* <p className="text-muted"> {product.description.substring(0, 40)}</p> */}
          <p className="card-text">&#8377; {product.price}</p>
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
