import React from "react";
import { userAccessToken } from "../Util/fetchUserDetails";
import Navigation from "./Header/Navigation";
import TopNavigation from "./Header/TopNavigation";

function NewHeader() {
  const accessToken = userAccessToken();
  if (!accessToken) {
    return <Navigation />;
  }
  return (
    <div>
      <TopNavigation />
      <Navigation />
    </div>
  );
}

export default NewHeader;
