const HappyCoustomers = () => {
  return (
    <div className="my-7">
      <h1 className="text-center text-6xl font-semibold font-teko text-sky-500 leading-relaxed">
        Happy Customers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <h2 className="card-title">Carolan Mitchell</h2>
            <p>
              We are happy, our car got clean today, machinery and the spray off
              crew were doing a really good job.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <div className="card-body ">
            <h2 className="card-title">Andrew Workman</h2>
            <p>
              I have had zero problems with Car Toyz. I’m always going in twice
              a month for a light car wash they have great deals and when I’m
              looking for a greater wash they never disappoint me.{" "}
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <h2 className="card-title">Debbie Fodor</h2>
            <p>
              Scott replaced the stereo in my car, programmed everything I
              needed, plus more! All in just a little over a hour. Thanks Scott!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCoustomers;
