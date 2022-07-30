import { HomeIcon, MenuAlt1Icon } from "@heroicons/react/solid";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { selectItems } from "../../slices/basketSlice";
import SideBar from "./SideBar";
import { MdClear } from "react-icons/md";

function Navigation() {
  const items = useSelector(selectItems);
  const [topToZero, setTopToZero] = useState(false);

  const [openSideBar, setOpenSideBar] = useState(false);
  const open = () => {
    setOpenSideBar(true);
  };
  const close = () => {
    setOpenSideBar(false);
  };

  // const navScrollHandler = useCallback(() => {
  //   if (window.scrollY === 50) {
  //     setTopToZero(true);
  //   } else {
  //     setTopToZero(false);
  //   }
  // }, [setTopToZero, window.scrollY]);

  return (
    <>
      <SideBar close={close} openSideBar={openSideBar} />
      <div
        className={`w-full h-10 py-9 px-4  md:px-8  lg:px-0 text-[#093158}] flex justify-center items-center ${
          !openSideBar ? "shadow-xl" : ""
        } iceland fixed top-0  ${
          !topToZero ? "lg:top-0" : "lg:top-[48px]"
        } bg-white  z-50`}
        // onScroll={navScrollHandler}
      >
        {" "}
        <div className='flex  justify-between items-center max-w-6xl 2xl:max-w-8xl  w-full '>
          <div className={`flex items-center`}>
            <Link href='/'>
              <a
                className={`text-3xl flex items-center font-semibold text-[#093158]`}
              >
                <HomeIcon className='h-10 ' />
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
            <Link href='/saved-homes'>
              <a>
                <button
                  className=' hidden lg:flex p-2 text-[#093158]  rounded-[8px] px-10 py-2  items-center justify-center text-lg bg-[#ffcb05]  hover:bg-[#093158] 
          hover:text-white transition-all duration-300 ease-linear'
                >
                  <span className='relative'>
                    <span className='absolute rounded-full w-[16px] h-[16px] bg-[#093158] text-white -top-1 -left-2 justify-center items-center flex p-2 text-sm '>
                      {items.length}
                    </span>
                    <HomeIcon className='h-6' />
                  </span>
                  Saved Homes
                </button>
              </a>
            </Link>
            {!openSideBar ? (
              <button className='flex lg:hidden '>
                <MenuAlt1Icon
                  className='h-8 text-[#093158] transition-all duration-200 ease-in-out hover:text-[#ffcb05]'
                  onClick={open}
                />
              </button>
            ) : (
              <button className='flex lg:hidden '>
                <MdClear
                  className='h-16 w-10 text-[#093158] transition-all duration-200 ease-in-out hover:text-[#ffcb05]'
                  onClick={close}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
