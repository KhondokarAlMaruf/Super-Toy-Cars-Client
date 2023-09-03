/* eslint-disable react/no-unescaped-entities */
// import car1 from "../../Images/slider/s-3.jpg";
import car2 from "../../Images/slider/s-4.jpg";
const VisitUs = () => {
  return (
    <div>
      <h1 className="text-center text-6xl font-semibold font-teko text-sky-500 leading-relaxed">
        Visit Us!!
      </h1>
      <div className="border-4 border-sky-500 rounded-lg shadow-2xl p-5 m-10">
        <div className="hero ">
          <div className="hero-content gap-24 flex-col lg:flex-row">
            <img src={car2} className="w-2/5 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Brand Of The Week</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-info">Get Started</button>
            </div>
          </div>
        </div>
        <div className="hero ">
          <div className="hero-content gap-24 flex-col lg:flex-row-reverse">
            <img src={car2} className="w-2/5 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">What's Hot Now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-info">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitUs;
