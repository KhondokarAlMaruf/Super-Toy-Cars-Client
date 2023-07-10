import logo from "../../Images/super toy cars.png";

import { Link } from "react-router-dom";

const Navbar = () => {
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
          </div>
          <div>
            <div>
              <>
                <img src="" alt="" />
                <span> iii</span>
                <button className="border  btn btn-ghost normal-case text-xl">
                  Log Out
                </button>
              </>
              <button>
                <Link
                  to={"login"}
                  className="btn btn-ghost normal-case text-xl"
                >
                  Login
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
