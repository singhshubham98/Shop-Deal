import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
import "../styles.css";
import moment from "moment";
import { addItem } from "./cart/cartHelpers";
import { Redirect } from "react-router-dom";

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  description = false,
  cartUpdate = false
}) => {
  const [redirect, setRedirect] = useState(false);
  const showViewButton = showViewProductButton =>
    showViewProductButton && (
      <Link to={`/product/${product._id}`}>
        <button className="btn outline mt-2 mb-2">VIEW</button>
      </Link>
    );

  const addToCart = () => {
    addItem(product, () => {
      setRedirect(true);
    });
  };

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = showAddToCartButton =>
    showAddToCartButton && (
      <button onClick={addToCart} className="btn outline m-2">
        ADD TO CART
      </button>
    );

  const showStock = quantity =>
    quantity > 0 ? (
      <span className="badge badge-primary badge-pill ml-3">In Stock</span>
    ) : (
      <span className="badge badge-primary badge-pill ml-3">Out of Stock</span>
    );
  return (
    <React.Fragment>
      {shouldRedirect(redirect)}
      <div className="mb-3 mr-3" style={{ paddingLeft: 0 }}>
        <div className="card h-100" style={{ width: "13rem", border: "none" }}>
          <ShowImage
            className="card-img-top"
            item={product}
            url="product"
            minHeight="200px"
            maxHeight="200px"
            className="img-thumbnail"
          />
          <div className="card-block">
            <h6 className="card-title">{product.name}</h6>
            {description && (
              <p className="lead mt-2">
                {product.description.substring(0, 100)}
              </p>
            )}

            <p className="black-9">&#8377; {product.price}</p>
            <p className="black-8">Category: {product.category.name}</p>
            <p className="black-">
              Added on {moment(product.createdAt).fromNow()}
            </p>
            {showStock(product.quantity)}
            <br />
            {showViewButton(showViewProductButton)}
            {showAddToCart(showAddToCartButton)}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
