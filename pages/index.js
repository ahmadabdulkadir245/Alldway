import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main/";
import Footer from "../components/Footer/";
import { userAccessToken, fetchUser } from "../Util/fetchUserDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) return router.push("/login");

    const [userInfo] = fetchUser();
    setUser(userInfo);
  }, []);

  return (
    <div className='iceland'>
      <Head>
        <title>AllDWay Real Estate</title>
      </Head>
      <Header />
      <Main />

      <Footer />
    </div>
  );
}
