// import race1 from "../../../Images/racing-car/racing-car-1.jpg";
// import race2 from "../../../Images/racing-car/racing-car-2.jpg";
// import race3 from "../../../Images/racing-car/racing-car-3.jpg";
import race4 from "../../../Images/racing-car/racing-car-4.jpg";
import race5 from "../../../Images/racing-car/racing-car-5.jpg";
import race6 from "../../../Images/racing-car/racing-car-6.jpg";

const RacingCar = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-4">
      {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={race1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Racing Car</h2>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={race2} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Racing Car</h2>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={race3} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Racing Car</h2>
        </div>
      </div> */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={race4} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Racing Car</h2>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={race5} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Racing Car</h2>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={race6} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Racing Car</h2>
        </div>
      </div>
    </div>
  );
};

export default RacingCar;
