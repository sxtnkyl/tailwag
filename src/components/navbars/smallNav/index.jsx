import React from "react";
import * as c from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import useFade from "../../../utility/hooks/useFade";

import Banner from "../Banner";
import Navbar from "./Navbar";
import { ReactComponent as LogoDog } from "../../../utility/icons/svgs/logoDog.svg";

const useStyles = c.makeStyles((theme) => ({
  topBar: {
    zIndex: 500,
    top: 0,
    position: "sticky",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    height: "8vh",
    minWidth: "-webkit-fill-available",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: theme.spacing(2),
  },
  background: {
    position: "absolute",
    backgroundColor: useFade(theme.palette.primary.main, 1),
    zIndex: -1,
    overflow: "hidden",
  },
  pawLeft: {
    position: "absolute",
    height: "8vh",
    width: "8vh",
    left: "2vh",
    backgroundColor: theme.palette.secondary.main,
    border: `3px solid white`,
    borderRadius: "50%",
    // transform: "rotate(-30deg)",
    filter: theme.palette.shadows.pawShadow,
  },
}));

const bar = {
  open: {
    height: "100vh",
    width: "100vw",
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: "0%",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  closed: {
    height: "8vh",
    width: "8vh",
    top: "4vh",
    left: "2vh",
    borderRadius: "50%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const logo = {
  open: {
    y: "1vh",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  closed: {
    y: "4vh",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const SmallNav = () => {
  const classes = useStyles();
  const location = useLocation();
  const [isOpen, toggleOpen] = useCycle(false, true);

  const currentPageTitle = location.pathname.includes("stories")
    ? "STORIES"
    : location.pathname.substring(1, location.pathname.length).toUpperCase();

  const titleText = currentPageTitle.length > 0 ? currentPageTitle : "Welcome!";

  return (
    <motion.nav
      className={classes.topBar}
      position="sticky"
      animate={isOpen ? "open" : "closed"}>
      <motion.div
        onClick={() => toggleOpen()}
        className={classes.pawLeft}
        variants={logo}>
        <LogoDog />
      </motion.div>
      <c.Typography
        style={{ letterSpacing: "1px", fontWeight: 500 }}
        variant="h3">
        ~ {titleText}
      </c.Typography>
      <motion.div className={classes.background} variants={bar}>
        <Navbar toggle={toggleOpen} />
        <Banner location={location} />
      </motion.div>
    </motion.nav>
  );
};

export default SmallNav;
