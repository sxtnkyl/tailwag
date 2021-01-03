import React from "react";

import { makeStyles, Grid } from "@material-ui/core";

import NavbarItem from "./NavbarItem";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navGrid: {
    height: "80vh",
    paddingTop: "10vh",
  },
  navItem: {
    height: "25%",
  },
}));

const Navbar = ({ toggle }) => {
  const classes = useStyles();

  const NavGrid = motion.custom(Grid);
  const MotionLink = motion.custom(Link);

  const NavItemList = () => (
    <NavGrid
      container
      direction="column"
      justify="space-evenly"
      className={classes.navGrid}
    >
      <MotionLink to="/" className={classes.navItem} onClick={toggle}>
        <NavbarItem blobNum={3} text="Home" />
      </MotionLink>
      <MotionLink to="/services" className={classes.navItem} onClick={toggle}>
        <NavbarItem blobNum={7} text="Services" />
      </MotionLink>
      <MotionLink
        to="/testimonials"
        className={classes.navItem}
        onClick={toggle}
      >
        <NavbarItem blobNum={4} text="Testimonials" />
      </MotionLink>
      <MotionLink to="/contact" className={classes.navItem} onClick={toggle}>
        <NavbarItem blobNum={2} text="Contact" />
      </MotionLink>
    </NavGrid>
  );

  return <NavItemList />;
};

export default Navbar;
