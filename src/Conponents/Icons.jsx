import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Icons() {
  const iconsRef = collection(db, "Icons");
  const [Icons, setIcons] = useState([]);
  async function getData() {
    try {
      const data = await getDocs(iconsRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      setIcons(filteredData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section className="mx-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid gap-3rounded-md">
        {Icons.map((item) => (
          <div className="card cursor-pointer  rounded-md drop-shadow-md drop-shadow-red-700 bg-white p-5 hover:drop-shadow-lg transition duration-150">
            <img src={item.img} alt={item.title} className="h-14 rounded-md" />
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
                  alt=""
                />
              </Link>
            </div>
            <p className="subpixel-antialiased text-gray-500 mt-1 mb-3">
              {item.desc}
            </p>
            <span className="bg-red-50 text-red-500 text-sm font-medium px-2.5 py-0.5 rounded">
              {item.tag}
            </span>
          </div>
        ))}
      </section>
    </>
  );
}
