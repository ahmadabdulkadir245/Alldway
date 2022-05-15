import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { addToBasket } from "../../slices/basketSlice";
import { Properties } from "../../data/properties";
import Card from "./Card";

function Sale() {
  const Sales = Properties.filter((property) => property.purchase === "Buy");
  return (
    <div className='mt-20 max-w-6xl 2xl:max-w-8xl  px-4 md:px-4 lg:px-0 m-auto'>
      <h1 className='text-4xl text-[#093158] text-center'>
        {" "}
        FOR <span className='text-[#ffcb05]'> SALE</span>
      </h1>
      <div
        className='flex justify-center items-center m
      t-1 m-auto bg-[#ffcb05] w-32 h-[2px] mb-12'
      ></div>

      <div className='grid grid-col md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8  md:gap-x-8 lg:gap-x-10 gap-y-14 m-auto'>
        {Sales.map(
          ({
            id,
            type,
            localGov,
            bedrooms,
            bathroom,
            kitchen,
            plot,
            price,
            img,
            purchase,
          }) => (
            <div key={id}>
              <Card
                id={id}
                type={type}
                purchase={purchase}
                localGov={localGov}
                bedrooms={bedrooms}
                bathroom={bathroom}
                kitchen={kitchen}
                plot={plot}
                price={price}
                img={img}
              />
            </div>
          )
        )}
      </div>
      <button className='flex justify-center mt-16  bg-[#ffcb05] w-56 rounded-md text-white m-auto p-2 2xl:p-3 outline-none transition-all duration-300 ease-in-out hover:bg-yellow-500 2xl:w-[300px]'>
        VIEW ALL
      </button>
    </div>
  );
}

export default Sale;
