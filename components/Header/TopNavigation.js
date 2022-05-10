import { HomeIcon } from "@heroicons/react/outline";
import {
  CashIcon,
  FastForwardIcon,
  GiftIcon,
  HashtagIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";
import Colors from "../../constants/colors";

function TopNavigation() {
  const router = useRouter();
  const signOut = () => {
    localStorage.clear();
    router.push("/login");
  };
  return (
    <div
      className={`hidden lg:flex justify-center bg-[#093158] h-10 iceland   items-center text-xl  p-6 text-white`}
    >
      <div className='flex max-w-6xl 2xl:max-w-8xl w-full justify-between items-center '>
        <div className=''>(+234)-812-333-444</div>
        <div className={`flex space-x-14 items-center`}>
          <div className={`flex hover:text-[#ffcb05] cursor-pointer `}>
            <UserIcon className='h-6' />
            <p>Profile</p>
          </div>
          <div
            className={`flex hover:text-[#ffcb05] cursor-pointer `}
            onClick={signOut}
          >
            <LockClosedIcon className='h-6' />
            <p>Logout</p>
          </div>
          <div className='flex space-x-6'>
            <HomeIcon className={`h-5 hover:text-[#ffcb05]   cursor-pointer`} />
            <FastForwardIcon
              className={`h-5 hover:text-[#ffcb05]   cursor-pointer`}
            />
            <GiftIcon className={`h-5 hover:text-[#ffcb05]   cursor-pointer`} />
            <HashtagIcon
              className={`h-5 hover:text-[#ffcb05]   cursor-pointer`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavigation;
