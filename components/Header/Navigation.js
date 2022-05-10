import {
  HomeIcon,
  MenuAlt1Icon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { addToBasket, selectItems } from "../../slices/basketSlice";
function Navigation() {
  const items = useSelector(selectItems);

  return (
    <div
      className={`w-full h-10 py-9 px-4  md:px-8  lg:px-0 text-[#093158}] flex justify-center items-center`}
    >
      <div className='flex  justify-between items-center max-w-6xl 2xl:max-w-8xl  w-full'>
        <div className={`flex items-center`}>
          <Link href='/'>
            <a className={`text-3xl flex items-center font-semibold`}>
              <HomeIcon className='h-10 text-[#093158]' />
              All
              <span className={`hover:text-[#093158}] text-[#ffcb05] `}>
                Dway
              </span>
            </a>
          </Link>
        </div>

        <div className='hidden lg:flex  space-x-20 items-center '>
          <Link href='/'>
            <a className='text-[#093158] hover:text-[#ffcb05] transition-colors duration-200 ease-in-out'>
              HOME
            </a>
          </Link>
          <Link href='/'>
            <a className='text-[#093158] hover:text-[#ffcb05] transition-colors duration-200 ease-in-out'>
              ABOUT
            </a>
          </Link>
          <Link href='/'>
            <a className='text-[#093158] hover:text-[#ffcb05] transition-colors duration-200 ease-in-out'>
              SERVICES
            </a>
          </Link>
          <Link href='/'>
            <a className='text-[#093158] hover:text-[#ffcb05] transition-colors duration-200 ease-in-out'>
              PROPERTIES
            </a>
          </Link>
          <Link href='/'>
            <a className='text-[#093158] hover:text-[#ffcb05] transition-colors duration-200 ease-in-out'>
              AGENTS
            </a>
          </Link>
        </div>
        <div className='flex items-center '>
          <button
            className=' hidden lg:flex p-2 text-[#093158]  rounded-[8px] w-32  items-center justify-center text-lg bg-[#ffcb05]  hover:bg-[#093158] 
          hover:text-white transition-all duration-300 ease-linear'
          >
            <div className='relative'>
              <span className='absolute rounded-full w-[16px] h-[16px] bg-[#093158] text-white -top-2 -left-3 justify-center items-center flex p-2 text-sm '>
                {items.length}
              </span>
              <ShoppingCartIcon className='h-6 pr-1' />
            </div>
            Basket
          </button>
          <button className='flex lg:hidden '>
            <MenuAlt1Icon className='h-8' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
