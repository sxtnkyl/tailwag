import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import NavbarItem from "./NavbarItem";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  navGrid: {
    height: "80vh",
    paddingTop: "10vh",
  },
});

const Navbar = ({ toggle }) => {
  const classes = useStyles();
  const NavGrid = motion.custom(Grid);

  return (
    <NavGrid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.navGrid}
    >
      <NavbarItem blobNum={3} text="Home" to="/" toggle={toggle} />

      <NavbarItem blobNum={7} text="Services" to="/services" toggle={toggle} />

      <NavbarItem
        blobNum={4}
        text="Testimonials"
        to="/testimonials"
        toggle={toggle}
      />

      <NavbarItem blobNum={2} text="Contact" to="/contact" toggle={toggle} />
    </NavGrid>
  );
};

export default Navbar;
