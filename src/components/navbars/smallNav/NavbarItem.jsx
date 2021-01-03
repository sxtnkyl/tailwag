import React from "react";

import { makeStyles } from "@material-ui/core";
import theme from "../../../theme/theme";
import { Typography, Grid } from "@material-ui/core";

import { motion } from "framer-motion";

import { itemBlobs } from "../../../utility/blobPaths";
import useBlob from "../../../utility/hooks/useBlob";

const useStyles = makeStyles((theme) => ({
  navItem: {
    display: "grid",
    overflow: "hidden",
    height: "100%",
  },
  textdiv: {
    color: theme.palette.primary.main,
    zIndex: 15,
    gridArea: "1/1",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
  },
}));

const NavbarItem = ({
  blobNum,
  text,
  themeColor = theme.palette.secondary.main,
}) => {
  const classes = useStyles();
  const NavItemText = motion.custom(Typography);
  const GridItem = motion.custom(Grid);
  let blob = useBlob("white", 1, itemBlobs[blobNum], 1.4);

  return (
    <GridItem item xs className={classes.navItem}>
      <NavItemText className={classes.textdiv} variant="h3">
        {text.toUpperCase()}
      </NavItemText>
      {blob}
    </GridItem>
  );
};

export default NavbarItem;
