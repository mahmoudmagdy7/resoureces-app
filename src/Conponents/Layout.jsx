import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  function toggleAside() {
    const aside = document.querySelector(".aside");
    const leftToggler = document.querySelector(".fa-angle-left");
    const rightToggler = document.querySelector(".fa-angle-right");
    const asideItems = document.querySelectorAll(".aside a");
    leftToggler.classList.toggle("hidden");
    rightToggler.classList.toggle("hidden");
    asideItems.forEach(function (item) {
      item.classList.toggle("w-11");
    });
    aside.classList.toggle("aside-close");
  }

  return (
    <div>
      <Navbar toggleAside={toggleAside} />
      <div className="flex mt-5">
        <div className="aside bg-slate-100 relative">
          <div
            onClick={toggleAside}
            className="toggler end-0 translate-x-2 cursor-pointer  absolute p-3 bg-green-400 w-5 h-5 flex items-center justify-center rounded-full"
          >
            <i className="fas fa-angle-left"></i>
            <i className="fas fa-angle-right hidden"></i>
          </div>
          <div className="inner-content overflow-hidden">
            <ul className="m-5">
              <li className="mb-2">
                <Link
                  className="flex   px-2  py-2 text-xl cursor-pointer items-center  hover:bg-slate-200 rounded-md"
                  to="colors"
                >
                  <div className="bg-red-500 text-sm text-white p-2  rounded-md flex justify-center me-4">
                    <i class="fa-solid fa-palette "></i>
                  </div>
                  <span className="text-gray-700 font-semibold">Colors</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="flex  px-2 py-2 text-xl cursor-pointer items-center  hover:bg-slate-200 rounded-md"
                  to="icons"
                >
                  <div className="bg-blue-500 text-sm text-white p-2  rounded-md flex justify-center me-4">
                    <i class="fa-solid fa-icons"></i>
                  </div>
                  <span className="text-gray-700 font-semibold">Icons</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
