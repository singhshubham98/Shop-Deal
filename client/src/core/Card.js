import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
import "../styles.css";
import moment from "moment";

const Card = ({
  product,
  showViewProductButton = true,
  description = false
}) => {
  const showViewButton = showViewProductButton =>
    showViewProductButton && (
      <Link to={`/product/${product._id}`}>
        <button className="btn outline mt-2 mb-2">VIEW</button>
      </Link>
    );

  const showAddToCartButton = () => (
    <button className="btn outline m-2">ADD TO CART</button>
  );

  const showStock = quantity =>
    quantity > 0 ? (
      <span className="badge badge-primary badge-pill ml-3">In Stock</span>
    ) : (
      <span className="badge badge-primary badge-pill ml-3">Out of Stock</span>
    );
  return (
    <div className="mb-3 mr-3" style={{ paddingLeft: 0 }}>
      <div className="card h-100" style={{ width: "13rem", border: "none" }}>
        <ShowImage className="card-img-top" item={product} url="product" />
        <div className="card-block">
          <h6 className="card-title">{product.name}</h6>
          {description && (
            <p className="lead mt-2">{product.description.substring(0, 100)}</p>
          )}

          <p className="black-9">&#8377; {product.price}</p>
          <p className="black-8">Category: {product.category.name}</p>
          <p className="black-">
            Added on {moment(product.createdAt).fromNow()}
          </p>
          {showStock(product.quantity)}
          <br />
          {showViewButton(showViewProductButton)}
          {showAddToCartButton()}
        </div>
      </div>
    </div>
  );
};

export default Card;
