import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { RiMenuFoldFill } from "react-icons/ri";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/dd"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active"
              : "hover:border-2 hover:border-red-400 px-3 py-2 rounded-lg"
          }
        >
          প্রেজেন্টেশন মেম্বারশিপ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/sss"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active"
              : "hover:border-2 hover:border-red-400 px-3 py-2 rounded-lg"
          }
        >
          বিজনেস স্যলুশন
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-black ">
      <div className="max-w-screen-xl mx-auto px-5 flex justify-between items-center p-3">
        <div className="text-white md:hidden"><RiMenuFoldFill className="text-3xl" />
        </div>
        <div className="flex items-center">
          <img className="w-12" src={logo} alt="logo" />
          <p className="text-white text-xl font-bold">Geahok</p>
        </div>
        <div className="text-white md:flex items-center gap-6 hidden">
          <ul className="flex gap-6 items-center font-semibold ">{navLinks}</ul>
          <div>
            <button className="px-4 py-1 bg-red-500 hover:bg-black hover:border-2 hover:border-red-400 rounded-md flex items-center gap-2 font-semibold">
              <FaRegUserCircle />
              লগইন
            </button>
          </div>
          <IoCartOutline className="text-4xl" />
        </div>
        <div className="md:hidden">
          <GiShoppingBag className="text-2xl text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
