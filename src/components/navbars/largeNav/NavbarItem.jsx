import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import theme from "../../../theme/theme";
import { itemBlobs } from "../../../utility/blobPaths";
import useBlob from "../../../utility/hooks/useBlob";
import useFade from "../../../utility/hooks/useFade";

const useStyles = makeStyles((theme) => ({
  navItem: {
    height: "75%",
    display: "grid",
    overflow: "hidden",
    color: theme.palette.primary.main,
  },
  textdiv: {
    color: theme.palette.primary.main,
    zIndex: 15,
    gridArea: "1/1",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.2rem",
    },
  },
}));
//https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path

const NavbarItem = ({ blobNum, text, to, themeColor = "white" }) => {
  const classes = useStyles();
  const NavItemText = motion.custom(Typography);
  const GridItem = motion.custom(Grid);
  let blob = useBlob(themeColor, 1, itemBlobs[blobNum], 1.45);

  const scaleHoverTap = {
    initial: {
      scale: 1,
      textShadow: `2px 2px 1px ${useFade(theme.palette.primary.dark, 0)}`,
      letterSpacing: "0em",
    },
    hover: {
      scale: 1.1,
      textShadow: `2px 2px 2px ${useFade(theme.palette.primary.dark, 0.2)}`,
      letterSpacing: "0.05em",
    },
    tap: {
      scale: 0.9,
      textShadow: `1px 1px 1px ${useFade(theme.palette.primary.dark, 0.1)}`,
      letterSpacing: "0em",
    },
  };

  return (
    <GridItem item xs={3} className={classes.navItem}>
      <Link to={to} className={classes.navItem}>
        <NavItemText
          className={classes.textdiv}
          variant="h6"
          variants={scaleHoverTap}
          animate="initial"
          whileHover="hover"
          whileTap="tap">
          {text.toUpperCase()}
        </NavItemText>
        {blob}
      </Link>
    </GridItem>
  );
};

export default NavbarItem;
