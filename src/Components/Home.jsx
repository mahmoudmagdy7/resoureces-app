import React, { useEffect, useState } from "react";

export default function Home({ toggleAside }) {
  return (
    <>
      <section className="mx-5 flex justify-center w-full">
        <div className=" text-center">
          <h1 className=" text-xl mt-5">Developer Resources App</h1>
          <p>
            made with
            <span className=" px-2 fas fa-heart text-red-500 inline-block"></span>
          </p>
        </div>
      </section>
    </>
  );
}
