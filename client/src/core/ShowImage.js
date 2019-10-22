import React from "react";
import { API } from "../config";
import { Link } from "react-router-dom";
const ShowImage = ({ item, url }) => {
  return (
    <div className="product-img">
      <Link to={`/product/${item._id}`}>
        <img
          className="mb-3 img-thumbnail"
          src={`${API}/${url}/photo/${item._id}`}
          style={{ minHeight: "200px", maxHeight: "200px", cursor: "pointer" }}
          alt={item.name}
        />
      </Link>
    </div>
  );
};

export default ShowImage;
