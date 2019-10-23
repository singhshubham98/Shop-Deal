import React, { Component } from "react";
import Layout from "../Layout";
import Card from "../Card";
import { getCart } from "./cartHelpers";
import { Link } from "react-router-dom";

class Cart extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.setState({
      items: getCart()
    });
  }

  showItems = items => (
    <React.Fragment>
      <h2>Your cart has {`${items.length}`} items.</h2>
      <hr />
      <div className="row">
        {items.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
          />
        ))}
      </div>
    </React.Fragment>
  );

  Message = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
    </h2>
  );
  render() {
    return (
      <Layout
        title="Shopping Cart"
        description="Manage your cart items"
        className="container-fluid"
      >
        <div className="row">
          <div className="col-7">
            {this.state.items.length > 0
              ? this.showItems(this.state.items)
              : this.Message()}
          </div>
          <div className="col-5">
            <p>safdasdfdsfsd</p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Cart;
