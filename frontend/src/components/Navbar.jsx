import React, { useState } from "react";
import 'animate.css';
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible,setVisible] = useState(false);
  return (
    <div className="flex animate__animated animate__backInDown items-center justify-between py-5 font-medium">
      <Link to="/"><img src={assets.logo} className="w-[12em] h-auto mt-[-5px]" alt="Logo" /></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex  flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex  flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex  flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-5">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute top-2.5 left-2.5 mb-2 mr-2 w-4 h-4 bg-black text-white text-[8px] font-bold rounded-full flex items-center justify-center">
            10
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          onClick={() => setVisible(true)}
          className="w-6 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* Sidebar Menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white ${visible ? 'w-full' : 'w-0' }`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={()=>setVisible(false)} className="flex items-center cursor-pointer gap-4 p-3">
            <img src={assets.back_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/">Home</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/collection">Collection</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/about">About</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
