import React from "react";

import { NavLink, Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Nav() {
  const { isEmpty, totalUniqueItems } = useCart();

  return (
    <div className="mb-20">
      <div className="md:hidden fixed right-0 top-[60%] bg-red-600 px-3 py-2">
        <div className=" flex space-x-2 ">
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping text-white text-lg "></i>
          </Link>
          <p className=" text-white font-medium text-lg ">
            ({isEmpty ? "0" : totalUniqueItems})
          </p>
        </div>
      </div>
      <nav
        className="py-6 md:px-20 px-2 flex justify-between items-center z-10 fixed top-0 left-0 w-full 
            bg-black shadow-2xl  "
      >
        <div className="hidden md:block">
          <h2 className=" text-2xl text-white">
            <Link to="/">Logo</Link>
          </h2>
        </div>
        <ul className="flex flex-wrap md:justify-center justify-start mx-auto w-full  text-white md:text-xl">
          <li className="md:pl-4 pl-3 ">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="md:pl-4 pl-3">
            <NavLink to="Gallery">Products</NavLink>
          </li>
          <li className="md:pl-4 pl-3">
            <NavLink to="/team">Team</NavLink>
          </li>
          <li className="md:pl-4 pl-3 ">
            <NavLink to="/counter">About</NavLink>
          </li>
          <li className="md:pl-4 pl-3 ">
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className="md:pl-4 pl-3 ">
            <NavLink to="/testimonials">Testimonials </NavLink>
          </li>
          <li className="md:pl-4 pl-3 ">
            <NavLink to="/form"> Contact</NavLink>
          </li>
        </ul>
        <div className=" relative hidden md:block">
          <p className="text-sm left-3 -top-3 text-white bg-red-700 px-[9px] py-[2px] rounded-full absolute">
            {isEmpty ? "0" : totalUniqueItems}
          </p>
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping text-white text-2xl "></i>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
