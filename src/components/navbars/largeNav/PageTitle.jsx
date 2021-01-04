import React from "react";
import { makeStyles } from "@material-ui/core";
import * as c from "@material-ui/core";

import { motion, AnimatePresence } from "framer-motion";
import {
  EmailButton,
  PhoneButton,
  FacebookButton,
  InstaButton,
} from "../../ContactButtons";

const useStyles = makeStyles((theme) => ({
  topText: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.6rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.1rem",
    },
  },
}));

const PageTitle = ({ location }) => {
  const classes = useStyles();
  const MotionGrid = motion.custom(c.Grid);

  //currentPageTitle handles extra path if testimonials has a card open
  const currentPageTitle = location.pathname.includes("testimonials")
    ? "TESTIMONIALS"
    : location.pathname.substring(1, location.pathname.length).toUpperCase();

  const titleText = currentPageTitle.length > 0 ? currentPageTitle : "WELCOME";

  return (
    <AnimatePresence>
      <MotionGrid
        key="text"
        item
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
      >
        <c.Typography variant="h1" className={classes.topText}>
          {titleText}
        </c.Typography>
      </MotionGrid>
      <MotionGrid key="icons" container item justify="flex-end">
        <EmailButton />
        <PhoneButton />
        <FacebookButton />
        <InstaButton />
      </MotionGrid>
    </AnimatePresence>
  );
};

export default PageTitle;
