import React from "react";

import { makeStyles } from "@material-ui/core";
import theme from "../../../theme/theme";
import * as c from "@material-ui/core";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { roundBlobs } from "../../../utility/blobPaths";
import useBlob from "../../../utility/hooks/useBlob";

const useStyles = makeStyles((theme) => ({
  navItem: {
    display: "grid",
  },
  textdiv: {
    zIndex: 15,
    gridArea: "1/1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconbg: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: theme.palette.secondary.main,
    borderRadius: "50%",
  },
  topText: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.2rem",
    },
  },
  botText: {
    fontFamily: "Roboto",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.75rem",
    },
  },
}));

const Logo = ({ blobNum, themeColor = theme.palette.secondary.main }) => {
  const classes = useStyles();
  const GridItem = motion.custom(c.Grid);
  let blob = useBlob(theme.palette.secondary.main, 1, roundBlobs[blobNum], 1.3);

  const { scrollY } = useViewportScroll();
  const transform = useTransform(scrollY, [0, 100], ["scale(1)", "scale(0.8)"]);

  return (
    <GridItem item className={classes.navItem} style={{ transform }}>
      {blob}
      <div className={classes.textdiv}>
        <c.Typography variant="h2" className={classes.topText}>
          TAILS WAG
        </c.Typography>
        <c.Typography variant="h4" className={classes.botText}>
          DOG TRAINING
        </c.Typography>
      </div>
    </GridItem>
  );
};

export default Logo;
