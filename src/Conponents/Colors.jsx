import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

export default function Colors() {
  const colorsRef = collection(db, "Colors");
  const [Colors, setColors] = useState([]);
  async function getData() {
    try {
      const data = await getDocs(colorsRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      setColors(filteredData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section className="mx-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid gap-3">
        {Colors.map((item) => (
          <div className="card rounded-md drop-shadow-md drop-shadow-red-700 bg-white p-5 hover:drop-shadow-lg transition duration-150">
            <img src={item.img} alt={item.title} className="h-14 rounded-md" />
            <h3 className=" text-2xl mt-3 font-semibold">{item.title}</h3>
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
