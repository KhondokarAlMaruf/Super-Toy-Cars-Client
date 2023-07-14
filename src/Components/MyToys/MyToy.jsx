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
    <div>
      <h2>{car.seller_name}</h2>
      <h2>{car.seller_email}</h2>
      <h2>{car.category_name}</h2>
      <button onClick={() => deleteProduct(car._id)}>delete</button>
    </div>
  );
};

export default MyToy;
