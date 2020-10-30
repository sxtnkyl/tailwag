import React from "react";

import { makeStyles, AppBar, Grid } from "@material-ui/core";
import useFade from "../utility/hooks/useFade";
import theme from "../theme/theme";

import NavbarItem from "./NavbarItem";
import Logo from "./Logo";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    [0, 100],
    [
      useFade(theme.palette.primary.light, 0),
      useFade(theme.palette.primary.light, 1),
    ]
  );
  const height = useTransform(scrollY, [0, 100], ["40vh", "11vh"]);
  const paddingTop = useTransform(scrollY, [0, 100], ["50%", "0px"]);
  const paddingBottom = useTransform(scrollY, [0, 100], ["50%", "0px"]);
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    [
      `0px 0px 0px 0px ${useFade(theme.palette.primary.dark, 0.5)}`,
      `0px 1px 4px 4px ${useFade(theme.palette.primary.dark, 0.5)}`,
    ]
  );

  const NavItemList = () => (
    <NavGrid
      container
      justify="space-evenly"
      style={{ height: "100%", flexWrap: "inherit" }}>
      <Link to="/services">
        <NavbarItem blobNum={0} text="Services" />
      </Link>
      <Link to="/">
        <NavbarItem blobNum={7} text="About" />
      </Link>
      <Logo blobNum={0} themeColor={theme.palette.primary.main} />
      <Link to="/stories">
        <NavbarItem blobNum={2} text="Stories" />
      </Link>
      <Link to="/contact">
        <NavbarItem blobNum={4} text="Contact" />
      </Link>
    </NavGrid>
  );

  return (
    <TopBar
      position="sticky"
      className={classes.atTop}
      style={{ background, height, paddingTop, paddingBottom, boxShadow }}>
      <NavItemList />
    </TopBar>
  );
};

export default Navbar;
