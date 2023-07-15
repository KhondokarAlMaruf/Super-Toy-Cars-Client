import React from "react";
import { Link } from "react-router-dom";

const SelectedItemDetails = ({ selectedItems }) => {
  //   console.log(selectedItems.map((s) => console.log(s)));
  if (!selectedItems) {
    return null;
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-4">
        {selectedItems?.map((item, index) => (
          <div key={index}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={item?.image} alt={item.category_name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> {item?.category_name}</h2>
                <h2 className="card-title"> Price: {item?.price}</h2>
                <h2 className="card-title">Rating: {item?.rating}</h2>
                <div className="card-actions justify-end">
                  <Link to={`/view-details/${item._id}`}>
                    <button className="btn btn-info">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedItemDetails;
