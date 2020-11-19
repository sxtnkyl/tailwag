import React from "react";
import Banner from "../Banner";
import Navbar from "./Navbar";
import * as c from "@material-ui/core";
import { ReactComponent as Paw } from "../../../utility/icons/svgs/pawpaw.svg";
import { useLocation } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import useFade from "../../../utility/hooks/useFade";

const useStyles = c.makeStyles((theme) => ({
  topBar: {
    zIndex: 500,
    top: 0,
    position: "sticky",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    height: "6vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: theme.spacing(2),
  },
  background: {
    position: "absolute",
    backgroundColor: useFade(theme.palette.primary.light, 0.8),
    zIndex: -1,
    overflow: "hidden",
  },
  pawLeft: {
    height: "6vh",
    width: "6vh",
    padding: "8px",
    position: "absolute",
    top: "3vh",
    left: "3vh",
    backgroundColor: theme.palette.primary.dark,
    borderRadius: "50%",
    transform: "rotate(-30deg)",
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
      stiffness: 400,
      damping: 40,
    },
  },
  closed: {
    height: "6vh",
    width: "6vh",
    top: "3vh",
    left: "3vh",
    borderRadius: "50%",
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
  const MotionIcon = motion.custom(c.SvgIcon);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const topBar = (
    <motion.nav
      className={classes.topBar}
      position="sticky"
      initial={false}
      animate={isOpen ? "open" : "closed"}>
      <MotionIcon onClick={() => toggleOpen()} className={classes.pawLeft}>
        <Paw />
      </MotionIcon>
      <c.Typography variant="h5">TailsWag Dog Training</c.Typography>
      <motion.div className={classes.background} variants={bar}>
        <Banner location={location} />
        <Navbar />
      </motion.div>
    </motion.nav>
  );

  return <>{topBar}</>;
};

export default SmallNav;
