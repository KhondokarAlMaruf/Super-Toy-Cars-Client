import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddAToys = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigation = useNavigate();

  const { user } = useContext(AuthContext);

  const handleAddProduct = (data) => {
    const toy = {
      category_name: data.category,
      seller_name: data.name,
      seller_email: data.email,
      toy_name: data.toyName,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
      rating: data.rating,
      image: data.toyURL,
    };

    console.log(toy);
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("toys Uploaded Successfully");
        navigation("/mytoys");
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-primary">Add a Product</h2>
      <div className="my-6 flex justify-center items-center">
        <div className="card shadow-2xl p-8">
          <form onSubmit={handleSubmit(handleAddProduct)}>
            <div className="grid grid-cols-2 gap-6">
              <div className="form-control w-full max-w-xs">
                <input
                  {...register("name")}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  defaultValue={user?.displayName}
                  readOnly
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  {...register("email")}
                  type="email"
                  className="input input-bordered w-full max-w-xs"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  {...register("toyName", {
                    required: "Please provided product toy Name",
                  })}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="toy Name"
                />
                {errors.toyName && (
                  <span className="text-error">{errors.toyName.message}</span>
                )}
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  {...register("toyURL", {
                    required: "Please provided product toyURL",
                  })}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="toy image URL"
                />
                {errors.toyURL && (
                  <span className="text-error">{errors.toyURL.message}</span>
                )}
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  {...register("price", {
                    required: "Please provided product  Price",
                  })}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="Original Price"
                />
                {errors.price && (
                  <span className="text-error">{errors.price.message}</span>
                )}
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  {...register("rating", {
                    required: "Please provided product rating",
                  })}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="rating"
                />
                {errors.rating && (
                  <span className="text-error">{errors.rating.message}</span>
                )}
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  {...register("quantity", {
                    required: "Please provided product quantity",
                  })}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="quantity"
                />
                {errors.quantity && (
                  <span className="text-error">{errors.quantity.message}</span>
                )}
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  {...register("description", {
                    required: "Please provided product description",
                  })}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="description"
                />
                {errors.description && (
                  <span className="text-error">
                    {errors.description.message}
                  </span>
                )}
              </div>

              <div className="form-control w-full max-w-xs">
                <div className="input-group">
                  <select
                    required
                    {...register("category")}
                    className="select select-bordered"
                  >
                    <option value="Interceptor Squad Car">
                      Interceptor Squad Car
                    </option>
                    <option value="Guardian Patrol Cruiser">
                      Guardian Patrol Cruiser
                    </option>
                    <option value="Enforcer Tactical Vehicle">
                      Enforcer Tactical Vehicle
                    </option>
                    <option value="Velocity Viper">Velocity Viper</option>
                    <option value="Thunderbolt Racer">Thunderbolt Racer</option>
                    <option value="Turbo Blaze GT">Turbo Blaze GT</option>
                    <option value="Classic Cruiser">Classic Cruiser</option>
                    <option value="City Commuter">City Commuter</option>
                    <option value="Family Traveler">Family Traveler</option>
                  </select>
                </div>
              </div>
            </div>

            <input
              className="btn btn-accent w-full text-white mt-6 text-center"
              type="submit"
              value="Add Product"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAToys;
