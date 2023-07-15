import React from "react";
import parent from "../../Images/parent.jpg";

const ParentsTips = () => {
  return (
    <div className="m-20">
      <h1 className="text-center text-6xl font-semibold font-teko text-sky-500 leading-relaxed">
        Parent Pro Tip
      </h1>
      <div className="mt-10">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={parent} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Parent Pro Tip</h2>
            <p>
              Need ideas for outdoor fun this Summer? Try out some of our DIY
              outdoor activities!
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-info">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentsTips;
