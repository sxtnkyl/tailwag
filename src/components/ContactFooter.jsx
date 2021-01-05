import React from "react";
import useFade from "../utility/hooks/useFade";
import * as c from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "../theme/theme";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  EmailButton,
  PhoneButton,
  FacebookButton,
  InstaButton,
} from "./ContactButtons";
import WaveTopper from "./WaveTopper";
import Logo from "./navbars/largeNav/Logo";

const useStyles = c.makeStyles((theme) => ({
  footer: {
    height: "30vh",
    position: "relative",
    bottom: 0,
    boxShadow: `0px -1px 4px 4px ${useFade(theme.palette.primary.dark, 0.2)}`,
    [theme.breakpoints.down("md")]: {
      height: "25vh",
    },
  },
  infoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    padding: `${theme.spacing(2)}px ${theme.spacing(8)}px`,
    [theme.breakpoints.down("md")]: {
      padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    },
  },
  divider: {
    height: "1px",
    backgroundColor: "black",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      height: "0px",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const md = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <motion.div className={classes.footer} layout>
      <WaveTopper position="absolute" />
      <c.Grid
        className={classes.infoContainer}
        container
        direction="row"
        justify={!md ? "space-between" : "center"}
        alignContent="flex-start">
        <c.Grid item xs={8} md={4} lg={3}>
          <Link to="/">
            <Logo fontColor={"black"} logoBorder="3px solid black" />
          </Link>
        </c.Grid>

        <c.Grid
          item
          xs={10}
          md={4}
          lg={3}
          container
          justify="space-around"
          alignContent="center">
          <EmailButton stroke="black" background={theme.palette.primary.main} />
          <PhoneButton stroke="black" background={theme.palette.primary.main} />
          <FacebookButton
            stroke="black"
            background={theme.palette.primary.main}
          />
          <InstaButton stroke="black" background={theme.palette.primary.main} />
        </c.Grid>
      </c.Grid>
    </motion.div>
  );
};

export default Navbar;
