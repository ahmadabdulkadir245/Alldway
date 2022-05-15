import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MdClear } from "react-icons/md";
import { useSelector } from "react-redux";
import { AuthContext } from "../../context/auth-context";
import { selectItems } from "../../slices/basketSlice";

function SideBar({ openSideBar, close }) {
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const signOut = () => {
    localStorage.clear();
    authCtx.logout();
    router.push("/login");
    close();
  };
  const items = useSelector(selectItems);
  return (
    <div className='text-[#093158] iceland text-center'>
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
              <Link href='/saved-homes'>
                <a className='hover:text-[#ffcb05]  transition-colors duration-300'>
                  Saved Homes
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
        <div className='lg:hidden fixed top-0 left-0   w-full lg:w-1/3 bg-white h-screen  text-2xl md:text-4xl grid place-items-center  transition-transform duration-500 ease-in-out translate-y-0 z-50'>
          <div className='absolute right-0 top-0 p-3'>
            <MdClear className='h-16 w-10' onClick={close} />
          </div>
          <div className='space-y-14'>
            <div className='transition-transform duration-500 transition-x-full ease-in-out  '>
              <Link href='/'>
                <a
                  className='hover:text-[#ffcb05]  transition-colors duration-300'
                  onClick={() => close()}
                >
                  Home
                </a>
              </Link>
            </div>
            <div className='transition-transform duration-500 ease-in-out  translate-x-0'>
              <Link href='/'>
                <a
                  className='hover:text-[#ffcb05]  transition-colors duration-300'
                  onClick={() => close()}
                >
                  About
                </a>
              </Link>
            </div>
            <div className='transition-transform duration-500 ease-in-out  translate-x-0'>
              <Link href='/'>
                <a
                  className='hover:text-[#ffcb05]  transition-colors duration-300'
                  onClick={() => close()}
                >
                  Services
                </a>
              </Link>
            </div>
            <div className='transition-transform duration-500 ease-in-out  translate-x-0'>
              <Link href='/testApp '>
                <a
                  className='hover:text-[#ffcb05]  transition-colors duration-300'
                  onClick={() => close()}
                >
                  Contact us
                </a>
              </Link>
            </div>
            <div className='transition-transform duration-500 ease-in-out  translate-x-0'>
              <Link href='/saved-homes'>
                <a
                  className='hover:text-[#ffcb05]  transition-colors duration-300 relative'
                  onClick={() => close()}
                >
                  Saved Homes
                  <span className='absolute -top-2 -left-4 md:-top-4 md:-left-6 bg-[#093158] rounded-full text-white p-2 flex items-center justify-center h-5 w-5 md:h-8 md:w-8 '>
                    {items.length}
                  </span>
                </a>
              </Link>
            </div>
            <div
              className='transition-transform duration-500 ease-in-out  translate-x-0'
              onClick={signOut}
            >
              <a className='hover:text-[#ffcb05]  transition-colors duration-300'>
                Logout
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
