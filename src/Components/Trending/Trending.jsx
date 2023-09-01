import police2 from "../../Images/police-car/police-2.jpg";
import police3 from "../../Images/police-car/police-3.jpg";
import race1 from "../../Images/racing-car/racing-car-6.jpg";

const Trending = () => {
  return (
    <div className="m-20">
      <h1 className="text-center text-6xl font-semibold font-teko text-sky-500 leading-relaxed">
        Our Trending toys
      </h1>
      <div className="mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={police2} alt="CAR" />
            </figure>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={police3} alt="CAR" />
            </figure>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={race1} alt="CAR" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
