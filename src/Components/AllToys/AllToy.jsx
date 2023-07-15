import React from "react";
import { Link } from "react-router-dom";

const AllToy = ({ car }) => {
  console.log(car);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="w-80 h-72">
          <img src={car?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Toy Name :{car?.toy_name}</h2>
          <p>Category : {car?.category_name}</p>
          <p>Seller : {car?.seller_name}</p>
          <p>Price : {car?.price}</p>
          <div className="card-actions justify-end">
            <Link to={`/view-details/${car?._id}`}>
              <button className="btn btn-info">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToy;
