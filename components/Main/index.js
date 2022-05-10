import React from "react";
import AboutUs from "./AboutUs";
import Agents from "./Agents";
import Banner from "./Banner";
import Rent from "./Rent";
import Sale from "./Sale";
import SearchProperty from "./SearchProperty";
import Service from "./Service";

function Main() {
  return (
    <div className=''>
      <Banner />
      <SearchProperty />
      <AboutUs />
      <Service />
      <Rent />
      <Sale />
      <Agents />
    </div>
  );
}

export default Main;
