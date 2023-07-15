import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetailsToy = () => {
  const toy = useLoaderData();
  console.log(toy);
  return (
    // <div className="m-16">
    //   <h2>{toy.price}</h2>
    // </div>
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-1/3">
          <img src={toy?.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {toy?.category_name}</h2>
          <h2 className="card-title">Price : {toy?.price}</h2>
          <h2 className="card-title">Rating : {toy?.rating}</h2>
          <h2 className="card-title">Seller : {toy?.seller_name}</h2>
          <h2 className="card-title">Seller Email: {toy?.seller_email}</h2>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsToy;
