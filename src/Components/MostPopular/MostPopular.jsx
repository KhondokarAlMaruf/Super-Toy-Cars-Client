import car from "../../Images/special/81db1751-c6f8-4d00-8e68-2eabfd029414.png";
const MostPopular = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-semibold font-teko text-sky-500 leading-relaxed">
        Our Most Polular Toys
      </h1>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={car} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">
            Smart Voice Remote Control Cars Arrival 2.4G RC Car Toy With Smart
            Watch Electric Racing Toy Car Voice Remote Control Car
          </h2>
          <p className="text-xl">
            Category: Toys Sports || Brand: Individual Collection
          </p>
          <p>
            <b>
              Specifications: <br />
              Product Type : USB Charger <br />
              Light : LED Light Voice <br />
              Command : Yes
            </b>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
