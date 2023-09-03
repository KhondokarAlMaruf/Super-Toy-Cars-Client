import { useContext } from "react";
import logo from "../../Images/super toy cars.png";

import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-sky-500 text-primary-content px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <div className="flex flex-col text-black">
              <Link to={"/"} className="btn btn-ghost normal-case text-xl">
                Home
              </Link>
              <Link to={"/blog"} className="btn btn-ghost normal-case text-xl">
                Blog
              </Link>
              <Link
                to={"/alltoys"}
                className="btn btn-ghost normal-case text-xl"
              >
                All Toys
              </Link>
              <div>
                {user && (
                  <div className="text-center">
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
                  </div>
                )}
              </div>
            </div>
          </ul>
        </div>
        <div>
          <Link to={"/"}>
            <img className="w-32 rounded" src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <div className="flex">
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
        </ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <>
            <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
            {/* <span> {user?.displayName}</span> */}
            <button
              onClick={handleLogout}
              className="border  btn btn-ghost normal-case text-xl"
            >
              Log Out
            </button>
          </>
        ) : (
          <button>
            <Link to={"/login"} className="btn btn-ghost normal-case text-xl">
              Login
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
