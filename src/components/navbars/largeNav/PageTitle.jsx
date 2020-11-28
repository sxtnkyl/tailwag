import React from "react";
import { makeStyles } from "@material-ui/core";
import * as c from "@material-ui/core";
import theme from "../../../theme/theme";
import Logo from "./Logo";
import { ReactComponent as Paw } from "../../../utility/icons/svgs/pawpaw.svg";
import { ReactComponent as LogoDog } from "../../../utility/icons/svgs/logoDog.svg";
import WaveTopper from "../../../components/WaveTopper";
import { motion, AnimatePresence } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "30vh",
    position: "relative",
    bottom: 0,
    background: theme.palette.primary.light,
  },
  title: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 10,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "& h1": {
      [theme.breakpoints.down("lg")]: {
        fontSize: "5rem",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "3.5rem",
      },
    },
  },

  pawRight: {
    transform: "scale(0.5) rotate(30deg)",
    filter: theme.palette.shadows.pawShadow,
    fontSize: "20rem",
  },
}));

const PageTitle = ({ location }) => {
  const classes = useStyles();
  const GridContainer = motion.custom(c.Grid);

  const currentPageTitle = location.pathname.includes("stories")
    ? "STORIES"
    : location.pathname.substring(1, location.pathname.length).toUpperCase();

  const titleText = currentPageTitle.length > 0 ? currentPageTitle : "WELCOME";

  const TitleSlide = ({ titleText }) => (
    <AnimatePresence>
      <GridContainer
        className={classes.title}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        justify="space-around"
      >
        <Logo />
        <GridContainer item xs={5} container justify="center">
          <c.Typography variant="h1">{titleText}</c.Typography>
        </GridContainer>
      </GridContainer>
    </AnimatePresence>
  );

  return (
    <div className={classes.container}>
      <WaveTopper layers={1} inverted={false} />
      <TitleSlide titleText={titleText} />
      <WaveTopper position="absolute" layers={1} />
    </div>
  );
};

export default PageTitle;
