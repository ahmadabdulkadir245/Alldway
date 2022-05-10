import {
  HomeIcon,
  MenuAlt1Icon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { userAccessToken } from "../../Util/fetchUserDetails";
function NotSignedInNav() {
  return (
    <div className='flex  justify-between items-center  w-full shadow-lg p-2 '>
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
    </div>
  );
}

export default NotSignedInNav;
