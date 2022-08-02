import Head from "next/head";
import Main from "../components/Main/";
import Footer from "../components/Footer/";
import { userAccessToken, fetchUser } from "../Util/fetchUserDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   let token = sessionStorage.getItem("Token");
  //   if (!token) {
  //     router.push("/login");
  //   }
  // }, []);

  return (
    <div className='iceland'>
      <Head>
        <title>AllDWay Real Estate</title>
        <meta name='ir-site-verification-token' value='-2024820355'></meta>
      </Head>
      <Main />
      <Footer />
    </div>
  );
}
