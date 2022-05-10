import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div className='mt-20 m-auto max-w-6xl 2xl:max-w-8xl px-8'>
      <h1 className='text-4xl text-[#093158] text-center '>
        {" "}
        ABOUT <span className='text-[#ffcb05]'> US</span>
      </h1>
      <div className='flex justify-center items-center mt-1 m-auto bg-[#ffcb05] w-32 h-[2px] mb-12'></div>

      <div className='grid grid-col md:grid-cols-2 lg:grid-cols-2    md:gap-x-5 lg:gap-x-12 gap-y-8 '>
        <div className=''>
          <p className='  text-[#093158] lg:leading-8 2xl:text-xl 2xl:leading-9 2xl:px-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis voluptates amet animi tempora enim itaque expedita iusto
            magni praesentium maiores cumque quam eum deleniti sit recusandae
            similique, alias quasi in, temporibus illo corrupti distinctio, nisi
            ipsum adipisci. Odio nostrum ut esse sed, dolor eaque eligendi fuga.
            Ipsam sunt nemo nostrum!
          </p>
          <p className=' text-[#093158] lg:leading-8 2xl:text-xl 2xl:leading-7 2xl:px-0'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            accusantium voluptate, repellat ipsum fugit minima pariatur ipsam
            incidunt. Velit suscipit rem atque eveniet architecto aliquam quam
            est aspernatur reprehenderit quo!
          </p>
        </div>
        <div className='l'>
          <img className='w-full  h-full' src='/16.jpg' alt='About-us Image' />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
