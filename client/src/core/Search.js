import React, { Component } from "react";
import { getCategories } from "./apiCore";
import Card from "./Card";
class Search extends Component {
  state = {
    data: {
      categories: [],
      category: "",
      search: "",
      results: [],
      searched: false
    }
  };

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = () => {
    getCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        const { categories } = this.state.data;
        this.setState({ categories: data }, () => {
          console.log("Data", data);
        });
      }
    });
  };
  render() {
    console.log(this.state.data.categories);
    return <div>Hiii{this.state.data.categories}</div>;
  }
}

export default Search;
