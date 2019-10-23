import React from "react";
import { isAuthenticated } from "../../auth/index";
import { Link } from "react-router-dom";

const Checkout = ({ products }) => {
  const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const showCheckout = () =>
    isAuthenticated() ? (
      <button className="btn btn-success">Checkout</button>
    ) : (
      <Link to="/signin">
        <button className="btn btn-primary">Sign in to checkout</button>
      </Link>
    );
  return (
    <div>
      <h2>Total: &#8377;{getTotal()}</h2>

      {showCheckout()}
    </div>
  );
};

export default Checkout;
