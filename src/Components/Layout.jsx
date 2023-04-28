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

  useEffect(function () {
    console.log(window.innerWidth);
    if (window.innerWidth < 600) {
      console.log(true);
      toggleAside();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex mt-24">
        <div className="aside relative">
          <div className="sticky top-24">
            <div
              onClick={toggleAside}
              className="toggler end-0 translate-x-2 cursor-pointer  absolute p-3 bg-green-200 text-green-600 w-5 h-5 flex items-center justify-center rounded-full"
            >
              <i className="fas fa-angle-left"></i>
              <i className="fas fa-angle-right hidden"></i>
            </div>
            {/* aside items  */}
            <div className="inner-content overflow-hidden">
              <ul className="m-5">
                {/* Home  */}
                <li className="mb-2">
                  <Link
                    className="flex   px-2  py-2 text-xl cursor-pointer items-center  hover:bg-slate-200 rounded-md"
                    to="home"
                  >
                    <div className="bg-gray-400 text-sm text-white p-2  rounded-md flex justify-center me-4">
                      <i class="fa-solid fa-house"></i>{" "}
                    </div>
                    <span className="text-gray-700 font-semibold">Home</span>
                  </Link>
                </li>
                {/* Colors  */}
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
                {/* Icons  */}
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
                {/* html  */}
                <li className="mb-2">
                  <Link
                    className="flex  px-2 py-2 text-xl cursor-pointer items-center  hover:bg-slate-200 rounded-md"
                    to="html"
                  >
                    <div className="bg-orange-500 text-sm text-white p-2  rounded-md flex justify-center me-4">
                      <i class="fab fa-html5"></i>
                    </div>
                    <span className="text-gray-700 font-semibold">HTML</span>
                  </Link>
                </li>
                {/* css  */}
                <li className="mb-2">
                  <Link
                    className="flex  px-2 py-2 text-xl cursor-pointer items-center  hover:bg-slate-200 rounded-md"
                    to="css"
                  >
                    <div className="bg-yellow-300 text-sm text-white p-2  rounded-md flex justify-center me-4">
                      <i class="fa-brands fa-css3-alt"></i>
                    </div>
                    <span className="text-gray-700 font-semibold">CSS</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
