import React from "react";

function SearchProperty() {
  return (
    <div className='  bg-[#093158] py-10 px-4 md:px-8 lg:px-0 '>
      <h1 className='text-3xl md:text-4xl text-white text-center '>
        {" "}
        SEARCH <span className='text-[#ffcb05]'> FOR PROPERTY</span>
      </h1>
      <div className='m-auto max-w-6xl 2xl:max-w-8xl'>
        <div className='grid grid-col md:grid-cols-2 md:gap-x-10 md:gap-y-1 lg:gap-y-10'>
          <div className=''>
            <select className='w-full  p-[11px] 2xl:p-[16px] rounded-md focus:border-none outline-none my-8 text-[#093158]  transition-all ease-linear duration-200'>
              <option>All Types</option>
              <option>House</option>
              <option>Apartment</option>
            </select>
          </div>
          <div className=''>
            <select className='w-full  p-[11px] 2xl:p-[16px] rounded-md focus:border-none outline-none my-8 text-[#093158]  transition-all ease-linear duration-200'>
              <option>All Local Goverments</option>
              <option>Kastina</option>
              <option>Dan Musa</option>
              <option>Funtuwa</option>
              <option>Zango</option>
            </select>
          </div>
        </div>
      </div>
      <div className='m-auto max-w-6xl 2xl:max-w-8xl'>
        <div className='grid grid-col md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:gap-y-1 lg:gap-y-10'>
          <div className='md:col-span-2 lg:col-span-1'>
            <select className='w-full p-[11px] 2xl:p-[16px] rounded-md focus:border-none outline-none my-8 text-[#093158]  transition-all ease-linear duration-200'>
              <option>All Rooms</option>
              <option>2 Bedroom</option>
              <option>3 Bedroom</option>
              <option>4 Bedroom</option>
              <option>5 Bedroom</option>
            </select>
          </div>
          <div className=''>
            <input
              type='text'
              className='w-full p-2 2xl:p-3 rounded-md focus:border-none outline-none my-8 text-[#093158]  transition-all ease-linear duration-200'
              placeholder='Min Amount'
            />
          </div>
          <div className=''>
            <input
              type='text'
              className='w-full p-2 2xl:p-3 rounded-md focus:border-none outline-none my-8 text-[#093158]  transition-all ease-linear duration-200'
              placeholder='Max Amount'
            />
          </div>
        </div>
      </div>

      <button className='flex justify-center  bg-[#ffcb05] w-56 rounded-md text-white m-auto p-2 2xl:p-3 outline-none transition-all duration-300 ease-in-out hover:bg-yellow-500 2xl:w-[300px]'>
        SEARCH
      </button>
    </div>
  );
}

export default SearchProperty;
