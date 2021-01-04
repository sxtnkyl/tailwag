import React from "react";
import { makeStyles } from "@material-ui/core";
import theme from "../../../theme/theme";
import { Typography, Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { itemBlobs } from "../../../utility/blobPaths";
import useBlob from "../../../utility/hooks/useBlob";
import useFade from "../../../utility/hooks/useFade";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    width: "100%",
    height: "25%",
    [theme.breakpoints.down("md")]: {
      width: "75%",
      fontSize: "1.7rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      fontSize: "1.5rem",
    },
  },
  navItem: {
    height: "100%",
    width: "100%",
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
    fontSize: "inherit",
  },
}));
//https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path

const NavbarItem = ({
  blobNum,
  text,
  to,
  themeColor = theme.palette.secondary.main,
  toggle,
}) => {
  const classes = useStyles();
  const NavItemText = motion.custom(Typography);
  const GridItem = motion.custom(Grid);
  let blob = useBlob("white", 1, itemBlobs[blobNum], 1.45);

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
    <GridItem item className={classes.itemContainer}>
      <Link to={to} className={classes.navItem} onClick={() => toggle()}>
        <NavItemText
          className={classes.textdiv}
          variant="h6"
          variants={scaleHoverTap}
          animate="initial"
          whileHover="hover"
          whileTap="tap"
        >
          {text.toUpperCase()}
        </NavItemText>
        {blob}
      </Link>
    </GridItem>
  );
};

export default NavbarItem;
