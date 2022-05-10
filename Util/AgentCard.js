import React from "react";

function AgentCard({ name, role, img, number }) {
  return (
    <div>
      <div className='text-center mx-12 rounded-md overflow-hidden'>
        <img
          src={img}
          className='w-full h-[200px] lg:h-[300px] object-contain'
          alt=''
        />
        <div className='bg-[#093158] text-white px-5 py-4 relative'>
          <h3 className='text-lg'>{name}</h3>
          <h4 className='text-sm text-gray-400 pb-4'>{role} All Dway</h4>
          <div className=' h-10 mt-1 p-3 flex items-center justify-center bg-[#ffcb05] text-[#093158]'>
            {number}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentCard;
