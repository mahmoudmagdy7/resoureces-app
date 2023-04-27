import React, { useEffect, useState } from "react";
import Colors from "./Colors";

export default function Home() {
  return (
    <>
      <section className="mx-5 flex justify-center w-full">
        <div className="">
          <h1 className=" text-4xl mt-5">
            Resources app | made with
            <span className=" px-2 fas fa-heart text-red-500 inline-block"></span>
          </h1>
        </div>
      </section>
    </>
  );
}
