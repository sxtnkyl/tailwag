import React from "react";

import { makeStyles, Grid } from "@material-ui/core";

import NavbarItem from "./NavbarItem";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navGrid: {
    height: "70vh",
  },
  navItem: {
    height: "25%",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const NavGrid = motion.custom(Grid);
  const MotionLink = motion.custom(Link);

  const NavItemList = () => (
    <NavGrid
      container
      direction="column"
      justify="space-evenly"
      className={classes.navGrid}>
      <MotionLink to="/services" className={classes.navItem}>
        <NavbarItem blobNum={0} text="Services" />
      </MotionLink>
      <MotionLink to="/" className={classes.navItem}>
        <NavbarItem blobNum={7} text="About" />
      </MotionLink>
      <MotionLink to="/stories" className={classes.navItem}>
        <NavbarItem blobNum={2} text="Stories" />
      </MotionLink>
      <MotionLink to="/contact" className={classes.navItem}>
        <NavbarItem blobNum={4} text="Contact" />
      </MotionLink>
    </NavGrid>
  );

  return <NavItemList />;
};

export default Navbar;
