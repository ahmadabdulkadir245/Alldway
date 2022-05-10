import { LockClosedOutline, Menu } from "heroicons-react";
import Link from "next/link";
import React from "react";
import { MdClear } from "react-icons/md";

function SideBar({ openSideBar, close }) {
  return (
    <div className='text-[#093158] '>
      {!openSideBar ? (
        <div className=' lg:hidden  w-full lg:w-1/3 bg-white h-screen  text-2xl md:text-4xl grid place-items-center absolute transition-transform duration-500 ease-in-out  -translate-y-full '>
          <div className='absolute right-0 top-0 p-3'>
            <MdClear className='h-16 w-10' onClick={close} />
          </div>

          <div className='space-y-14'>
            <div className=' transition-transform duration-500 ease-in-out  translate-x-full'>
              <Link href='/'>
                <a className='hover:text-[#ffcb05]  transition-colors duration-300'>
                  Home
                </a>
              </Link>
            </div>
            <div className='transition-transform duration-500 ease-in-out  translate-x-0'>
              <Link href='/'>
                <a className='hover:text-[#ffcb05]  transition-colors duration-300'>
                  About
                </a>
              </Link>
            </div>
            <div className='transition-transform duration-500 ease-in-out  translate-x-0'>
              <Link href='/'>
                <a className='hover:text-[#ffcb05]  transition-colors duration-300'>
                  Services
                </a>
              </Link>
            </div>
            <div className='transition-transform duration-500 ease-in-out  translate-x-0'>
              <Link href='/'>
                <a className='hover:text-[#ffcb05]  transition-colors duration-300'>
                  Contact Us
                </a>
              </Link>
            </div>
            <div className='transition-transform duration-500 ease-in-out  translate-x-0'>
              <Link href='/'>
                <a className='hover:text-[#ffcb05]  transition-colors duration-300'>
                  Profile
                </a>
              </Link>
            </div>
            <div>
              <Link href='/'>
                <a className='hover:text-[#ffcb05]  transition-colors duration-300'>
                  Logout
                </a>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className='lg:hidden fixed top-0 left-0    w-full lg:w-1/3 bg-white h-screen  text-2xl md:text-4xl grid place-items-center  transition-transform duration-500 ease-in-out translate-y-0'>
          <div className='absolute right-0 top-0 p-3'>
            <MdClear className='h-16 w-10' onClick={close} />
          </div>

          <div className='space-y-14'>
            <div className='transition-transform duration-500 transition-x-full ease-in-out  '>
              <Link href='/'>
                <a className='hover:text-[#ffcb05]  transition-colors duration-300'>
                  Home
                </a>
              </Link>
            </div>
            <div className='transition-transform duration-500 ease-in-out  translate-x-0'>
              <Link href='/'>
                <a className='hover:text-[#ffcb05]  transition-colors duration-300'>
                  About
                </a>
              </Link>
            </div>
            <div className='transition-transform duration-500 ease-in-out  translate-x-0'>
              <Link href='/'>
                <a className='hover:text-[#ffcb05]  transition-colors duration-300'>
                  Services
                </a>
              </Link>
            </div>
            <div className='transition-transform duration-500 ease-in-out  translate-x-0'>
              <Link href='/testApp'>
                <a className='hover:text-[#ffcb05]  transition-colors duration-300'>
                  Test
                </a>
              </Link>
            </div>
            <div className='transition-transform duration-500 ease-in-out  translate-x-0'>
              <Link href='/'>
                <a className='hover:text-[#ffcb05]  transition-colors duration-300'>
                  Profile
                </a>
              </Link>
            </div>
            <div className='transition-transform duration-500 ease-in-out  translate-x-0'>
              <Link href='/'>
                <a className='hover:text-[#ffcb05]  transition-colors duration-300'>
                  Logout
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
