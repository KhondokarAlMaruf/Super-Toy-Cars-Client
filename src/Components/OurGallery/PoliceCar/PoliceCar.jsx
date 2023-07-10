import police1 from "../../../Images/police-car/police-1.jpg";
import police2 from "../../../Images/police-car/police-2.jpg";
import police3 from "../../../Images/police-car/police-3.jpg";
import police4 from "../../../Images/police-car/police-4.jpg";
import police5 from "../../../Images/police-car/police-5.jpg";
import police6 from "../../../Images/police-car/police-6.jpg";
const PoliceCar = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={police1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Police Car</h2>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={police2} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Police Car</h2>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={police3} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Police Car</h2>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={police4} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Police Car</h2>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={police5} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Police Car</h2>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={police6} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Police Car</h2>
        </div>
      </div>
    </div>
  );
};

export default PoliceCar;
