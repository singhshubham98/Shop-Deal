import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url }) => {
  return (
    <div className="product-img">
      <img
        className="mb-3 img-thumbnail"
        src={`${API}/${url}/photo/${item._id}`}
        style={{ minHeight: "200px", maxHeight: "200px", maxWidth: "100%" }}
        alt={item.name}
      />
    </div>
  );
};

export default ShowImage;
