import React from "react";
import { makeStyles } from "@material-ui/core";
import useFade from "../utility/hooks/useFade";
import * as c from "@material-ui/core";
import WaveTopper from "./WaveTopper";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "25vh",
    position: "relative",
    bottom: 0,
    boxShadow: `0px -1px 4px 4px ${useFade(theme.palette.primary.dark, 0.5)}`,
  },
  infoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 10,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const contactUs = (
    <c.Grid item>
      <c.Typography variant="h4">Contact Us</c.Typography>
      <c.Divider />
    </c.Grid>
  );

  const followUs = (
    <c.Grid item>
      <c.Typography variant="h4">Follow Us</c.Typography>
      <c.Divider />
    </c.Grid>
  );

  return (
    <div className={classes.footer}>
      <WaveTopper position="absolute" />
      <c.Grid
        className={classes.infoContainer}
        container
        direction="row"
        spacing={4}>
        {contactUs}
        {followUs}
      </c.Grid>
    </div>
  );
};

export default Navbar;
