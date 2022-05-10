import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/solid";
import { Sales } from "../../data/sale";
import Link from "next/link";
import { addToBasket } from "../../slices/basketSlice";

function Rent() {
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
          }) => (
            <div key={id}>
              <Link href={`products/${id.toString()}`}>
                <div className='w-full  rounded-md overflow-hidden  cursor-pointer'>
                  <img
                    className='w-full h-[250px]'
                    src={img}
                    alt='For rent image'
                  />
                  <div className=' text-[#093158] '>
                    <h4 className='text-sm text-gray-400 p-1'>{type}</h4>
                    <h2 className='text-lg text-semibold py-1  text-center'>
                      {" "}
                      {localGov}
                    </h2>
                    <div className='flex justify-between items-center px-4 py-[10px] text-sm'>
                      <div>
                        <p>Bed Rooms : {bedrooms}</p>
                      </div>
                      <div>
                        <p>Bath Rooms: {bathroom}</p>
                      </div>
                    </div>
                    <div className='flex justify-between items-center px-4  py-[10px] text-sm'>
                      <div>
                        <p>Kitchen: {kitchen}</p>
                      </div>
                      <div>
                        <p>Plot: {plot}</p>
                      </div>
                    </div>
                    <div className='flex justify-between items-center px-4  py-[10px] text-sm mb-4'>
                      <div>
                        <p> &#8358 {price} </p>
                      </div>
                      <div>
                        <HeartIcon className='h-5 text-[#ffcb05]' />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
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

export default Rent;
