import React from "react";
// import Image from "next/image";

function Banner() {
  return (
    <div className='w-full'>
      <img
        src='/17.jpg'
        alt='banner-img'
        className={`w-full h-[50vh] md:h-[55vh] lg:h-[75vh]`}
      />
    </div>
  );
}

export default Banner;
