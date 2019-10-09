import React, { Component } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth/index";
import { createProduct } from "./apiAdmin";

class AddProduct extends Component {
  state = {
    name: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    quantity: "",
    shipping: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    redirectToProfile: false,
    formData: ""
  };

  componentDidMount = () => {
    this.setState({
      formData: new FormData()
    });
  };

  render() {
    const { user, token } = isAuthenticated();
    const {
      name,
      description,
      price,
      categories,
      category,
      quantity,
      shipping,
      photo,
      loading,
      error,
      createdProduct,
      redirectToProfile,
      formData
    } = this.state;

    const handleChange = name => e => {
      const value = name === "photo" ? e.target.files[0] : e.target.value;
      this.state.formData.set(name, value);
      this.setState({
        [name]: value
      });
    };

    const handleSubmit = e => {
      e.preventDefault();

      this.setState({
        error: "",
        loading: true
      });

      createProduct(user._id, token, formData).then(data => {
        if (data.error) {
          this.setState({
            error: data.error
          });
        } else {
          this.setState({
            name: "",
            description: "",
            photo: "",
            price: "",
            quantity: "",
            loading: false,
            createdProduct: data.name
          });
        }
      });
    };

    const newForm = () => (
      <form className="mb-3" onSubmit={handleSubmit}>
        <h4>Post Photo</h4>
        <div className="form-group">
          <label className="btn btn-secondary">
            <input
              onChange={handleChange("photo")}
              type="file"
              name="photo"
              accept="image/*"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input
            onChange={handleChange("name")}
            type="text"
            className="form-control"
            value={name}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Description</label>
          <textarea
            onChange={handleChange("description")}
            className="form-control"
            value={description}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Price</label>
          <input
            onChange={handleChange("price")}
            type="number"
            className="form-control"
            value={price}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Category</label>
          <select onChange={handleChange("category")} className="form-control">
            <option value="5d9e11e1e4f39d069f5e8a45">Python</option>
            <option value="5d9e11e1e4f39d069f5e8a45">PHP</option>
          </select>
        </div>
        <div className="form-group">
          <label className="text-muted">Shipping</label>
          <select onChange={handleChange("shipping")} className="form-control">
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label className="text-muted">Quantity</label>
          <input
            onChange={handleChange("quantity")}
            type="number"
            className="form-control"
            value={quantity}
          />
        </div>
        <button className="btn btn-outline-primary">Create Product</button>
      </form>
    );
    return (
      <Layout
        title="Add a new category"
        description={`${user.name}, ready to add a new category?`}
      >
        <div className="row">
          <div className="col-md-6 offset-md-2">{newForm()}</div>
        </div>
      </Layout>
    );
  }
}

export default AddProduct;
