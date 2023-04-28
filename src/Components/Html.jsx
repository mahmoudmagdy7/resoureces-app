import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import Loader from "./Loader";

export default function Html() {
  const HtmlRef = collection(db, "HTML");
  const [Html, setHtml] = useState(null);
  async function getData() {
    try {
      const data = await getDocs(HtmlRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setHtml(filteredData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section className="mx-5 content-start py-5 grow ">
        <div className=" lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid gap-3 rounded-md sticky top-24">
          {Html ? (
            Html.map((item, key) => (
              <div
                key={key}
                className="card relative rounded-md drop-shadow-md  bg-white p-5 hover:drop-shadow-lg transition duration-150"
              >
                <div className="end-2 absolute flex flex-col-reverse gap-2 items-center">
                  {item.favourite && (
                    <div className=" bg-orange-100 text-sm text-orange-500 me-2 px-2.5 py-0.5 rounded">
                      <i class="fa-solid fa-star"></i>
                      <span className="ms-1">Favourite</span>
                    </div>
                  )}
                  <div className=" likes cursor-pointer rounded-lg border px-2 py-1">
                    <span className="fa-regular fa-heart"></span>
                    <span className="ms-2">{item.likes}</span>
                  </div>
                </div>

                <img
                  src={item.img}
                  alt={item.title}
                  className="h-14 rounded-md border"
                />
                <div className="flex items-center mt-3">
                  <h3 className=" text-2xl text-gray-700  font-semibold">
                    {item.title}
                  </h3>
                  <Link
                    to={item.link}
                    target="_blank"
                    className="text-gray-500 ms-2 "
                  >
                    <img
                      src="https://designresourc.es/assets/image/5ea2311a48ebd53ad72fb7b2_external-link%20(1).svg"
                      alt="item link"
                      className="item-link relative end-5 opacity-0 transition-all duration-600"
                    />
                  </Link>
                </div>
                <p className="subpixel-antialiased text-gray-500 mt-1 mb-3">
                  {item.desc}
                </p>
                <span className="bg-orange-50 text-orange-500 font-medium px-2.5 py-0.5 rounded">
                  {item.tag}
                </span>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </section>
    </>
  );
}
