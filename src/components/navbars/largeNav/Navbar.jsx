import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <>
      <NavbarItem blobNum={0} text="Home" to="/" />

      <NavbarItem blobNum={7} text="Services" to="/services" />

      <NavbarItem blobNum={4} text="Testimonials" to="/testimonials" />

      <NavbarItem blobNum={2} text="Contact" to="/contact" />
    </>
  );
};

export default Navbar;
