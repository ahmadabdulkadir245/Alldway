import { firebaseApp } from "../firebase";
import { useRouter } from "next/router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { async } from "@firebase/util";
import Header from "../components/Header";
import Link from "next/link";

function Signup() {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const signIn = async () => {
    const { user } = await signInWithPopup(firebaseAuth, provider);
    const { refreshToken, providerData } = user;

    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));

    router.push("/");
  };

  return (
    <div className='iceland'>
      <Header />
      <div className='px-2 flex justify-center   md:px-4 lg:px-0  items-center center-height '>
        <div className='border-2  border-[#093158]  px-2 lg:px-8 py-8 rounded-lg lg:rounded-xl bg-white shadow-xl drop-shadow-2xl   text-[#093158] w-[95%] md:w-[80%] md:mb-20 lg:mb-0 lg:w-[600px] 2xl:w-[700px] '>
          <h1 className='text-center  text-5xl '>
            SIGN<span className='text-[#ffcb05]'>UP</span>
          </h1>
          <div className='m-auto flex w-[100px] h-[2px] bg-[#ffcb05]'></div>
          <form>
            <input
              type='text'
              className='border-[2px] lg:border-[1px] rounded-lg md:rounded-full  border-[#093158] outline-none px-4 py-3 md:py-3 w-[90%]  m-auto flex my-6 md:my-9 lg:my-6 2xl:my-8'
              placeholder='username'
              required
            />
            <input
              type='text'
              className='border-[2px] lg:border-[1px] rounded-lg md:rounded-full  border-[#093158] outline-none px-4 py-3 w-[90%]  m-auto flex my-6 md:my-9 lg:my-6 2xl:my-8'
              placeholder='email'
              required
            />
            <input
              type='text'
              className='border-[2px] lg:border-[1px] rounded-lg md:rounded-full  border-[#093158] outline-none px-4 py-3 w-[90%]  m-auto flex my-6 md:my-9 lg:my-6 2xl:my-8'
              placeholder='password'
              required
            />
            <input
              type='text'
              className='border-[2px] lg:border-[1px] rounded-lg md:rounded-full  border-[#093158] outline-none px-4 py-3 w-[90%]  m-auto flex my-6 md:my-9 lg:my-6 2xl:my-8'
              placeholder='confirm password'
              required
            />
          </form>
          <button className='flex justify-center m-auto mt-5 lg:mt-10  bg-[#093158] w-56 rounded-full text-white  px-2 py-3 2xl:p-3 outline-none transition-all duration-300 ease-in-out hover:bg-[#ffcb05] 2xl:w-[300px]'>
            LOGIN
          </button>
          <div className='flex justify-center mt-3 space-x-4'>
            <p>Already have account? </p>
            <Link href='/login'>
              <a className='text-[#ffcb05] hover:text-blue-500 transition-colors duration-200 ease-linear'>
                Login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;