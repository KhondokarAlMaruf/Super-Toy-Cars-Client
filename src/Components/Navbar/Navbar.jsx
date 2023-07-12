import { useContext } from "react";
import logo from "../../Images/super toy cars.png";

import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import AddAToys from "../AddAToys/AddAToys";
import MyToys from "../MyToys/MyToys";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div className="navbar bg-sky-500 text-primary-content justify-between px-10">
          <div>
            <Link to={"/"}>
              <img className="w-32 rounded" src={logo} alt="" />
            </Link>
          </div>
          <div>
            <Link to={"/"} className="btn btn-ghost normal-case text-xl">
              Home
            </Link>
            <Link to={"/blog"} className="btn btn-ghost normal-case text-xl">
              Blog
            </Link>
            <Link to={"/alltoys"} className="btn btn-ghost normal-case text-xl">
              All Toys
            </Link>
            <div>
              {user && (
                <>
                  <Link
                    to={"/addatoys"}
                    className="btn btn-ghost normal-case text-xl"
                  >
                    Add A Toys
                  </Link>
                  <Link
                    to={"/mytoys"}
                    className="btn btn-ghost normal-case text-xl"
                  >
                    My Toys
                  </Link>
                </>
              )}
            </div>
          </div>
          <div>
            <div>
              {user ? (
                <>
                  <img src={user?.photoURL} alt="" />
                  <span> {user?.email}</span>
                  <button
                    onClick={handleLogout}
                    className="border  btn btn-ghost normal-case text-xl"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <button>
                  <Link
                    to={"/login"}
                    className="btn btn-ghost normal-case text-xl"
                  >
                    Login
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
