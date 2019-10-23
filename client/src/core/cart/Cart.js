import React, { Component } from "react";
import Layout from "../Layout";
import Card from "../Card";
import { getCart } from "./cartHelpers";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

class Cart extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.setState({
      items: getCart()
    });
  }

  componentDidUpdate() {
    const itemsCount = JSON.parse(localStorage.getItem("cart")).length;
    console.log("itemsCount", itemsCount);
    console.log("State items", this.state.items.length);
    if (itemsCount !== this.state.items.length) {
      this.setState({
        items: getCart()
      });
    }
  }

  showItems = items => (
    <React.Fragment>
      <h4>Your cart has {`${items.length}`} items.</h4>
      <hr />
      <div className="row">
        {items.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
          />
        ))}
      </div>
    </React.Fragment>
  );

  Message = () => (
    <h4>
      Your cart is empty. <hr />
      <br /> <Link to="/shop">Continue shopping</Link>
    </h4>
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
            <Checkout products={this.state.items} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Cart;
