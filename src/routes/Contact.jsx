//map locator > connection statement > contact form

import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "100vh",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return <div className={classes.section}>Contact section</div>;
};

export default Contact;
