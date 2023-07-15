import React from "react";
import { toast } from "react-hot-toast";

const MyToy = ({ car }) => {
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/deleteproduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Deleted Item Successfully");
        }
      });
  };

  return (
    // <div>
    //   <h2>{car.seller_name}</h2>
    //   <h2>{car.seller_email}</h2>
    //   <h2>{car.category_name}</h2>
    //   <button onClick={() => deleteProduct(car._id)}>delete</button>
    // </div>
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={car?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {car?.category_name}</h2>
          <p>Price : {car?.price}</p>
          <p>Rating : {car?.rating}</p>
          <p>Seller : {car?.seller_name}</p>
          <p>Seller Email: {car?.seller_email}</p>
          <p>Quantity: {car?.quantity}</p>
          <p>Description: {car?.description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => deleteProduct(car._id)}
              className="btn btn-info"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToy;
