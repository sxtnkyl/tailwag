import React from "react";

import { makeStyles, AppBar, Grid } from "@material-ui/core";
import useFade from "../utility/hooks/useFade";
import theme from "../theme/theme";

import NavbarItem from "./NavbarItem";
import Logo from "./Logo";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  atTop: {
    width: "100%",
    position: "-webkit-sticky",
  },
}));

//sticky bar
//on transition: bg to lightblue, bottom shadow, scale down blobs
//https://codesandbox.io/s/framer-motion-blur-scrolling-animation-example-vg32l?file=/src/Navigation.jsx

const Navbar = () => {
  const classes = useStyles();

  const TopBar = motion.custom(AppBar);
  const NavGrid = motion.custom(Grid);

  const { scrollY } = useViewportScroll();
  const background = useTransform(
    scrollY,
    [0, 700],
    [
      useFade(theme.palette.primary.light, 0),
      useFade(theme.palette.primary.light, 0.25),
    ]
  );
  const height = useTransform(scrollY, [0, 300], ["40vh", "12vh"]);
  const paddingTop = useTransform(scrollY, [0, 300], ["50%", "0px"]);
  const boxShadow = useTransform(
    scrollY,
    [0, 1200],
    [
      `0px 0px 0px 0px ${useFade(theme.palette.primary.dark, 0.5)}`,
      `0px 1px 4px 4px ${useFade(theme.palette.primary.dark, 0.5)}`,
    ]
  );

  return (
    <TopBar
      position="sticky"
      className={classes.atTop}
      style={{ background, height, paddingTop, boxShadow }}
    >
      <NavGrid
        container
        justify="space-evenly"
        style={{ height: "100%", flexWrap: "inherit" }}
      >
        <NavbarItem blobNum={0} text="Services" />
        <NavbarItem blobNum={7} text="About" />
        <Logo blobNum={0} themeColor={theme.palette.primary.main} />
        <NavbarItem blobNum={2} text="Gallery" />
        <NavbarItem blobNum={4} text="Contact" />
      </NavGrid>
    </TopBar>
  );
};

export default Navbar;
