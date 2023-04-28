import React from "react";

export default function Navbar({ toggleAside }) {
  return (
    <div>
      <nav className=" bg-gray-50 dark:bg-gray-900 dark:border-gray-700 fixed w-full z-50 top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-3">
          <div className="flex items-center">
            <div className="flex items-center">
              <h1 className="font-semibold">Developers Resources</h1>
              <img
                src={require("../assets/images/favicon.webp")}
                alt="Resources app icon"
                className="h-10"
              />
            </div>
          </div>
          <p className="flex bg-yellow-200 font-semibold py-1 px-4 rounded-md">
            Don't forget to pray for Amir
            <p className=" text-red-500 ps-1  ">
              <i className="fa-solid fa-heart"></i>
            </p>
          </p>
        </div>
      </nav>
    </div>
  );
}
