import React from "react";
import AgentCard from "../../Util/AgentCard";

function Agents() {
  return (
    <div className='mt-20 m-auto max-w-6xl 2xl:max-w-8xl  px-4 md:px-8 lg:px-0'>
      <h1 className='text-4xl text-[#093158] text-center m-auto  '>
        {" "}
        OUR <span className='text-[#ffcb05]'> AGENTS</span>
      </h1>
      <div
        className='flex justify-center items-center m
      t-1 m-auto bg-[#ffcb05] w-32 h-[2px] mb-12'
      ></div>

      <div className='grid grid-col md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14'>
        <AgentCard
          img={"/Agents/IMG-20211003-WA0003.jpg"}
          role={"Manager"}
          name={"NAJIB LAWAL"}
          number={" 081- 6150-53 59"}
        />
        <AgentCard
          img={"/Agents/IMG-20211003-WA0004.jpg"}
          role={"AGENT"}
          name={"MUSTAPHA LAWAL"}
          number={" 081- 6150-53 59"}
        />
        <AgentCard
          img={"/Agents/IMG-20211003-WA0005.jpg"}
          role={"Manager"}
          name={"SADIQ TAJUDDEEN"}
          number={" 081- 6150-53 59"}
        />
        <AgentCard
          img={"/Agents/IMG-20211003-WA0006.jpg"}
          role={"Auditor"}
          name={"ABDULRAZAK HAMISU"}
          number={" 081- 6150-53 59"}
        />
      </div>
    </div>
  );
}

export default Agents;
