import React from "react";

export default function Navbar({ toggleAside }) {
  return (
    <div>
      <nav className=" bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <h1 className=" font-semibold text-lg ">Resources app</h1>
            <img
              src={require("../assets/images/favicon.webp")}
              alt="Resources app icon"
              className="h-10"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
