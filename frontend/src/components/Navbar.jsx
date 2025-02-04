import React, { useContext, useState } from "react";
import "animate.css";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex animate__animated animate__backInDown items-center justify-between py-5 font-medium">
        <Link to="/">
          <img
            src={assets.logo}
            className="w-[12em] h-auto mt-[-5px]"
            alt="Logo"
          />
        </Link>
        <ul
          className={`hidden sm:flex gap-5 text-sm text-gray-700 ${
            visible ? "opacity-0" : "opacity-100"
          }`}
        >
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-5">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group relative">
              <img 
                onClick={() => token ? null : navigate('/login')}
                src={assets.profile_icon}
                className="w-5 cursor-pointer"
                alt=""
              />
            {/* dorpdown menu  */}

            {token && 
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>}
          </div>
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
            <p className="absolute top-2.5 left-2.5 mb-2 mr-2 w-4 h-4 bg-black text-white text-[8px] font-bold rounded-full flex items-center justify-center">
              {getCartCount()}
            </p>
          </Link>
          <img
            src={assets.menu_icon}
            onClick={() => setVisible(true)}
            className="w-6 cursor-pointer sm:hidden"
            alt=""
          />
        </div>
      </div>

      {/* White background overlay when menu is open */}
      <div
        className={`${
          visible ? "absolute top-0 left-0 w-full h-full bg-white z-10" : "hidden"
        }`}
        onClick={() => setVisible(false)}
      ></div>

      {/* Sidebar Menu for mobile screens */}
      <div
        className={`${
          visible ? "fixed top-0 left-0 w-full h-full z-20" : "hidden"
        } bg-white transition-all duration-300`}
      >
        <div className="flex flex-col text-gray-600">
          {/* Close Button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center cursor-pointer gap-4 p-3"
          >
            <img src={assets.back_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>

          {/* Navigation Links */}
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;