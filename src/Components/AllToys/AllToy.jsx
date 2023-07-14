import React from "react";

const AllToy = ({ car }) => {
  console.log(car);
  return (
    <div>
      <h2>{car.category_name}</h2>
      <h2>{car.price}</h2>
      <h2>{car.rating}</h2>
      <h2>{car.seller_name}</h2>
    </div>
  );
};

export default AllToy;
