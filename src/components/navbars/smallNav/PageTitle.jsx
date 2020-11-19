import React from "react";
import { makeStyles } from "@material-ui/core";
import * as c from "@material-ui/core";
import { ReactComponent as Paw } from "../../../utility/icons/svgs/pawpaw.svg";
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
    justifyContent: "center",
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
  pawLeft: {
    transform: "scale(0.5) rotate(-30deg)",
    filter: theme.palette.shadows.pawShadow,
  },
  pawRight: {
    transform: "scale(0.5) rotate(30deg)",
    filter: theme.palette.shadows.pawShadow,
  },
}));

const PageTitle = ({ location }) => {
  const classes = useStyles();

  const currentPageTitle = location.pathname.includes("stories")
    ? "STORIES"
    : location.pathname.substring(1, location.pathname.length).toUpperCase();

  const titleText = currentPageTitle.length > 0 ? currentPageTitle : "WELCOME";

  const TitleSlide = ({ titleText }) => (
    <AnimatePresence>
      <motion.div
        className={classes.title}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}>
        <c.Button disabled startIcon={<Paw />} className={classes.pawLeft} />
        <c.Typography variant="h1">{titleText}</c.Typography>
        <c.Button disabled startIcon={<Paw />} className={classes.pawRight} />
      </motion.div>
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
