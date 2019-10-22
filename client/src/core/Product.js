import React, { Component } from "react";
import Layout from "./Layout";
import { read } from "./apiCore";
import Card from "./Card";
import "../styles.css";

class Product extends Component {
  state = {
    product: {},
    error: false
  };

  loadSingleProduct = productId => {
    read(productId).then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        });
      } else {
        this.setState({
          product: data
        });
      }
    });
  };

  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.loadSingleProduct(productId);
  }

  render() {
    const { product } = this.state;
    return (
      <Layout
        title={product && product.name}
        description={product && product.description && product.description}
        className="container-fluid"
      >
        {product && product.description && (
          <Card
            product={product}
            description={true}
            showViewProductButton={false}
          />
        )}
      </Layout>
    );
  }
}

export default Product;
