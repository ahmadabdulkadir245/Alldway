import {
  StarIcon,
  BookmarkAltIcon,
  HomeIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from "@heroicons/react/solid";
import React from "react";

function Service() {
  return (
    <div className='max-w-6xl 2xl:max-w-8xl mt-16 m-auto mb-12 px-8'>
      <h1 className='text-4xl text-[#093158] text-center m-auto  '>
        {" "}
        OUR <span className='text-[#ffcb05]'> SERVICES</span>
      </h1>
      <div
        className='flex justify-center items-center m
      t-1 m-auto bg-[#ffcb05] w-32 h-[2px] mb-12'
      ></div>

      <div className='grid grid-col md:grid-cols-2 lg:grid-cols-4    md:gap-x-8 gap-y-12 text-[#093158]'>
        <div className='lg:w-[250px] 2xl:w-[300px] text-center'>
          <StarIcon className='h-12 w-24 text-[#ffcb05] m-auto' />
          <h3 className='text-xl my-3'>MORTGAGE FINANCE</h3>
          <p className='leading-7 text-left lg:text-sm 2xl:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil
            atque doloribus accusantium, tempore fuga beatae nemo pariatur porro
            iste sit unde obcaecati aspernatur molestiae nis
          </p>
        </div>
        <div className='lg:w-[250px] 2xl:w-[300px] text-center '>
          <HomeIcon className='h-12 w-24 text-[#ffcb05] m-auto ' />
          <h3 className='text-xl my-3'>SERVICED APARTMENT</h3>
          <p className='leading-7 text-left  lg:text-sm 2xl:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil
            atque doloribus accusantium, tempore fuga beatae nemo pariatur porro
            iste sit unde obcaecati aspernatur molestiae nis
          </p>
        </div>
        <div className='lg:w-[250px] 2xl:w-[300px] text-center'>
          <OfficeBuildingIcon className='h-12 w-24 text-[#ffcb05] m-auto' />
          <h3 className='text-xl my-3'>PROPERTY LISTING</h3>
          <p className='leading-7 text-left lg:text-sm 2xl:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil
            atque doloribus accusantium, tempore fuga beatae nemo pariatur porro
            iste sit unde obcaecati aspernatur molestiae nis
          </p>
        </div>
        <div className='lg:w-[250px] 2xl:w-[300px] text-center'>
          <BookmarkAltIcon className='h-12 w-24 text-[#ffcb05] m-auto' />
          <h3 className='text-xl my-3'>EXPRIENCED AGENTS</h3>
          <p className='leading-7 text-left lg:text-sm 2xl:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil
            atque doloribus accusantium, tempore fuga beatae nemo pariatur porro
            iste sit unde obcaecati aspernatur molestiae nis
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
