import React from "react";

import { makeStyles } from "@material-ui/core";
import theme from "../../../theme/theme";
import * as c from "@material-ui/core";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { ReactComponent as LogoDog } from "../../../utility/icons/svgs/logoDog.svg";
import { roundBlobs } from "../../../utility/blobPaths";
import useBlob from "../../../utility/hooks/useBlob";

const useStyles = makeStyles((theme) => ({
  container: {
    // border: "3px solid white",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
  },
  logoLeft: {
    fontSize: "10rem",
    border: "3px solid white",
    borderRadius: "50%",
    backgroundColor: theme.palette.secondary.light,
  },
  topText: {
    [theme.breakpoints.down("lg")]: {
      // fontSize: "1.75rem",
    },
  },
  botText: {
    fontFamily: "Roboto",
    fontSize: "2.7rem !important",
    [theme.breakpoints.down("lg")]: {
      // fontSize: "1.75rem",
    },
  },
}));

const Logo = () => {
  const classes = useStyles();
  const GridItem = motion.custom(c.Grid);
  // let blob = useBlob(themeColor, 1, roundBlobs[blobNum], 1.3);

  // const { scrollY } = useViewportScroll();
  // const transform = useTransform(scrollY, [0, 100], ["scale(1)", "scale(0.8)"]);

  const dogSvg = (
    <c.SvgIcon className={classes.logoLeft}>
      <LogoDog />
    </c.SvgIcon>
  );

  return (
    <GridItem
      item
      xs={5}
      container
      className={classes.container}
      justify="space-around"
    >
      <c.Grid item xs={4}>
        {dogSvg}
      </c.Grid>
      <c.Grid
        item
        xs={7}
        container
        direction="column"
        justify="center"
        style={{ textAlign: "center" }}
      >
        <c.Typography variant="h1" className={classes.topText}>
          TAILS WAG
        </c.Typography>
        <c.Typography variant="h1" className={classes.botText}>
          DOG TRAINING
        </c.Typography>
      </c.Grid>
    </GridItem>
  );
};

export default Logo;
