import React from "react";
import Banner from "../Banner";
import Navbar from "./Navbar";
import PageTitle from "./PageTitle";

import { useLocation } from "react-router-dom";

const LargeNav = () => {
  const location = useLocation();

  return (
    <>
      <Banner location={location} />
      <Navbar />
      <PageTitle location={location} />
    </>
  );
};

export default LargeNav;
