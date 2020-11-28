import React from "react";

import { makeStyles } from "@material-ui/core";
import theme from "../../../theme/theme";
import { Typography, Grid } from "@material-ui/core";

import { motion, useViewportScroll, useTransform } from "framer-motion";

import { itemBlobs } from "../../../utility/blobPaths";
import useBlob from "../../../utility/hooks/useBlob";
import useFade from "../../../utility/hooks/useFade";

const useStyles = makeStyles((theme) => ({
  navItem: {
    display: "grid",
    overflow: "hidden",
    height: "100%",
  },
  textdiv: {
    zIndex: 15,
    gridArea: "1/1",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.2rem",
    },
  },
}));

//onhover: stroke-width, darken stroke, or scale
//onhover: change shape(blobnum)?
//https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path

const NavbarItem = ({
  blobNum,
  text,
  themeColor = theme.palette.secondary.main,
}) => {
  const classes = useStyles();
  const NavItemText = motion.custom(Typography);
  const GridItem = motion.custom(Grid);
  let blob = useBlob(theme.palette.primary.main, 1, itemBlobs[blobNum], 1.4);

  const { scrollY } = useViewportScroll();
  const transform = useTransform(
    scrollY,
    [0, 100],
    ["scale(1, 1)", "scale(0.5, 1)"]
  );

  const scaleHoverTap = {
    initial: {
      scale: 1,
      textShadow: `2px 2px 1px ${useFade(theme.palette.primary.dark, 0.6)}`,
      letterSpacing: "0em",
    },
    hover: {
      scale: 1.1,
      textShadow: `2px 2px 4px ${useFade(theme.palette.primary.dark, 1)}`,
      letterSpacing: "0.05em",
    },
    tap: {
      scale: 0.9,
      textShadow: `1px 1px 1px ${useFade(theme.palette.primary.dark, 0.4)}`,
      letterSpacing: "0em",
    },
  };

  return (
    <GridItem item xs className={classes.navItem} style={{ transform }}>
      <NavItemText
        className={classes.textdiv}
        variant="h3"
        variants={scaleHoverTap}
        animate="initial"
        whileHover="hover"
        whileTap="tap"
      >
        {text.toUpperCase()}
      </NavItemText>
      {blob}
    </GridItem>
  );
};

export default NavbarItem;
