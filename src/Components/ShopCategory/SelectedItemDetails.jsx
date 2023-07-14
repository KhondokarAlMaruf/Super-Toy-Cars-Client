import React from "react";
import { Link } from "react-router-dom";

const SelectedItemDetails = ({ selectedItems }) => {
  //   console.log(selectedItems.map((s) => console.log(s)));
  if (!selectedItems) {
    return null;
  }

  return (
    <div>
      {selectedItems?.map((item, index) => (
        <div key={index}>
          <h3>{item.category_name}</h3>
          <h3>{item?.seller_name}</h3>
          <p>Price: {item.price}</p>
          <p>Rating: {item.rating}</p>
          <img className="w-1/3" src={item.image} alt={item.category_name} />
          <Link to={`/view-details/${item._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default SelectedItemDetails;
